import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionUpdateWithoutCategoryInput } from './question-update-without-category.input';
import { QuestionCreateWithoutCategoryInput } from './question-create-without-category.input';

@InputType()
export class QuestionUpsertWithWhereUniqueWithoutCategoryInput {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @Field(() => QuestionUpdateWithoutCategoryInput, { nullable: false })
  @Type(() => QuestionUpdateWithoutCategoryInput)
  update!: QuestionUpdateWithoutCategoryInput;

  @Field(() => QuestionCreateWithoutCategoryInput, { nullable: false })
  @Type(() => QuestionCreateWithoutCategoryInput)
  create!: QuestionCreateWithoutCategoryInput;
}
