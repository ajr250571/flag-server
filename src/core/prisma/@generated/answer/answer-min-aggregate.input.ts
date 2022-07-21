import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnswerMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  questionId?: true;

  @Field(() => Boolean, { nullable: true })
  content?: true;

  @Field(() => Boolean, { nullable: true })
  isCorrect?: true;

  @Field(() => Boolean, { nullable: true })
  url?: true;
}
