import { Test, TestingModule } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [{
        provide: FlowersService,
        useValue: {
          findAll: jest.fn().mockResolvedValue([
            {
                id: 1,
                name: "Роза",
                color: "Белая",
                price: 12,
                createdAt: "2024-10-04T13:12:28.195Z",
                updatedAt: "2024-10-04T13:12:28.195Z"
            },
            {
                id: 2,
                name: "Мак",
                color: "Красный",
                price: 11,
                createdAt: "2024-10-04T13:13:28.899Z",
                updatedAt: "2024-10-04T13:13:28.899Z"
            }
        ]),
          create: jest.fn().mockResolvedValue({
            id: 1,
            name: 'Роза',
            color: 'Белая',
            price: 12
          })
        }
      }],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should return an array of flowers', async () => {
    expect(await controller.findAll()).toEqual([
      {
          "id": 1,
          "name": "Роза",
          "color": "Белая",
          "price": 12,
          "createdAt": "2024-10-04T13:12:28.195Z",
          "updatedAt": "2024-10-04T13:12:28.195Z"
      },
      {
          "id": 2,
          "name": "Мак",
          "color": "Красный",
          "price": 11,
          "createdAt": "2024-10-04T13:13:28.899Z",
          "updatedAt": "2024-10-04T13:13:28.899Z"
      }
  ])
  });

  it('should return a new flower', async () => {
    expect(await controller.create({
      name: 'Роза',
      color: 'Белая',
      price: 12
    })).toEqual(
      {
        id: 1,
        name: 'Роза',
        color: 'Белая',
        price: 12
      }
    )
  });

});
