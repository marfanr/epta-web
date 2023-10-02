import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SigninRequest } from 'src/interfaces/auth';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async auth(body: SigninRequest): Promise<boolean> {
    let found = await this.prisma.user.findFirst({
      where: {AND: [{email: body.email}, {password: body.password}]},
      take: 1
    })    
    if (found == null)
    return false;
    return true;
  }
}
