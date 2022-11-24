import { Specifications } from "../model/Specifications";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description}: ICreateSpecificationsDTO): void;
  findByName(name: string): Specifications;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };