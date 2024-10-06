import { Test, TestingModule } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [{
        provide: 'FlowersService',
        useValue: {
          findAll: jest.fn().mockResolvedValue([
            {
              id: 1,
              name: 'Роза',
              color: 'Белая',
              price: 12
            }
          ]),
          create: jest.fn().mockResolvedValue({
            id: 2,
            name: 'Мак',
            color: 'Красный',
            price: 11
          })
        }
      }],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should return an array of flowers', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 1,
        name: 'Роза',
        color: 'Белая',
        price: 12
      }
    ])
  });

  it('should return a new flower', async () => {
    expect(await controller.create({
      name: 'Роза',
      color: 'Белая',
      price: 12
    })).toEqual([
      {
        id: 1,
        name: 'Роза',
        color: 'Белая',
        price: 12
      }
    ])
  });

});
