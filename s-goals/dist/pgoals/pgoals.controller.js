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
exports.PgoalsController = void 0;
const common_1 = require("@nestjs/common");
const pgoals_service_1 = require("./pgoals.service");
const create_pgoal_dto_1 = require("./dto/create-pgoal.dto");
const update_pgoal_dto_1 = require("./dto/update-pgoal.dto");
let PgoalsController = class PgoalsController {
    constructor(pgoalsService) {
        this.pgoalsService = pgoalsService;
    }
    create(createPgoalDto) {
        return this.pgoalsService.create(createPgoalDto);
    }
    findAll() {
        return this.pgoalsService.findAll();
    }
    findOne(id) {
        return this.pgoalsService.findOne(id);
    }
    update(id, updatePgoalDto) {
        return this.pgoalsService.update(id, updatePgoalDto);
    }
    remove(id) {
        return this.pgoalsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pgoal_dto_1.CreatePgoalDto]),
    __metadata("design:returntype", void 0)
], PgoalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PgoalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PgoalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pgoal_dto_1.UpdatePgoalDto]),
    __metadata("design:returntype", void 0)
], PgoalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PgoalsController.prototype, "remove", null);
PgoalsController = __decorate([
    (0, common_1.Controller)('pgoals'),
    __metadata("design:paramtypes", [pgoals_service_1.PgoalsService])
], PgoalsController);
exports.PgoalsController = PgoalsController;
//# sourceMappingURL=pgoals.controller.js.map