import { Specifications } from "../../model/Specifications";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }
 
  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specifications {
    const specification = this.specifications.find(specification => specification.name === name);

    return specification;
  }
}

export { SpecificationRepository };