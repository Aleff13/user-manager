import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'user name',
    minimum: 240,
    default: '',
  })
  name: string;

  @ApiProperty({
    description: 'user role',
    minimum: 240,
    default: '',
  })
  role: string;
}
