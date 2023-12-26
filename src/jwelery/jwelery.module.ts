import { Module } from '@nestjs/common';
import { JweleryController } from './jwelery.controller';
import { HttpModule } from '@nestjs/axios';
import { JweleryService } from './jwelery.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [JweleryService],
  controllers: [JweleryController],
})
export class JweleryModule {}
