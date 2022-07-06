import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/sqlite';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty)
    private readonly specialtyRepository: EntityRepository<Specialty>,
  ) {}

  findOneById(id: number): Promise<Specialty> {
    return this.specialtyRepository.findOne({ id });
  }

  findAll(ids?: readonly number[]): Promise<Specialty[]> {
    return this.specialtyRepository.find(
      ids && {
        id: { $in: ids as number[] },
      },
    );
  }
}
