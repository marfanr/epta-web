import { IsEmail, IsNotEmpty } from "class-validator";

export class SigninRequest {     
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
};