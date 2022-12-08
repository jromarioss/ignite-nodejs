import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description}: ICreateSpecificationsDTO): Promise<Specifications>;
  findByName(name: string): Promise<Specifications>;
  findByIds(ids: string[]): Promise<Specifications[]>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };