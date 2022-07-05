import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Specialty } from './specialty.entity';

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

  @Property()
  @Field()
  city: string;

  @ManyToMany(() => Specialty)
  @Field(() => [Specialty])
  specialties = new Collection<Specialty>(this);
}
