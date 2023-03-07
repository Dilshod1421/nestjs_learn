import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Company } from "src/company/models/company.model";


interface MachineAttr {
    name: string;
    company_id: number;
}

@Table({ tableName: 'machine' })
export class Machine extends Model<Machine, MachineAttr> {
    @Column({ type: DataType.STRING })
    name: string;

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER })
    company_id: number;

    @BelongsTo(() => Company)
    company: Company[];
}