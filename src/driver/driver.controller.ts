import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/createDriverDto';
import { Driver } from './models/driver.model';
import { UpdateDriverDto } from './dto/updateDriverDto';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) { }

    @Post('create')
    async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
        return this.driverService.createDriver(createDriverDto);
    }

    @Get('all')
    async getAllDriver() {
        return this.driverService.getAllDriver();
    }

    @Get(':id')
    async getOneDriver(@Param('id') id: number) {
        return this.driverService.getOneDriver(id);
    }

    @Delete(':id')
    async deleteDriver(@Param('id') id: number) {
        return this.driverService.deleteDriver(id);
    }

    @Put(':id')
    async updateDriver(@Param('id') id: number, @Body() updateDriverDto: UpdateDriverDto) {
        return this.driverService.updateDriver(id, updateDriverDto);
    }
}
