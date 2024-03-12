import { IsEmail, IsNotEmpty, IsBoolean, isNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly otpCode: number;

    @IsBoolean()
    readonly isActive: boolean = false;

    @IsNotEmpty()
    readonly role: string = 'client';

    readonly logo: string;
}
