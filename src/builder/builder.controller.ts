import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create.builderdto';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from './dto/update.builderdto';

@Controller('builder')
export class BuilderController {
    constructor(private readonly builderService: BuilderService) { }

    @Post('create')
    async createBuilder(@Body() createBuilderDto: CreateBuilderDto): Promise<Builder> {
        return this.builderService.createBuilder(createBuilderDto);
    }

    @Get('all')
    async getAllBuilder() {
        return this.builderService.getAllBuilder();
    }

    @Get(':id')
    async getOneBuilder(@Param('id') id: number) {
        return this.builderService.getOneBuilder(id);
    }

    @Delete(':id')
    async deleteBuilder(@Param('id') id: number) {
        return this.builderService.deleteBuilder(id);
    }

    @Put(':id')
    async updateBuilder(@Param('id') id: number, @Body() updateBuilderDto: UpdateBuilderDto) {
        return this.builderService.updateBuilder(id, updateBuilderDto);
    }
}