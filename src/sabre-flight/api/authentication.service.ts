import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthenticationService {
  private authenticationToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.authenticationToken = '';
  }

  get token(): string {
    return this.authenticationToken;
  }

  set token(newToken: string) {
    this.authenticationToken = newToken;
  }

  async createToken(): Promise<void> {
    try {
      const postData = new URLSearchParams();
      postData.append('grant_type', 'client_credentials');

      const response: AxiosResponse = await this.httpService.post(
        `${this.configService.get<string>('API_ENDPOINT')}/v2/auth/token`,
        postData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Authorization': `Basic ${this.configService.get<string>('USER_SECRET')}`,
          },
        },
      ).toPromise();

      if (response.status === HttpStatus.OK) {
        this.token = response.data.access_token;
      }
    } catch (error) {
      if (error.response) {
        console.error('\nUnexpected error calling authentication.');
        console.error(`[${error.response.status}] ... [${error.response.statusText}]`);
        console.error(`[${error.response.data.error}] ... [${error.response.data.error_description}]`);
        throw new HttpException(
          `Error: ${error.response.data.error_description}`,
          error.response.status,
        );
      } else {
        console.error('Error: ', error.message);
        throw new HttpException('Unexpected error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
