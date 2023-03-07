import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create.builderdto';
import { UpdateBuilderDto } from './dto/update.builderdto';

@Injectable()
export class BuilderService {
    constructor(@InjectModel(Builder) private builderRepo: typeof Builder) { }

    async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
        const Builder = await this.builderRepo.create(createBuilderDto);
        return Builder;
    }

    async getAllBuilder(): Promise<Builder[]> {
        const builders = await this.builderRepo.findAll({ include: { all: true } });
        return builders;
    }

    async getOneBuilder(id: number): Promise<Builder> {
        const builder = await this.builderRepo.findOne({ where: { id } });
        return builder;
    }

    async deleteBuilder(id: number) {
        return this.builderRepo.destroy({ where: { id } });
    }

    async updateBuilder(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Object> {
        const builder = await this.builderRepo.update({ ...updateBuilderDto }, { where: { id }, returning: true });
        return builder[1][0];
    }
}
