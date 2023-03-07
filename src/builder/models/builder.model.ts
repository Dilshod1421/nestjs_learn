import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Company } from "src/company/models/company.model";


interface BuilderAttr {
    first_name: string;
    last_name: string;
    birthday: Date;
    salary: number;
    company_id: number;
}

@Table({ tableName: 'builder' })
export class Builder extends Model<Builder, BuilderAttr> {
    @Column({ type: DataType.STRING })
    first_name: string;

    @Column({ type: DataType.STRING })
    last_name: string;

    @Column({ type: DataType.DATE })
    birthday: Date;

    @Column({ type: DataType.DECIMAL })
    salary: number;

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER })
    company_id: number;

    @BelongsTo(() => Company)
    company: Company[];
}