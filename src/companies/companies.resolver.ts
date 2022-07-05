import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLContext } from '../types/graphql-context.type';
import { GetCompaniesArgs } from './args/get-companies.args';
import { Company } from './entities/company.entity';
import { CompaniesService } from './companies.service';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}

  @Query(() => [Company], { name: 'companies' })
  async getCompanies(@Args() { name, cityId, specialtyIds }: GetCompaniesArgs) {
    return this.companiesService.findAll(name, cityId, specialtyIds);
  }

  @ResolveField()
  async city(
    @Parent() company: Company,
    @Context() { company: { cityLoader } }: GraphQLContext,
  ) {
    return cityLoader.load(company);
  }

  @ResolveField()
  async specialties(
    @Parent() company: Company,
    @Context() { company: { specialtyListLoader } }: GraphQLContext,
  ) {
    return specialtyListLoader.load(company);
  }
}
