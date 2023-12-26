import { Controller, Get, Param } from '@nestjs/common';
import { EngineerService } from './engineer.service';

@Controller('engineer')
export class EngineerController {
  constructor(private engineerService: EngineerService) {
    console.log('engineer');
  }

  @Get(':username')
  // @ts-ignore
  getPerson(@Param() params): any {
    console.log('username ', params.username);
    return this.engineerService.getEngineer(params.username);
  }
}
