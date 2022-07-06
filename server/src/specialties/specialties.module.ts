import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Specialty } from './entities/specialty.entity';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesResolver } from './specialties.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Specialty])],
  providers: [SpecialtiesService, SpecialtiesResolver],
  exports: [SpecialtiesService],
})
export class SpecialtiesModule {}
