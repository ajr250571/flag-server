import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AnswerScalarWhereInput {
  @Field(() => [AnswerScalarWhereInput], { nullable: true })
  AND?: Array<AnswerScalarWhereInput>;

  @Field(() => [AnswerScalarWhereInput], { nullable: true })
  OR?: Array<AnswerScalarWhereInput>;

  @Field(() => [AnswerScalarWhereInput], { nullable: true })
  NOT?: Array<AnswerScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  questionId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isCorrect?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;
}
