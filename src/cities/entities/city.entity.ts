import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
@ObjectType()
export class City {
  @PrimaryKey()
  @Field(() => Int)
  id: number;

  @Property()
  @Field()
  name: string;
}
