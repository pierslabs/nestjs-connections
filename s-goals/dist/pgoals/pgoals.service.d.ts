import { Repository } from 'typeorm';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';
import { Pgoal } from './entities/pgoal.entity';
export declare class PgoalsService {
    private readonly pgoalRepo;
    constructor(pgoalRepo: Repository<Pgoal>);
    create(createPgoalDto: CreatePgoalDto): Promise<Pgoal>;
    findAll(): Promise<Pgoal[]>;
    findOne(id: string): Promise<Pgoal[]>;
    update(id: string, { name, frequency, priority }: UpdatePgoalDto): Promise<Pgoal>;
    remove(id: string): Promise<string>;
}
