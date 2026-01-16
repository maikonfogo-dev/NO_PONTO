import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password: _password, ...result } = user;
    // Mock JWT for now
    return {
      access_token: 'mock_jwt_token_' + Date.now(),
      user: result,
    };
  }
}
