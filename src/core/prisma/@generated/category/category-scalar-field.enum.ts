import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
}

registerEnumType(CategoryScalarFieldEnum, {
  name: 'CategoryScalarFieldEnum',
  description: undefined,
});
