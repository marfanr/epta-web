import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InfoResponse } from 'src/interfaces/gate';

@Injectable()
export class GateService {
  constructor(private prisma: PrismaService) {}
  async getInfo(id: number): Promise<InfoResponse> {
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
  
  async updateStatus(id: number, open: boolean) {
    await this.prisma.gate.update({
      where: {id: id},
      data: {opened: open}
    })
  }
}
