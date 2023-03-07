import { Injectable } from '@nestjs/common';
import { Machine } from './models/machine.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMachineDto } from './dto/createMachineDto';
import { UpdateMachineDto } from './dto/updateMachineDto';

@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine) private machineRepo: typeof Machine) { }

    async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
        const machine = await this.machineRepo.create(createMachineDto);
        return machine;
    }

    async getAllMachine(): Promise<Machine[]> {
        const machines = await this.machineRepo.findAll({ include: { all: true } });
        return machines;
    }

    async getOneMachine(id: number): Promise<Machine> {
        const machine = await this.machineRepo.findOne({ where: { id } });
        return machine;
    }

    async deleteMachine(id: number) {
        return this.machineRepo.destroy({ where: { id } });
    }

    async updateMachine(id: number, updateMachineDto: UpdateMachineDto): Promise<Object> {
        const machine = await this.machineRepo.update({ ...updateMachineDto }, { where: { id }, returning: true });
        return machine[1][0];
    }
}
