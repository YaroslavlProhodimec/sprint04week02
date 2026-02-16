import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class NewPasswordDto {
  @IsString()
  @IsNotEmpty({ message: 'recoveryCode is required' })
  recoveryCode: string;

  @IsString()
  @MinLength(6, { message: 'newPassword must be 6-20 characters' })
  @MaxLength(20)
  newPassword: string;
}
