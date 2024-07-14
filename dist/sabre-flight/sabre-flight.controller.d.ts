import { SabreFlightService } from './sabre-flight.service';
import { Cache } from 'cache-manager';
export declare class SabreFlightController {
    private readonly sabreFlightService;
    private cacheService;
    constructor(sabreFlightService: SabreFlightService, cacheService: Cache);
    search(searchRequestDto: any): Promise<any>;
}
