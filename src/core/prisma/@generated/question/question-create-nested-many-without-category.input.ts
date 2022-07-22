import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutCategoryInput } from './question-create-without-category.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutCategoryInput } from './question-create-or-connect-without-category.input';
import { QuestionCreateManyCategoryInputEnvelope } from './question-create-many-category-input-envelope.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionCreateNestedManyWithoutCategoryInput {
  @Field(() => [QuestionCreateWithoutCategoryInput], { nullable: true })
  @Type(() => QuestionCreateWithoutCategoryInput)
  create?: Array<QuestionCreateWithoutCategoryInput>;

  @Field(() => [QuestionCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => QuestionCreateOrConnectWithoutCategoryInput)
  connectOrCreate?: Array<QuestionCreateOrConnectWithoutCategoryInput>;

  @Field(() => QuestionCreateManyCategoryInputEnvelope, { nullable: true })
  @Type(() => QuestionCreateManyCategoryInputEnvelope)
  createMany?: QuestionCreateManyCategoryInputEnvelope;

  @Field(() => [QuestionWhereUniqueInput], { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  connect?: Array<QuestionWhereUniqueInput>;
}
