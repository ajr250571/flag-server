import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateNestedManyWithoutQuestionInput } from '../answer/answer-create-nested-many-without-question.input';

@InputType()
export class QuestionCreateWithoutCategoryInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => AnswerCreateNestedManyWithoutQuestionInput, { nullable: true })
  answers?: AnswerCreateNestedManyWithoutQuestionInput;
}
