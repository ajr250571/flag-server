import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from '@nestjs/class-validator';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  @Validator.MinLength(3)
  @Validator.MaxLength(60)
  name?: string;
}
