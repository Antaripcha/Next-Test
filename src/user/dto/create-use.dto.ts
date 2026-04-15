import { IsString,IsEmail,IsNotEmpty,IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class CreateUseDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsEmail()
    @IsNotEmpty()
    email!: string;
    @IsNumber()
    @IsNotEmpty()
    age!: number;
}