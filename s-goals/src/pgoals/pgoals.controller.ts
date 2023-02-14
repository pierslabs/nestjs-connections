import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PgoalsService } from './pgoals.service';
import { CreatePgoalDto } from './dto/create-pgoal.dto';
import { UpdatePgoalDto } from './dto/update-pgoal.dto';

@Controller('pgoals')
export class PgoalsController {
  constructor(private readonly pgoalsService: PgoalsService) {}

  @Post()
  create(@Body() createPgoalDto: CreatePgoalDto) {
    return this.pgoalsService.create(createPgoalDto);
  }

  @Get()
  findAll() {
    return this.pgoalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pgoalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePgoalDto: UpdatePgoalDto) {
    return this.pgoalsService.update(+id, updatePgoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pgoalsService.remove(+id);
  }
}
