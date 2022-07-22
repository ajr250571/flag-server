import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from 'class-transformer';
import { AnswerUpdateWithoutQuestionInput } from './answer-update-without-question.input';
import { AnswerCreateWithoutQuestionInput } from './answer-create-without-question.input';

@InputType()
export class AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  @Field(() => AnswerWhereUniqueInput, { nullable: false })
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;

  @Field(() => AnswerUpdateWithoutQuestionInput, { nullable: false })
  @Type(() => AnswerUpdateWithoutQuestionInput)
  update!: AnswerUpdateWithoutQuestionInput;

  @Field(() => AnswerCreateWithoutQuestionInput, { nullable: false })
  @Type(() => AnswerCreateWithoutQuestionInput)
  create!: AnswerCreateWithoutQuestionInput;
}
