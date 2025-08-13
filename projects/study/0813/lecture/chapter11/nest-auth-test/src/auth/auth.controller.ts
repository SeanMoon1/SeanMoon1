import { Body, Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, GoogleAuthGuard, LocalAuthGuard, LoginGuard } from './auth.guard';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() userDto: CreateUserDto){
        return await this.authService.register(userDto)
    }

    @Post('login')
    async login(@Request() req, @Response() res) {
        const userInfo = await this.authService.validateUser(
            req.body.email,
            req.body.password,
        );

        if(userInfo) {
            res.cookie('login', JSON.stringify(userInfo), {
                httpOnly: false,
                maxAge: 1000 * 60 * 60 * 24 * 7,
            })
        }
        return res.send({ message: 'login success' })
    }

    @UseGuards(LoginGuard)
    @Post('login2')
    async login2(@Request() req, @Response() res) {
        if(!req.cookies['login'] && req.user) {
            res.cookie('login', JSON.stringify(req.user), {
                httpOnly: true,
                maxAge: 1000 * 10,
            });
        }
        return res.send({ message: 'login2 success' });
    }

    @UseGuards(LoginGuard)
    @Get('test-guard')
    async testGuard() {
        return '로그인된 때만 이 글이 보입니다.';
    }

    @Get('to-google')
    @UseGuards(GoogleAuthGuard)
    async GoogleAuthGuard(@Request() req) {}

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async googleAuthRedirect(@Request() req, @Response() res) {
        const { user } = req;
        if (user) {
        return res.send(user);
    } else {
        return res.status(401).send({ message: 'Authentication failed' });
    }
    }
}
