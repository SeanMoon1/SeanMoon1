import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private userService: UserService) {
        super();
    }
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        console.log('Serializing user:', user); // 디버깅용
        done(null, user.email);
    }
    async deserializeUser(
        payload: any,
        done: (err: Error, user: any) => void,
    ): Promise<any> {
        console.log('Deserializing payload:', payload); // 디버깅용
        const user = await this.userService.getUser(payload);

        if (!user) {
            done(new Error('No user'), null);
            return;
        }
        const { password, ...userInfo } = user;
        console.log('Deserialized user:', userInfo); // 디버깅용
        done(null, userInfo);
    }
}