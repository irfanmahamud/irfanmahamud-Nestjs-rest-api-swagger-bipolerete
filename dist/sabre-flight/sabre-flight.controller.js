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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreFlightController = void 0;
const common_1 = require("@nestjs/common");
const sabre_flight_service_1 = require("./sabre-flight.service");
const swagger_1 = require("@nestjs/swagger");
const search_request_dto_1 = require("./dto/search-request.dto");
const cache_manager_1 = require("@nestjs/cache-manager");
let SabreFlightController = class SabreFlightController {
    constructor(sabreFlightService, cacheService) {
        this.sabreFlightService = sabreFlightService;
        this.cacheService = cacheService;
    }
    async search(searchRequestDto) {
        return await this.sabreFlightService.search(searchRequestDto);
    }
};
exports.SabreFlightController = SabreFlightController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Search is successful.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiBody)({
        type: search_request_dto_1.SearchRequestDto,
        description: 'Json structure for user object',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SabreFlightController.prototype, "search", null);
exports.SabreFlightController = SabreFlightController = __decorate([
    (0, swagger_1.ApiTags)('Sabre-flight'),
    (0, common_1.Controller)('sabre-flight'),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [sabre_flight_service_1.SabreFlightService, Object])
], SabreFlightController);
//# sourceMappingURL=sabre-flight.controller.js.map