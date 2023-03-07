import { Injectable } from '@nestjs/common';
import { Company } from './models/company.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCompanyDto } from './dto/create.company';
import { UpdateCompanyDto } from './dto/update.company';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private companyRepo: typeof Company) { }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const company = await this.companyRepo.create(createCompanyDto);
        return company;
    }

    async getAllCompany(): Promise<Company[]> {
        const companies = await this.companyRepo.findAll({ include: { all: true } });
        return companies;
    }

    async getOneCompany(id: number): Promise<Company> {
        const company = await this.companyRepo.findOne({ where: { id } });
        return company;
    }

    async deleteCompany(id: number) {
        return this.companyRepo.destroy({ where: { id } });
    }

    async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Object> {
        const company = await this.companyRepo.update({ ...updateCompanyDto }, { where: { id }, returning: true });
        return company[1][0];
    }
}