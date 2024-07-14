import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { SearchRequestDto } from '../dto/search-request.dto';

@Injectable()
export class SearchService {
  private apiAccessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiAccessToken = '';
  }

  setToken(newToken: string) {
    this.apiAccessToken = newToken;
  }

  async bargainFinderMax(postData): Promise<any> {
    try {

      const response: AxiosResponse = await this.httpService.post(
        `${this.configService.get<string>('API_ENDPOINT')}/v4/offers/shop`,
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.apiAccessToken}`,
          },
        },
      ).toPromise();

      //this.fileHelperService.writeData(JSON.stringify(response.data), './cachedResponse.json');
     
      if (response.status === HttpStatus.OK) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('\nUnexpected error calling Search.');
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


  async getBooking(requestDto: SearchRequestDto): Promise<any> {
    try {
      const response = await this.httpService.post(
        `${this.configService.get<string>('API_ENDPOINT')}/v4/offers/shop`,
        requestDto,
        {
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',
            authorization: `Bearer ${this.apiAccessToken}`,
          },
        },
      ).toPromise();

      //this.fileHelperService.writeData(JSON.stringify(response.data), './cachedResponse.json');
      return response.data;
    } catch (error) {
      console.error(`[${error.response.status}] ... [${error.response.statusText}]`);
      console.error(`[${error.response.data.errorCode}] ... [${error.response.data.message}]`);

     // this.fileHelperService.writeData(JSON.stringify(error.response.data), './cachedResponse.json');
      throw new HttpException(error.response.data, error.response.status);
    }
  }


}
