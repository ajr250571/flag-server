import { registerEnumType } from '@nestjs/graphql';

export enum QuestionScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  content = 'content',
  categoryId = 'categoryId',
}

registerEnumType(QuestionScalarFieldEnum, {
  name: 'QuestionScalarFieldEnum',
  description: undefined,
});
