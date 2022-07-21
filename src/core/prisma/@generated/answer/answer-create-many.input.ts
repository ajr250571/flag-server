import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnswerCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  questionId!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: true })
  isCorrect?: boolean;

  @Field(() => String, { nullable: false })
  url!: string;
}
