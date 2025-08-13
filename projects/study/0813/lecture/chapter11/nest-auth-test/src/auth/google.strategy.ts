import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {

        console.log('=== OAuth Debug ===');
        console.log('Client ID:', process.env.GOOGLE_CLIENT_ID);
        console.log('Client Secret:', process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET');
        console.log('==================');
        
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google',
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const { id, name, emails } = profile;
        console.log('=== OAuth Validate ===');
        console.log('Access Token:', accessToken ? 'SET' : 'NOT SET');
        console.log('Profile ID:', id);
        console.log('Profile Email:', emails[0]?.value);
        console.log('Profile Name:', name);
        console.log('========================');

        const providerId = id;
        const email = emails[0].value;

        const user: User = await this.userService.findByEmailOrSave(
            email,
            name.familyName + name.givenName,
            providerId,
        );

        return user;
    }
    
}