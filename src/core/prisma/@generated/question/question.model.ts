import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Answer } from '../answer/answer.model';
import { Category } from '../category/category.model';
import { QuestionCount } from './question-count.output';

@ObjectType()
export class Question {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => [Answer], { nullable: true })
  answers?: Array<Answer>;

  @Field(() => Category, { nullable: false })
  category?: Category;

  @Field(() => String, { nullable: false })
  categoryId!: string;

  @Field(() => QuestionCount, { nullable: false })
  _count?: QuestionCount;
}
