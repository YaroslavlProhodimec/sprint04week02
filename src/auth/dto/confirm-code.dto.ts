import { IsString, IsNotEmpty } from 'class-validator';

export class ConfirmCodeDto {
  @IsString()
  @IsNotEmpty({ message: 'code is required' })
  code: string;
}
