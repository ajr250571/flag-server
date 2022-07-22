import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly data: PrismaService) {}

  async getMany() {
    return await this.data.category.findMany();
  }
  async get(id: string) {
    return await this.data.category.findUnique({ where: { id } });
  }
  async create(data: any) {
    return await this.data.category.create({ data });
  }
  async delete(id: string) {
    return await this.data.category.delete({ where: { id } });
  }
}
