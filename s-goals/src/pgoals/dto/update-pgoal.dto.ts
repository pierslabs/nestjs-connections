import { PartialType } from '@nestjs/mapped-types';
import { CreatePgoalDto } from './create-pgoal.dto';

export class UpdatePgoalDto extends PartialType(CreatePgoalDto) {}
