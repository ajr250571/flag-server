import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutCategoryInput } from './question-create-without-category.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutCategoryInput } from './question-create-or-connect-without-category.input';
import { QuestionUpsertWithWhereUniqueWithoutCategoryInput } from './question-upsert-with-where-unique-without-category.input';
import { QuestionCreateManyCategoryInputEnvelope } from './question-create-many-category-input-envelope.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithWhereUniqueWithoutCategoryInput } from './question-update-with-where-unique-without-category.input';
import { QuestionUpdateManyWithWhereWithoutCategoryInput } from './question-update-many-with-where-without-category.input';
import { QuestionScalarWhereInput } from './question-scalar-where.input';

@InputType()
export class QuestionUncheckedUpdateManyWithoutCategoryNestedInput {
  @Field(() => [QuestionCreateWithoutCategoryInput], { nullable: true })
  @Type(() => QuestionCreateWithoutCategoryInput)
  create?: Array<QuestionCreateWithoutCategoryInput>;

  @Field(() => [QuestionCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => QuestionCreateOrConnectWithoutCategoryInput)
  connectOrCreate?: Array<QuestionCreateOrConnectWithoutCategoryInput>;

  @Field(() => [QuestionUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => QuestionUpsertWithWhereUniqueWithoutCategoryInput)
  upsert?: Array<QuestionUpsertWithWhereUniqueWithoutCategoryInput>;

  @Field(() => QuestionCreateManyCategoryInputEnvelope, { nullable: true })
  @Type(() => QuestionCreateManyCategoryInputEnvelope)
  createMany?: QuestionCreateManyCategoryInputEnvelope;

  @Field(() => [QuestionWhereUniqueInput], { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  set?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionWhereUniqueInput], { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  disconnect?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionWhereUniqueInput], { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  delete?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionWhereUniqueInput], { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  connect?: Array<QuestionWhereUniqueInput>;

  @Field(() => [QuestionUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => QuestionUpdateWithWhereUniqueWithoutCategoryInput)
  update?: Array<QuestionUpdateWithWhereUniqueWithoutCategoryInput>;

  @Field(() => [QuestionUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => QuestionUpdateManyWithWhereWithoutCategoryInput)
  updateMany?: Array<QuestionUpdateManyWithWhereWithoutCategoryInput>;

  @Field(() => [QuestionScalarWhereInput], { nullable: true })
  @Type(() => QuestionScalarWhereInput)
  deleteMany?: Array<QuestionScalarWhereInput>;
}
