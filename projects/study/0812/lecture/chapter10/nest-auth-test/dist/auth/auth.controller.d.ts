import { CreateUserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userDto: CreateUserDto): Promise<import("../user/user.entitiy").User>;
}
