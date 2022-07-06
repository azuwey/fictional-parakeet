import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetCompaniesArgs {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  cityId?: number;

  @Field(() => [Int], { nullable: true })
  specialtyIds?: number[];
}
