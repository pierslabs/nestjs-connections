import { PgoalsService } from './pgoals.service';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';
export declare class PgoalsController {
    private readonly pgoalsService;
    constructor(pgoalsService: PgoalsService);
    create(createPgoalDto: CreatePgoalDto): Promise<import("./entities/pgoal.entity").Pgoal>;
    findAll(): Promise<import("./entities/pgoal.entity").Pgoal[]>;
    findOne(id: string): Promise<import("./entities/pgoal.entity").Pgoal[]>;
    update(id: string, updatePgoalDto: UpdatePgoalDto): Promise<import("./entities/pgoal.entity").Pgoal>;
    remove(id: string): Promise<string>;
}
