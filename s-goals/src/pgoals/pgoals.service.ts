import { Injectable } from '@nestjs/common';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';

@Injectable()
export class PgoalsService {
  create(createPgoalDto: CreatePgoalDto) {
    return 'This action adds a new pgoal';
  }

  findAll() {
    return `This action returns all pgoals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pgoal`;
  }

  update(id: number, updatePgoalDto: UpdatePgoalDto) {
    return `This action updates a #${id} pgoal`;
  }

  remove(id: number) {
    return `This action removes a #${id} pgoal`;
  }
}
