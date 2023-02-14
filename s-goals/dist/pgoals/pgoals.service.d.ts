import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';
export declare class PgoalsService {
    create(createPgoalDto: CreatePgoalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePgoalDto: UpdatePgoalDto): string;
    remove(id: number): string;
}
