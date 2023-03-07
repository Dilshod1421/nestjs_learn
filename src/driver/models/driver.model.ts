import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Machine } from "src/machine/models/machine.model";


interface DriverAttr {
    first_name: string;
    last_name: string;
    machine_id: number;
}

@Table({ tableName: 'driver' })
export class Driver extends Model<Driver, DriverAttr> {
    @Column({ type: DataType.STRING })
    first_name: string;

    @Column({ type: DataType.STRING })
    last_name: string;

    @ForeignKey(() => Machine)
    @Column({ type: DataType.INTEGER })
    machine_id: number;

    @BelongsTo(() => Machine)
    machine: Machine[];
}