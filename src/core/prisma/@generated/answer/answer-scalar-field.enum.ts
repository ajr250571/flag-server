import { registerEnumType } from '@nestjs/graphql';

export enum AnswerScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  questionId = 'questionId',
  content = 'content',
  isCorrect = 'isCorrect',
  url = 'url',
}

registerEnumType(AnswerScalarFieldEnum, {
  name: 'AnswerScalarFieldEnum',
  description: undefined,
});
