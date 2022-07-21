import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from '@nestjs/class-transformer';
import { QuestionUpdateWithoutCategoryInput } from './question-update-without-category.input';

@InputType()
export class QuestionUpdateWithWhereUniqueWithoutCategoryInput {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @Field(() => QuestionUpdateWithoutCategoryInput, { nullable: false })
  @Type(() => QuestionUpdateWithoutCategoryInput)
  data!: QuestionUpdateWithoutCategoryInput;
}
