import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutQuestionsInput } from './category-update-without-questions.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutQuestionsInput } from './category-create-without-questions.input';

@InputType()
export class CategoryUpsertWithoutQuestionsInput {
  @Field(() => CategoryUpdateWithoutQuestionsInput, { nullable: false })
  @Type(() => CategoryUpdateWithoutQuestionsInput)
  update!: CategoryUpdateWithoutQuestionsInput;

  @Field(() => CategoryCreateWithoutQuestionsInput, { nullable: false })
  @Type(() => CategoryCreateWithoutQuestionsInput)
  create!: CategoryCreateWithoutQuestionsInput;
}
