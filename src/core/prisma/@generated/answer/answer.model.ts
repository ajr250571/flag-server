import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Question } from '../question/question.model';

@ObjectType()
export class Answer {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Question, { nullable: false })
  question?: Question;

  @Field(() => String, { nullable: false })
  questionId!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isCorrect!: boolean;

  @Field(() => String, { nullable: false })
  url!: string;
}
