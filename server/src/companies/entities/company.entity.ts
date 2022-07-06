import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => City)
  @Field(() => City)
  city: City;

  @ManyToMany(() => Specialty)
  @Field(() => [Specialty])
  specialties = new Collection<Specialty>(this);
}
