import DataLoader = require('dataloader');
import { Specialty } from '../../specialties/entities/specialty.entity';
import { Company } from '../entities/company.entity';
import { CompaniesService } from '../companies.service';

export function createCompanySpecialtyListLoader(
  companiesService: CompaniesService,
): DataLoader<Company, Specialty[]> {
  return new DataLoader<Company, Specialty[]>(async (companies) => {
    const loadedCompanies = await companiesService.populate(
      companies as Company[],
      ['specialties'],
    );

    const loadedCompaniesMap = loadedCompanies.reduce<{
      [key: number]: Company;
    }>((map, company) => {
      map[company.id] = company;
      return map;
    }, {});

    return companies.map(({ id }) =>
      loadedCompaniesMap[id].specialties.getItems(),
    );
  });
}
