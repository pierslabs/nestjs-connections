import { Module } from '@nestjs/common';
import { PgoalsService } from './pgoals.service';
import { PgoalsController } from './pgoals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pgoal } from './entities/pgoal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pgoal])],
  controllers: [PgoalsController],
  providers: [PgoalsService],
})
export class PgoalsModule {}
