import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  authorId: any;

  @IsNotEmpty()
  genreId: any;

  @IsDate()
  publishDate: Date;
}

export class UpdateBookDto extends PartialType(CreateBookDto) { }
