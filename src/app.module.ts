import { Module } from "@nestjs/common";
import { APPController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from './company/company.module';
import { Company } from "./company/models/company.model";
import { BuilderModule } from './builder/builder.module';
import { Builder } from "./builder/models/builder.model";
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
import { Machine } from "./machine/models/machine.model";
import { Driver } from "./driver/models/driver.model";

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
        SequelizeModule.forRoot({
            dialect: 'postgres', host: process.env.POSTGRES_HOST, port: Number(process.env.POSTGRES_PORT),
            username: String(process.env.POSTGRES_USER), password: String(process.env.POSTGRES_PASSWORD),
            database: String(process.env.POSTGRES_DB), models: [Company, Builder, Machine, Driver], autoLoadModels: true, logging: true,
        }),
        CompanyModule,
        BuilderModule,
        MachineModule,
        DriverModule,
    ],
    controllers: [APPController],
    providers: [AppService],
    exports: [],
})
export class AppModule {

}