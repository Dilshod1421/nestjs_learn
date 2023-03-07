import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/createDriverDto';
import { UpdateDriverDto } from './dto/updateDriverDto';

@Injectable()
export class DriverService {
    constructor(@InjectModel(Driver) private driverRepo: typeof Driver) { }

    async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
        const driver = await this.driverRepo.create(createDriverDto);
        return driver;
    }

    async getAllDriver(): Promise<Driver[]> {
        const drivers = await this.driverRepo.findAll({ include: { all: true } });
        return drivers;
    }

    async getOneDriver(id: number): Promise<Driver> {
        const driver = await this.driverRepo.findOne({ where: { id } });
        return driver;
    }

    async deleteDriver(id: number) {
        return this.driverRepo.destroy({ where: { id } });
    }

    async updateDriver(id: number, updateDriverDto: UpdateDriverDto): Promise<Object> {
        const driver = await this.driverRepo.update({ ...updateDriverDto }, { where: { id }, returning: true });
        return driver[1][0];
    }
}
