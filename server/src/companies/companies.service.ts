import { Injectable } from '@nestjs/common';
import { AutoPath } from '@mikro-orm/core/typings';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/sqlite';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: EntityRepository<Company>,
  ) {}

  findAll(
    name?: string,
    cityId?: number,
    specialtyIds?: number[],
  ): Promise<Company[]> {
    return this.companyRepository.find({
      $and: [
        name && { name: { $like: `%${name}%` } },
        cityId && { city: { $eq: cityId } },
        ...(specialtyIds ?? []).map((specialtyId) => ({
          specialties: specialtyId,
        })),
      ],
    });
  }

  async populate(
    companies: Company[],
    paths: AutoPath<Company, any>,
  ): Promise<Company[]> {
    await this.companyRepository.populate(companies, paths);
    return companies;
  }
}
