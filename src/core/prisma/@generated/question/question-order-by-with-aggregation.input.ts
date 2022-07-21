import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionCountOrderByAggregateInput } from './question-count-order-by-aggregate.input';
import { QuestionMaxOrderByAggregateInput } from './question-max-order-by-aggregate.input';
import { QuestionMinOrderByAggregateInput } from './question-min-order-by-aggregate.input';

@InputType()
export class QuestionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  categoryId?: keyof typeof SortOrder;

  @Field(() => QuestionCountOrderByAggregateInput, { nullable: true })
  _count?: QuestionCountOrderByAggregateInput;

  @Field(() => QuestionMaxOrderByAggregateInput, { nullable: true })
  _max?: QuestionMaxOrderByAggregateInput;

  @Field(() => QuestionMinOrderByAggregateInput, { nullable: true })
  _min?: QuestionMinOrderByAggregateInput;
}
