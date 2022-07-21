import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AnswerWhereInput {
  @Field(() => [AnswerWhereInput], { nullable: true })
  AND?: Array<AnswerWhereInput>;

  @Field(() => [AnswerWhereInput], { nullable: true })
  OR?: Array<AnswerWhereInput>;

  @Field(() => [AnswerWhereInput], { nullable: true })
  NOT?: Array<AnswerWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => QuestionRelationFilter, { nullable: true })
  question?: QuestionRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  questionId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isCorrect?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;
}
