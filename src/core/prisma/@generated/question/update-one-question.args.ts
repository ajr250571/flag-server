import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionUpdateInput } from './question-update.input';
import { Type } from '@nestjs/class-transformer';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@ArgsType()
export class UpdateOneQuestionArgs {
  @Field(() => QuestionUpdateInput, { nullable: false })
  @Type(() => QuestionUpdateInput)
  data!: QuestionUpdateInput;

  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;
}
