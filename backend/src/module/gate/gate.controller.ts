import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LockRequest, StatusRequest, StatusResponse } from 'src/interfaces/gate';
import { GateService } from './gate.service';

@Controller('gate')
export class GateController {
    constructor(private gateService_: GateService) {}
    @Get("status/:id")
    async get_gate_status(@Param("id") id: number) : Promise<StatusResponse> {
        let status = await this.gateService_.getStatus(id);
        return status
    }
    @Post("update_lock/:id")
    async lock_gate(@Param("id") id : number, @Body() body: LockRequest) {
        // this.gateService_.

    }

    @Post("update_status/:id")
    async update_status(@Param("id") id : number) {
        
    }

}
