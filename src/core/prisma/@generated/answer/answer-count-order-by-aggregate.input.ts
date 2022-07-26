import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnswerCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  questionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isCorrect?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;
}
