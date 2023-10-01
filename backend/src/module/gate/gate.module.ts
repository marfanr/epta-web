import { Module } from '@nestjs/common';
import { GateController } from './gate.controller';
import { GateService } from './gate.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GateController],
  providers: [GateService],
  imports: [PrismaModule]
})
export class GateModule {}
