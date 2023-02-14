import { PgoalsService } from './pgoals.service';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';
export declare class PgoalsController {
    private readonly pgoalsService;
    constructor(pgoalsService: PgoalsService);
    create(createPgoalDto: CreatePgoalDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePgoalDto: UpdatePgoalDto): string;
    remove(id: string): string;
}
