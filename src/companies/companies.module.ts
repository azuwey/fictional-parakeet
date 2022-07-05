import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Company } from './entities/company.entity';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Company])],
  providers: [CompaniesService, CompaniesResolver],
})
export class CompaniesModule {}
