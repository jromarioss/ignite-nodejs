import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications";

interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  specifications?: Specifications[];
  id?: string;
}

export { ICreateCarDTO }