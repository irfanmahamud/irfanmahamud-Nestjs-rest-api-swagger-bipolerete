import { Injectable } from '@nestjs/common';
import { SearchRequestDto } from './dto/search-request.dto';
import { AuthenticationService } from './api/authentication.service';
import { SearchService } from './api/search.service';

@Injectable()
export class SabreFlightService {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly searchSearvice: SearchService
  ) {}

  async search(searchRequestDto) {
    await this.authenticationService.createToken();
    let data = searchRequestDto;
    data['token'] = this.authenticationService.token
    this.searchSearvice.setToken(this.authenticationService.token);

    let response = await this.searchSearvice.bargainFinderMax(searchRequestDto)
    return await response;
  }
}
