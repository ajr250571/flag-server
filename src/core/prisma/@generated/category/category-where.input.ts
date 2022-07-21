import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { QuestionListRelationFilter } from '../question/question-list-relation-filter.input';

@InputType()
export class CategoryWhereInput {
  @Field(() => [CategoryWhereInput], { nullable: true })
  AND?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  OR?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  NOT?: Array<CategoryWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => QuestionListRelationFilter, { nullable: true })
  questions?: QuestionListRelationFilter;
}
