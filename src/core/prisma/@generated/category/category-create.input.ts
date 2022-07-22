import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from '@nestjs/class-validator';
import { QuestionCreateNestedManyWithoutCategoryInput } from '../question/question-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  @Validator.MaxLength(60)
  name!: string;

  @Field(() => QuestionCreateNestedManyWithoutCategoryInput, { nullable: true })
  questions?: QuestionCreateNestedManyWithoutCategoryInput;
}
