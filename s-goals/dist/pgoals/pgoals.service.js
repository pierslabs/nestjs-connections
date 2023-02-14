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
exports.PgoalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pgoal_entity_1 = require("./entities/pgoal.entity");
let PgoalsService = class PgoalsService {
    constructor(pgoalRepo) {
        this.pgoalRepo = pgoalRepo;
    }
    async create(createPgoalDto) {
        try {
            const goal = this.pgoalRepo.create(createPgoalDto);
            return await this.pgoalRepo.save(goal);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findAll() {
        try {
            return await this.pgoalRepo.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findOne(id) {
        const goal = await this.pgoalRepo.findBy({ id });
        if (goal.length <= 0)
            throw new common_1.NotFoundException('Goal not found.');
        return goal;
    }
    async update(id, { name, frequency, priority }) {
        const goal = await this.findOne(id);
        try {
            const updateGoal = await this.pgoalRepo.preload({
                id: goal[0].id,
                name,
                frequency,
                priority,
            });
            return await this.pgoalRepo.save(updateGoal);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async remove(id) {
        const goal = await this.findOne(id);
        try {
            await this.pgoalRepo.remove(goal[0]);
            return `Goal with id: ${id}`;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
};
PgoalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pgoal_entity_1.Pgoal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PgoalsService);
exports.PgoalsService = PgoalsService;
//# sourceMappingURL=pgoals.service.js.map