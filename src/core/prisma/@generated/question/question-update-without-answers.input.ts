import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateOneRequiredWithoutQuestionsNestedInput } from '../category/category-update-one-required-without-questions-nested.input';

@InputType()
export class QuestionUpdateWithoutAnswersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => CategoryUpdateOneRequiredWithoutQuestionsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutQuestionsNestedInput;
}
