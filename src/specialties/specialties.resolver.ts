import { Query, Resolver } from '@nestjs/graphql';
import { SpecialtiesService } from './specialties.service';
import { Specialty } from './entities/specialty.entity';

@Resolver()
export class SpecialtiesResolver {
  constructor(private specialtiesService: SpecialtiesService) {}

  @Query(() => [Specialty], { name: 'specialties' })
  async getSpecialties() {
    return this.specialtiesService.findAll();
  }
}
