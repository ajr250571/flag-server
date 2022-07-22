import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CategoryService } from './category.service';

import { Category } from '../core/prisma/@generated/category/category.model';
import { CategoryCreateInput } from '../core/prisma/@generated/category/category-create.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories() {
    return await this.categoryService.getMany();
  }

  @Query(() => Category)
  async category(
    @Args('id')
    id: string,
  ) {
    return await this.categoryService.get(id);
  }

  @Mutation(() => Category)
  async createCategory(
    @Args({ name: 'input', type: () => CategoryCreateInput })
    data: CategoryCreateInput,
  ) {
    return await this.categoryService.create(data);
  }

  @Mutation(() => Category)
  async deleteCategory(
    @Args('id')
    id: string,
  ) {
    return await this.categoryService.delete(id);
  }
}
