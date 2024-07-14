"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreFlightService = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./api/authentication.service");
const search_service_1 = require("./api/search.service");
let SabreFlightService = class SabreFlightService {
    constructor(authenticationService, searchSearvice) {
        this.authenticationService = authenticationService;
        this.searchSearvice = searchSearvice;
    }
    async search(searchRequestDto) {
        await this.authenticationService.createToken();
        let data = searchRequestDto;
        data['token'] = this.authenticationService.token;
        this.searchSearvice.setToken(this.authenticationService.token);
        let response = await this.searchSearvice.bargainFinderMax(searchRequestDto);
        return await response;
    }
};
exports.SabreFlightService = SabreFlightService;
exports.SabreFlightService = SabreFlightService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        search_service_1.SearchService])
], SabreFlightService);
//# sourceMappingURL=sabre-flight.service.js.map