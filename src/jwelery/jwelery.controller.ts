import { Controller, Get } from '@nestjs/common';
import { JweleryService } from './jwelery.service';

@Controller('jwelery')
export class JweleryController {
  constructor(private readonly jweleryService: JweleryService) {}

  @Get('/')
  async findAll() {
    const response = await this.jweleryService.findAll();
    return response;
  }
}
