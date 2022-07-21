import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnswerCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  questionId!: number;

  @Field(() => Int, { nullable: false })
  content!: number;

  @Field(() => Int, { nullable: false })
  isCorrect!: number;

  @Field(() => Int, { nullable: false })
  url!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
