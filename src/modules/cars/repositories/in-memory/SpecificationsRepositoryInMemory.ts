import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications"
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {

  spefications: Specifications[] = []

  async create({ name, description }: ICreateSpecificationsDTO): Promise<Specifications> {
    const specification = new Specifications();

    Object.assign(specification, {
      description, name
    });

    this.spefications.push(specification);
    return specification;
  }

  async findByName(name: string): Promise<Specifications> {
    return this.spefications.find(specification => specification.name === name);
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    // pega todos ids que esta incluso dentro do speficiations
    const allSpecifications = this.spefications.filter(specification => ids.includes(specification.id));

    return allSpecifications;
  }
}

export { SpecificationsRepositoryInMemory }