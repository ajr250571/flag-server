import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionScalarWhereInput } from './question-scalar-where.input';
import { Type } from '@nestjs/class-transformer';
import { QuestionUpdateManyMutationInput } from './question-update-many-mutation.input';

@InputType()
export class QuestionUpdateManyWithWhereWithoutCategoryInput {
  @Field(() => QuestionScalarWhereInput, { nullable: false })
  @Type(() => QuestionScalarWhereInput)
  where!: QuestionScalarWhereInput;

  @Field(() => QuestionUpdateManyMutationInput, { nullable: false })
  @Type(() => QuestionUpdateManyMutationInput)
  data!: QuestionUpdateManyMutationInput;
}
