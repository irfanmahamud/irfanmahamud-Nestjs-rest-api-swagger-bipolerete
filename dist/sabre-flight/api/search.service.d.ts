import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { SearchRequestDto } from '../dto/search-request.dto';
export declare class SearchService {
    private readonly httpService;
    private readonly configService;
    private apiAccessToken;
    constructor(httpService: HttpService, configService: ConfigService);
    setToken(newToken: string): void;
    bargainFinderMax(postData: any): Promise<any>;
    getBooking(requestDto: SearchRequestDto): Promise<any>;
}
