import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnswerOrderByRelationAggregateInput } from '../answer/answer-order-by-relation-aggregate.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';

@InputType()
export class QuestionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;

  @Field(() => AnswerOrderByRelationAggregateInput, { nullable: true })
  answers?: AnswerOrderByRelationAggregateInput;

  @Field(() => CategoryOrderByWithRelationInput, { nullable: true })
  category?: CategoryOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  categoryId?: keyof typeof SortOrder;
}
