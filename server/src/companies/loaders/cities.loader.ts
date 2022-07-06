import DataLoader = require('dataloader');
import { City } from '../../cities/entities/city.entity';
import { Company } from '../entities/company.entity';
import { CompaniesService } from '../companies.service';

export function createCompanyCityLoader(
  companiesService: CompaniesService,
): DataLoader<Company, City> {
  return new DataLoader<Company, City>(async (companies) => {
    const loadedCompanies = await companiesService.populate(
      companies as Company[],
      ['city'],
    );

    const loadedCompaniesMap = loadedCompanies.reduce<{
      [key: number]: Company;
    }>((map, company) => {
      map[company.id] = company;
      return map;
    }, {});

    return companies.map(({ id }) => loadedCompaniesMap[id].city);
  });
}
