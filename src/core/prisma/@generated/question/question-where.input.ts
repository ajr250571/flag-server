import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class QuestionWhereInput {
  @Field(() => [QuestionWhereInput], { nullable: true })
  AND?: Array<QuestionWhereInput>;

  @Field(() => [QuestionWhereInput], { nullable: true })
  OR?: Array<QuestionWhereInput>;

  @Field(() => [QuestionWhereInput], { nullable: true })
  NOT?: Array<QuestionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => AnswerListRelationFilter, { nullable: true })
  answers?: AnswerListRelationFilter;

  @Field(() => CategoryRelationFilter, { nullable: true })
  category?: CategoryRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  categoryId?: StringFilter;
}
