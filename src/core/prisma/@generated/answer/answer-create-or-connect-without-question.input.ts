import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from '@nestjs/class-transformer';
import { AnswerCreateWithoutQuestionInput } from './answer-create-without-question.input';

@InputType()
export class AnswerCreateOrConnectWithoutQuestionInput {
  @Field(() => AnswerWhereUniqueInput, { nullable: false })
  @Type(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;

  @Field(() => AnswerCreateWithoutQuestionInput, { nullable: false })
  @Type(() => AnswerCreateWithoutQuestionInput)
  create!: AnswerCreateWithoutQuestionInput;
}
