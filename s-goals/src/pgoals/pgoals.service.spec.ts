import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pgoal } from './entities/pgoal.entity';
import { PgoalsService } from './pgoals.service';

describe('PgoalsService', () => {
  let service: PgoalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PgoalsService,
        {
          provide: getRepositoryToken(Pgoal),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PgoalsService>(PgoalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
