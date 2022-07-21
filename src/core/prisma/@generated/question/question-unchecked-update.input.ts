import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnswerUncheckedUpdateManyWithoutQuestionNestedInput } from '../answer/answer-unchecked-update-many-without-question-nested.input';

@InputType()
export class QuestionUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => AnswerUncheckedUpdateManyWithoutQuestionNestedInput, {
    nullable: true,
  })
  answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  categoryId?: StringFieldUpdateOperationsInput;
}
