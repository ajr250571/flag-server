import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnswerArgs {
  @Field(() => AnswerWhereUniqueInput, { nullable: false })
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}
