import { AuthenticationService } from './api/authentication.service';
import { SearchService } from './api/search.service';
export declare class SabreFlightService {
    private readonly authenticationService;
    private readonly searchSearvice;
    constructor(authenticationService: AuthenticationService, searchSearvice: SearchService);
    search(searchRequestDto: any): Promise<any>;
}
