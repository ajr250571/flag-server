import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AnswerScalarWhereWithAggregatesInput {
  @Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AnswerScalarWhereWithAggregatesInput>;

  @Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AnswerScalarWhereWithAggregatesInput>;

  @Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AnswerScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  questionId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isCorrect?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  url?: StringWithAggregatesFilter;
}
