import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { City } from '../../cities/entities/city.entity';
import { Specialty } from '../../specialties/entities/specialty.entity';

@Entity()
@ObjectType()
export class Company {
  @PrimaryKey()
  @Field(() => Int)
  id: number;

  @Property()
  @Field()
  name: string;

  @Property()
  @Field()
  logoUrl: string;

  @ManyToMany(() => City)
  @Field(() => [City])
  city = new Collection<City>(this);

  @ManyToMany(() => Specialty)
  @Field(() => [Specialty])
  specialties = new Collection<Specialty>(this);
}
