import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnswerUpdateManyWithoutQuestionNestedInput } from '../answer/answer-update-many-without-question-nested.input';

@InputType()
export class QuestionUpdateWithoutCategoryInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => AnswerUpdateManyWithoutQuestionNestedInput, { nullable: true })
  answers?: AnswerUpdateManyWithoutQuestionNestedInput;
}
