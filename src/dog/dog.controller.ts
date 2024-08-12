import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.introduce();
  }

  @Post('edit')
  modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }
}
