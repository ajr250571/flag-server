import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';

@InputType()
export class AnswerOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => QuestionOrderByWithRelationInput, { nullable: true })
  question?: QuestionOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  questionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isCorrect?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
}
