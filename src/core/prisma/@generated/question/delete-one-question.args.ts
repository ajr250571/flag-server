import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from '@nestjs/class-transformer';

@ArgsType()
export class DeleteOneQuestionArgs {
  @Field(() => QuestionWhereUniqueInput, { nullable: false })
  @Type(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;
}
