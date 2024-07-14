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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
let AuthenticationService = class AuthenticationService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.authenticationToken = '';
    }
    get token() {
        return this.authenticationToken;
    }
    set token(newToken) {
        this.authenticationToken = newToken;
    }
    async createToken() {
        try {
            const postData = new URLSearchParams();
            postData.append('grant_type', 'client_credentials');
            const response = await this.httpService.post(`${this.configService.get('API_ENDPOINT')}/v2/auth/token`, postData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'Authorization': `Basic ${this.configService.get('USER_SECRET')}`,
                },
            }).toPromise();
            if (response.status === common_1.HttpStatus.OK) {
                this.token = response.data.access_token;
            }
        }
        catch (error) {
            if (error.response) {
                console.error('\nUnexpected error calling authentication.');
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
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map