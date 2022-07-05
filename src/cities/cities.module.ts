import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { City } from './entities/city.entity';
import { CitiesService } from './cities.service';

@Module({
  imports: [MikroOrmModule.forFeature([City])],
  providers: [CitiesService],
})
export class CitiesModule {}
