import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { flowers } from './flower.model'
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [SequelizeModule.forFeature([flowers])],
  controllers: [FlowersController],
  providers: [FlowersService, ConfigService],
})
export class FlowersModule {}
