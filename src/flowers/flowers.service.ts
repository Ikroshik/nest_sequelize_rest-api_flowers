import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { flowers } from './flower.model'
import { Sequelize } from 'sequelize-typescript';
import { CreateFlowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService { 
    constructor(
        @InjectModel(flowers)
        private flowerModel: typeof flowers,
        private sequelize: Sequelize,
        private readonly configService: ConfigService
      ) {}
      async findAll(): Promise<flowers[]> {  
        console.log(this.configService.get<EnumAppMode>('MODE'))  
        return this.flowerModel.findAll();
      }
    //   Данные для вставки в БД
    //   async createMany() {
    //     try {
    //       await this.sequelize.transaction(async t => {
    //         const transactionHost = { transaction: t };
      
    //         await this.flowerModel.create(
    //             { name: 'Роза', color: 'Белая', price: 12 },
    //             transactionHost,
    //         );
    //         await this.flowerModel.create(
    //             { name: 'Мак', color: 'Красный', price: 11 },
    //             transactionHost,
    //         );
    //       });
    //     } catch (err) {
    //         console.log(err)
    //     }
    //   }
    
    // Проверял, как получаются данные без БД
    // findAll() {
        // return [{
        //     name: 'Rose',
        //     color: 'Red',
        //     price: 5
        // },
        // {
        //     name: 'Mac',
        //     color: 'Red',
        //     price: 3
        // },
        // {
        //     name: 'Tullip',
        //     color: 'Yellow',
        //     price: 7
        // },
        // ]
    // }

    // dto - data transder object, с помощью него мы проверяем полученные извне данные, и в самом dto находится валидация
    // не работает, потому что не нравится тип в createFlowersDto в .create, я не знаю почему, поэтому поставил any
    // async create(createFlowersDto: createFlowersDto) {
    //     return await this.flowerModel.create(createFlowersDto)
    // }
    async create(createFlowersDto: any) {
        return await this.flowerModel.create(createFlowersDto)
    }
}
