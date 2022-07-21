import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateManyQuestionInput } from './answer-create-many-question.input';
import { Type } from '@nestjs/class-transformer';

@InputType()
export class AnswerCreateManyQuestionInputEnvelope {
  @Field(() => [AnswerCreateManyQuestionInput], { nullable: false })
  @Type(() => AnswerCreateManyQuestionInput)
  data!: Array<AnswerCreateManyQuestionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
