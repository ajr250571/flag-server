import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutQuestionsInput } from './category-create-without-questions.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutQuestionsInput } from './category-create-or-connect-without-questions.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutQuestionsInput {
  @Field(() => CategoryCreateWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryCreateWithoutQuestionsInput)
  create?: CategoryCreateWithoutQuestionsInput;

  @Field(() => CategoryCreateOrConnectWithoutQuestionsInput, { nullable: true })
  @Type(() => CategoryCreateOrConnectWithoutQuestionsInput)
  connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput;

  @Field(() => CategoryWhereUniqueInput, { nullable: true })
  @Type(() => CategoryWhereUniqueInput)
  connect?: CategoryWhereUniqueInput;
}
