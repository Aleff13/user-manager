import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'user name',
    minimum: 240,
    default: '',
  })
  name: string;

  @ApiProperty({
    description: 'user password',
    minimum: 240,
    default: '',
  })
  password: string;

  @ApiProperty({
    description: 'user organization',
    minimum: 240,
    default: '',
  })
  organization?: string;
}
