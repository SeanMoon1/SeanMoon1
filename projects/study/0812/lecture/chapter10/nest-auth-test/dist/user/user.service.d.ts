import { Repository } from 'typeorm';
import { User } from './user.entitiy';
import { CreateUserDto } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(email: string): Promise<User>;
    updateUser(email: any, _user: any): Promise<void>;
    deleteUser(email: any): Promise<import("typeorm").DeleteResult>;
}
