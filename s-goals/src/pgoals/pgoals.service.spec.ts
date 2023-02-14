import { Test, TestingModule } from '@nestjs/testing';
import { PgoalsService } from './pgoals.service';

describe('PgoalsService', () => {
  let service: PgoalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgoalsService],
    }).compile();

    service = module.get<PgoalsService>(PgoalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
