import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Specialty } from './entities/specialty.entity';
import { SpecialtiesService } from './specialties.service';

@Module({
  imports: [MikroOrmModule.forFeature([Specialty])],
  providers: [SpecialtiesService],
})
export class SpecialtiesModule {}
