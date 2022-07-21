import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class QuestionScalarWhereInput {
  @Field(() => [QuestionScalarWhereInput], { nullable: true })
  AND?: Array<QuestionScalarWhereInput>;

  @Field(() => [QuestionScalarWhereInput], { nullable: true })
  OR?: Array<QuestionScalarWhereInput>;

  @Field(() => [QuestionScalarWhereInput], { nullable: true })
  NOT?: Array<QuestionScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  categoryId?: StringFilter;
}
