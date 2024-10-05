import { Controller, Get, Post, Body, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

// Декаратор для вида запроса, может быть GET, POST, PUT, DELETE
  @Get()

  // Использование гуардов для авторизации/проверки ролей
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

// Использование пайпов для квери запроса

//   findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
//     console.log(pageNumber)
//     return this.flowersService.findAll();
//   }
// }
  // createMany() {
  //   return this.flowersService.createMany();
  // }
  @Post()
  // @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() createFlowersDto: CreateFlowersDto) {
    return this.flowersService.create(createFlowersDto)
  }
  
}
