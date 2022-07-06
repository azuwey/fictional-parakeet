import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { City } from './entities/city.entity';
import { CitiesService } from './cities.service';
import { CitiesResolver } from './cities.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([City])],
  providers: [CitiesService, CitiesResolver],
  exports: [CitiesService],
})
export class CitiesModule {}
