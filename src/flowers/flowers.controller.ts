import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

// Декаратор для вида запроса, может быть GET, POST, PUT, DELETE
  @Get()

  // Использование гуардов для авторизации/проверки ролей
  @UseGuards(AuthGuard)

// Использование пайпов для квери запроса

//   findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
//     console.log(pageNumber)
//     return this.flowersService.findAll();
//   }
// }
  findAll() {
    return this.flowersService.findAll();
  }
}
