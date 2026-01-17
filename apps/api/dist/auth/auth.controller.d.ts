import { AuthService } from './auth.service';
declare class SignInDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<any>;
}
export {};
