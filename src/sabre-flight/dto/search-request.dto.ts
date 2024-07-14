import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from '@nestjs/class-validator';
export class SearchRequestDto {

  @ApiProperty({
    example: 'session1234'
  })

  public traceId: string;

  @ApiProperty({
    example: 'abc1234'
  })
  public origDest: string;

}