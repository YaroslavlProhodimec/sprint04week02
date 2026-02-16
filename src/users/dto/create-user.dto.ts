import { IsString, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'login must be 3-10 characters' })
  @MaxLength(10)
  @Matches(/^[a-zA-Z0-9_-]*$/, { message: 'Invalid login' })
  login: string;

  @IsString()
  @MinLength(6, { message: 'password must be 6-20 characters' })
  @MaxLength(20)
  password: string;

  @IsEmail({}, { message: 'Invalid email' })
  email: string;
}
