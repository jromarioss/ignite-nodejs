import { getRepository, Repository } from "typeorm";

import { ICreateSpecificationsDTO, ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications";

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }
 
  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specifications> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationRepository };