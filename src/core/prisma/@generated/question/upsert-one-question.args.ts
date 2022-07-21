import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from '@nestjs/class-transformer';
import { QuestionCreateInput } from './question-create.input';
import { QuestionUpdateInput } from './question-update.input';

@ArgsType()
export class UpsertOneQuestionArgs {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @Field(() => QuestionCreateInput, { nullable: false })
  @Type(() => QuestionCreateInput)
  create!: QuestionCreateInput;

  @Field(() => QuestionUpdateInput, { nullable: false })
  @Type(() => QuestionUpdateInput)
  update!: QuestionUpdateInput;
}
