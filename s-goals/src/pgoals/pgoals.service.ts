import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';
import { Pgoal } from './entities/pgoal.entity';

@Injectable()
export class PgoalsService {
  constructor(
    @InjectRepository(Pgoal)
    private readonly pgoalRepo: Repository<Pgoal>,
  ) {}

  async create(createPgoalDto: CreatePgoalDto) {
    try {
      const goal = this.pgoalRepo.create(createPgoalDto);
      return await this.pgoalRepo.save(goal);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.pgoalRepo.find();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: string) {
    const goal = await this.pgoalRepo.findBy({ id });
    if (goal.length <= 0) throw new NotFoundException('Goal not found.');

    return goal;
  }

  async update(id: string, { name, frequency, priority }: UpdatePgoalDto) {
    const goal = await this.findOne(id);
    try {
      const updateGoal = await this.pgoalRepo.preload({
        id: goal[0].id,
        name,
        frequency,
        priority,
      });

      return await this.pgoalRepo.save(updateGoal);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    const goal = await this.findOne(id);

    try {
      await this.pgoalRepo.remove(goal[0]);
      return `Goal with id: ${id}`;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
