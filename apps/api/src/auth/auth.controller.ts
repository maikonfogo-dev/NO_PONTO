import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

class SignInDto {
  email: string;
  password: string;
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login de usuário' })
  @ApiBody({ type: SignInDto })
  @ApiOkResponse({ description: 'Login realizado com sucesso.' })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
