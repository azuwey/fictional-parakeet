import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
@ObjectType()
export class Specialty {
  @PrimaryKey()
  @Field(() => Int)
  id: number;

  @Property()
  @Field()
  name: string;
}
