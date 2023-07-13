import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password: string;

  @IsString()
  @IsNotEmpty()  
  avatar:string;
}
