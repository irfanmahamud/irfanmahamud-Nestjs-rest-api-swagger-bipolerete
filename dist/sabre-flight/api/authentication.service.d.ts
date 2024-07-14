import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class AuthenticationService {
    private readonly httpService;
    private readonly configService;
    private authenticationToken;
    constructor(httpService: HttpService, configService: ConfigService);
    get token(): string;
    set token(newToken: string);
    createToken(): Promise<void>;
}
