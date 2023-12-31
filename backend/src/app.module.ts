import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from './module/auth/auth.module';
import { GateModule } from './module/gate/gate.module';

@Module({
  imports: [AuthModule, GateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
