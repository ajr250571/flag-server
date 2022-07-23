import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from '@nestjs/class-validator';

@InputType()
export class CategoryCreateWithoutQuestionsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(5)
  @Validator.MaxLength(60)
  name!: string;
}
