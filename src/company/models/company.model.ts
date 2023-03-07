import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "src/builder/models/builder.model";

interface CompanyAttr {
    name: string;
    address: string;
    phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyAttr> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    name: string;

    @Column({ type: DataType.STRING })
    address: string;

    @Column({ type: DataType.STRING, unique: true })
    phone: string;

    @HasMany(() => Builder)
    builder: Builder;
}