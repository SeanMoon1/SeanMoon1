import { Repository } from 'typeorm';
import { User } from './user.entitiy';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: User): Promise<User>;
    getUser(email: string): Promise<User>;
    updateUser(email: any, _user: any): Promise<void>;
    deleteUser(email: any): Promise<import("typeorm").DeleteResult>;
}
