import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StatusResponse } from 'src/interfaces/gate';

@Injectable()
export class GateService {
  constructor(private prisma: PrismaService) {}
  async getStatus(id: number): Promise<StatusResponse> {
    let status = await this.prisma.gate.findFirst({
        where: {id: id},
        take: 1
    })
    return {
        id: id,
        opened: status.opened,
        locked: status.locked,
    };
  }

  async lock(id: number) {
    await this.prisma.gate.update({
      where: {id: id},
      data: {locked: true}
    })
  }

  async unlock(id: number) {
    await this.prisma.gate.update({
      where: {id: id},
      data: {locked: false}
    })
  }
}
