import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create.company';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update.company';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post('create')
    async createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.createCompany(createCompanyDto);
    }

    @Get('all')
    async getAllCompany() {
        return this.companyService.getAllCompany();
    }

    @Get(':id')
    async getOneCompany(@Param('id') id: number) {
        return this.companyService.getOneCompany(id);
    }

    @Delete(':id')
    async deleteCompany(@Param('id') id: number) {
        return this.companyService.deleteCompany(id);
    }

    @Put(':id')
    async updateCompany(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companyService.updateCompany(id, updateCompanyDto);
    }
}
