import { Test, TestingModule } from '@nestjs/testing';
import { PgoalsController } from './pgoals.controller';
import { PgoalsService } from './pgoals.service';

describe('PgoalsController', () => {
  let controller: PgoalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PgoalsController],
      providers: [PgoalsService],
    }).compile();

    controller = module.get<PgoalsController>(PgoalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
