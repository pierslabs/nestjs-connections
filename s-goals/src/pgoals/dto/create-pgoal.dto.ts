import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePgoalDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  frequency?: boolean;

  @IsOptional()
  @IsArray()
  priority?: string[];
}
