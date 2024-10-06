import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';
import { SequelizeModule } from '@nestjs/sequelize';
import { flowers } from './flowers/flower.model';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'loc2004',
    database: 'flowers',
    models: [flowers],
    autoLoadModels: true,
    synchronize: true,
  }),
  ConfigModule.forRoot({
    isGlobal: true
  }),
    FlowersModule,
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8877
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}