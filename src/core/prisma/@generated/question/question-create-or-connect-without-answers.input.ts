import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';

@InputType()
export class QuestionCreateOrConnectWithoutAnswersInput {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @Field(() => QuestionCreateWithoutAnswersInput, { nullable: false })
  @Type(() => QuestionCreateWithoutAnswersInput)
  create!: QuestionCreateWithoutAnswersInput;
}
