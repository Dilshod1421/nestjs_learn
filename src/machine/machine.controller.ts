import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/createMachineDto';
import { Machine } from './models/machine.model';
import { UpdateMachineDto } from './dto/updateMachineDto';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService) { }

    @Post('create')
    async createMachine(@Body() createMachineDto: CreateMachineDto): Promise<Machine> {
        return this.machineService.createMachine(createMachineDto);
    }

    @Get('all')
    async getAllMachine() {
        return this.machineService.getAllMachine();
    }

    @Get(':id')
    async getOneMachine(@Param('id') id: number) {
        return this.machineService.getOneMachine(id);
    }

    @Delete(':id')
    async deleteMachine(@Param('id') id: number) {
        return this.machineService.deleteMachine(id);
    }

    @Put(':id')
    async updateMachine(@Param('id') id: number, @Body() updateMachineDto: UpdateMachineDto) {
        return this.machineService.updateMachine(id, updateMachineDto);
    }
}
