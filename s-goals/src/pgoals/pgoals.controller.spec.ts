import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { Pgoal } from './entities/pgoal.entity';
import { PgoalsController } from './pgoals.controller';
import { PgoalsService } from './pgoals.service';

describe('PgoalsController', () => {
  let controller: PgoalsController;
  let service: PgoalsService;

  const goal: Pgoal = {
    name: 'go to gym',
    id: 'fake_id',
    frequency: true,
    priority: ['low'],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PgoalsController],

      providers: [
        PgoalsService,

        {
          provide: getRepositoryToken(Pgoal),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<PgoalsController>(PgoalsController);
    service = module.get<PgoalsService>(PgoalsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAll', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue([goal]);

    expect(await controller.findAll()).toEqual([goal]);
  });

  it('should find by id', async () => {
    const id = 'fake_id';
    jest.spyOn(service, 'findOne').mockResolvedValue([goal]);

    expect(await controller.findOne(id)).toEqual([goal]);
  });

  it('should call to create goal', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(goal);

    expect(await controller.create({ name: 'go to gym' })).toEqual(goal);
  });

  it('should update goal', async () => {
    const goalUpdated = { name: 'update name' };

    jest.spyOn(service, 'findOne').mockResolvedValue([goal]);
    jest
      .spyOn(service, 'update')
      .mockResolvedValue({ ...goal, name: goalUpdated.name });

    expect(await controller.update('id', goalUpdated)).toEqual({
      ...goal,
      name: goalUpdated.name,
    });
  });

  it('should delete goal', async () => {
    const id = 'fake';

    jest.spyOn(service, 'findOne').mockResolvedValue([goal]);
    jest.spyOn(service, 'remove').mockResolvedValue(`Goal with id: ${id}`);

    const a = await controller.remove(id);

    expect(await controller.remove(id)).toEqual('Goal with id: fake');
  });
});
