import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Question } from '../question/question.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [Question], { nullable: true })
  questions?: Array<Question>;

  @Field(() => CategoryCount, { nullable: false })
  _count?: CategoryCount;
}
