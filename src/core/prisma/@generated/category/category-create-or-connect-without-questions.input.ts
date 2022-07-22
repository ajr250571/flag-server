import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutQuestionsInput } from './category-create-without-questions.input';

@InputType()
export class CategoryCreateOrConnectWithoutQuestionsInput {
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  @Type(() => CategoryWhereUniqueInput)
  where!: CategoryWhereUniqueInput;

  @Field(() => CategoryCreateWithoutQuestionsInput, { nullable: false })
  @Type(() => CategoryCreateWithoutQuestionsInput)
  create!: CategoryCreateWithoutQuestionsInput;
}
