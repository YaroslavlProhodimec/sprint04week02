import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'loginOrEmail is required' })
  loginOrEmail: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  @MinLength(1)
  password: string;
}
