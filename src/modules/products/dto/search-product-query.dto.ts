import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PaginationQueryDto } from '../../shared/dto/dto/pagination-query.dto';

export class SearchProductQueryDto extends PartialType(PaginationQueryDto) {
  @IsOptional()
  category?: string;
}
