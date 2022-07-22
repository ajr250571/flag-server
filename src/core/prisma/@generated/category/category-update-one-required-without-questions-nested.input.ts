import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutQuestionsInput } from './category-create-without-questions.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutQuestionsInput } from './category-create-or-connect-without-questions.input';
import { CategoryUpsertWithoutQuestionsInput } from './category-upsert-without-questions.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutQuestionsInput } from './category-update-without-questions.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutQuestionsNestedInput {
  @Field(() => CategoryCreateWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryCreateWithoutQuestionsInput)
  create?: CategoryCreateWithoutQuestionsInput;

  @Field(() => CategoryCreateOrConnectWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryCreateOrConnectWithoutQuestionsInput)
  connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput;

  @Field(() => CategoryUpsertWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryUpsertWithoutQuestionsInput)
  upsert?: CategoryUpsertWithoutQuestionsInput;

  @Field(() => CategoryWhereUniqueInput, { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  connect?: CategoryWhereUniqueInput;

  @Field(() => CategoryUpdateWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryUpdateWithoutQuestionsInput)
  update?: CategoryUpdateWithoutQuestionsInput;
}
