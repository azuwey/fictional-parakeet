import { Query, Resolver } from '@nestjs/graphql';
import { City } from './entities/city.entity';
import { CitiesService } from './cities.service';

@Resolver()
export class CitiesResolver {
  constructor(private citiesService: CitiesService) {}

  @Query(() => [City], { name: 'cities' })
  async getCities() {
    return this.citiesService.findAll();
  }
}
