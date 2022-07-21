import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionCreateManyInput } from './question-create-many.input';
import { Type } from '@nestjs/class-transformer';

@ArgsType()
export class CreateManyQuestionArgs {
  @Field(() => [QuestionCreateManyInput], { nullable: false })
  @Type(() => QuestionCreateManyInput)
  data!: Array<QuestionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
