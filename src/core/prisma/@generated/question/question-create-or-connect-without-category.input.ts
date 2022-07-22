import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionCreateWithoutCategoryInput } from './question-create-without-category.input';

@InputType()
export class QuestionCreateOrConnectWithoutCategoryInput {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @Field(() => QuestionCreateWithoutCategoryInput, { nullable: false })
  @Type(() => QuestionCreateWithoutCategoryInput)
  create!: QuestionCreateWithoutCategoryInput;
}
