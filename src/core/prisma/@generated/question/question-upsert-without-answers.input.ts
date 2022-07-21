import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUpdateWithoutAnswersInput } from './question-update-without-answers.input';
import { Type } from '@nestjs/class-transformer';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';

@InputType()
export class QuestionUpsertWithoutAnswersInput {
  @Field(() => QuestionUpdateWithoutAnswersInput, { nullable: false })
  @Type(() => QuestionUpdateWithoutAnswersInput)
  update!: QuestionUpdateWithoutAnswersInput;

  @Field(() => QuestionCreateWithoutAnswersInput, { nullable: false })
  @Type(() => QuestionCreateWithoutAnswersInput)
  create!: QuestionCreateWithoutAnswersInput;
}
