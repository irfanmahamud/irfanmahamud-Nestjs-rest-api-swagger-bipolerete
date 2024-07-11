import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from '@nestjs/class-validator';
export class CreateUserDto {

  @ApiProperty({
    example: 'firstname'
  })

  public firstname: string;

  @ApiProperty({
    example: 'lastname'
  })
  public lastname: string;

  @ApiProperty({
    example: 'example@gmail.com',
    required: true
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    example: '1234578910',
    required: true
  })


  @IsNotEmpty()
  @MinLength(4)
  password: string;
}