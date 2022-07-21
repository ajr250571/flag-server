import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateManyCategoryInput } from './question-create-many-category.input';
import { Type } from '@nestjs/class-transformer';

@InputType()
export class QuestionCreateManyCategoryInputEnvelope {
  @Field(() => [QuestionCreateManyCategoryInput], { nullable: false })
  @Type(() => QuestionCreateManyCategoryInput)
  data!: Array<QuestionCreateManyCategoryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
