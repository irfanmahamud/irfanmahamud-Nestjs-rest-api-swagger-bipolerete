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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
let SearchService = class SearchService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.apiAccessToken = '';
    }
    setToken(newToken) {
        this.apiAccessToken = newToken;
    }
    async bargainFinderMax(postData) {
        try {
            const response = await this.httpService.post(`${this.configService.get('API_ENDPOINT')}/v4/offers/shop`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${this.apiAccessToken}`,
                },
            }).toPromise();
            if (response.status === common_1.HttpStatus.OK) {
                return response.data;
            }
        }
        catch (error) {
            if (error.response) {
                console.error('\nUnexpected error calling Search.');
                console.error(`[${error.response.status}] ... [${error.response.statusText}]`);
                console.error(`[${error.response.data.error}] ... [${error.response.data.error_description}]`);
                throw new common_1.HttpException(`Error: ${error.response.data.error_description}`, error.response.status);
            }
            else {
                console.error('Error: ', error.message);
                throw new common_1.HttpException('Unexpected error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async getBooking(requestDto) {
        try {
            const response = await this.httpService.post(`${this.configService.get('API_ENDPOINT')}/v4/offers/shop`, requestDto, {
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json',
                    authorization: `Bearer ${this.apiAccessToken}`,
                },
            }).toPromise();
            return response.data;
        }
        catch (error) {
            console.error(`[${error.response.status}] ... [${error.response.statusText}]`);
            console.error(`[${error.response.data.errorCode}] ... [${error.response.data.message}]`);
            throw new common_1.HttpException(error.response.data, error.response.status);
        }
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], SearchService);
//# sourceMappingURL=search.service.js.map