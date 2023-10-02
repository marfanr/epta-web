import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  imports: [PrismaModule],
  providers: [AuthService],  
  
})
export class AuthModule {}
