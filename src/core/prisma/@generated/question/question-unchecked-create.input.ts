import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInput } from '../answer/answer-unchecked-create-nested-many-without-question.input';

@InputType()
export class QuestionUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => AnswerUncheckedCreateNestedManyWithoutQuestionInput, {
    nullable: true,
  })
  answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;

  @Field(() => String, { nullable: false })
  categoryId!: string;
}
