import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnswerCountAggregate } from './answer-count-aggregate.output';
import { AnswerMinAggregate } from './answer-min-aggregate.output';
import { AnswerMaxAggregate } from './answer-max-aggregate.output';

@ObjectType()
export class AnswerGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  questionId!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: false })
  isCorrect!: boolean;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => AnswerCountAggregate, { nullable: true })
  _count?: AnswerCountAggregate;

  @Field(() => AnswerMinAggregate, { nullable: true })
  _min?: AnswerMinAggregate;

  @Field(() => AnswerMaxAggregate, { nullable: true })
  _max?: AnswerMaxAggregate;
}
