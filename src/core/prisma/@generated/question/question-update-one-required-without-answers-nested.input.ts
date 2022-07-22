import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutAnswersInput } from './question-create-or-connect-without-answers.input';
import { QuestionUpsertWithoutAnswersInput } from './question-upsert-without-answers.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutAnswersInput } from './question-update-without-answers.input';

@InputType()
export class QuestionUpdateOneRequiredWithoutAnswersNestedInput {
  @Field(() => QuestionCreateWithoutAnswersInput, { nullable: true })
  @Type(() => QuestionCreateWithoutAnswersInput)
  create?: QuestionCreateWithoutAnswersInput;

  @Field(() => QuestionCreateOrConnectWithoutAnswersInput, { nullable: true })
  @Type(() => QuestionCreateOrConnectWithoutAnswersInput)
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;

  @Field(() => QuestionUpsertWithoutAnswersInput, { nullable: true })
  @Type(() => QuestionUpsertWithoutAnswersInput)
  upsert?: QuestionUpsertWithoutAnswersInput;

  @Field(() => QuestionWhereUniqueInput, { nullable: true })
  @Type(() => QuestionWhereUniqueInput)
  connect?: QuestionWhereUniqueInput;

  @Field(() => QuestionUpdateWithoutAnswersInput, { nullable: true })
  @Type(() => QuestionUpdateWithoutAnswersInput)
  update?: QuestionUpdateWithoutAnswersInput;
}
