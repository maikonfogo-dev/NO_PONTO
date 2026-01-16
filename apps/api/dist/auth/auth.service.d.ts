import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signIn(email: string, pass: string): Promise<any>;
}
