"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreFlightModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_module_1 = require("./api/authentication.module");
const sabre_flight_service_1 = require("./sabre-flight.service");
const sabre_flight_controller_1 = require("./sabre-flight.controller");
const search_module_1 = require("./api/search.module");
let SabreFlightModule = class SabreFlightModule {
};
exports.SabreFlightModule = SabreFlightModule;
exports.SabreFlightModule = SabreFlightModule = __decorate([
    (0, common_1.Module)({
        imports: [authentication_module_1.AuthenticationModule, search_module_1.SearchModule],
        providers: [sabre_flight_service_1.SabreFlightService],
        controllers: [sabre_flight_controller_1.SabreFlightController],
        exports: [sabre_flight_service_1.SabreFlightService],
    })
], SabreFlightModule);
//# sourceMappingURL=sabre-flight.module.js.map