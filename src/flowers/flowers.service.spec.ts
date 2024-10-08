import { Test, TestingModule } from '@nestjs/testing';
import { FlowersService } from './flowers.service';
import { flowers } from './flower.model';

describe('FlowersService', () => {
  let service: FlowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: FlowersService,
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

    service = module.get<FlowersService>(FlowersService);
  });



  it('should return an array of flowers', () => {
    expect(service).toBeDefined();
  });
});
