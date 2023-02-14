"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgoalsModule = void 0;
const common_1 = require("@nestjs/common");
const pgoals_service_1 = require("./pgoals.service");
const pgoals_controller_1 = require("./pgoals.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pgoal_entity_1 = require("./entities/pgoal.entity");
let PgoalsModule = class PgoalsModule {
};
PgoalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pgoal_entity_1.Pgoal])],
        controllers: [pgoals_controller_1.PgoalsController],
        providers: [pgoals_service_1.PgoalsService],
    })
], PgoalsModule);
exports.PgoalsModule = PgoalsModule;
//# sourceMappingURL=pgoals.module.js.map