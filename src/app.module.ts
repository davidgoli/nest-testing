import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config-service/config.service';
import { WorkingController } from './working/working.controller';

@Module({
  imports: [],
  controllers: [AppController, WorkingController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
