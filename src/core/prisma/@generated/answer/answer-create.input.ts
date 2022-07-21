import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateNestedOneWithoutAnswersInput } from '../question/question-create-nested-one-without-answers.input';

@InputType()
export class AnswerCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => QuestionCreateNestedOneWithoutAnswersInput, { nullable: false })
  question!: QuestionCreateNestedOneWithoutAnswersInput;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: true })
  isCorrect?: boolean;

  @Field(() => String, { nullable: false })
  url!: string;
}
