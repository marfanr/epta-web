import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    InfoResponse,
  LockRequest,
  StatusRequest,  
} from 'src/interfaces/gate';
import { GateService } from './gate.service';
import { ApiReturn } from 'src/interfaces/api_return';

@Controller('gate')
export class GateController {
  constructor(private gateService_: GateService) {}
  @Get('is_locked/:id')
  async get_gate_status(@Param('id') id: number): Promise<string> {
    let status = await this.gateService_.getInfo(Number(id));
    return (status.locked == true) ? "yes" : "no";
  }
  @Get('logger/set_open/:id')
  async set_open_gate(@Param("id") id: number) : Promise<string>  {
    this.gateService_.updateStatus(id, true);
    return "ok"
  }
  @Get('logger/set_close/:id')
  async set_close_gate(@Param("id") id: number) : Promise<string>  {
    this.gateService_.updateStatus(id, false);
    return "ok"
  }
  @Post('update_lock')
  async lock_gate(@Body() body: LockRequest): Promise<ApiReturn> {
    if (body.lock) {
      await this.gateService_.lock(body.id);
      return { message: 'locked', status: 1 };
    } else {
      await this.gateService_.unlock(body.id);
      return { message: 'unlocked', status: 1 };
    }
  }

  @Get("override/status/open/:id")
  async override_check(@Param("id") id: number) {
    await this.gateService_.updateStatus(id, true); 
  }


  // @Post('update_status')
  // async update_status( @Body() body: StatusRequest) : Promise<string>{
  //   // await this.gateService_.updateStatus(/)
  //   return "ok"
  // }
}
