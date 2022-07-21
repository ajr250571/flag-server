import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerUpdateInput } from './answer-update.input';
import { Type } from '@nestjs/class-transformer';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@ArgsType()
export class UpdateOneAnswerArgs {
  @Field(() => AnswerUpdateInput, { nullable: false })
  @Type(() => AnswerUpdateInput)
  data!: AnswerUpdateInput;

  @Field(() => AnswerWhereUniqueInput, { nullable: false })
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}
