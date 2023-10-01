import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiReturn } from 'src/interfaces/api_return';
import { SigninRequest } from 'src/interfaces/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService_: AuthService) {}
  @Post('signin')
  async signin(@Body() body: SigninRequest) {
    let res = await this.authService_.auth(body);
    let ok: ApiReturn = { message: 'login success', status: 1 };
    let no: ApiReturn = { message: 'login gagal', status: 0 };
    if (res == true) return ok;
    return no;
  }
}
