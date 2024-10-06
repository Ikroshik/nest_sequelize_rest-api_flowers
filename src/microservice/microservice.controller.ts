import { Controller, Get } from '@nestjs/common';
import { MicroserviceService } from './microservice.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('microservice')
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  // Микросервисы похожи на websocket
  @EventPattern('message')
  handleMessage(message: string) {
    this.microserviceService.handleMessage(message)
  }
}
