import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

import { Category } from "./Category";
import { Specifications } from "./Specifications";


@Entity("cars")
class Car {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id"})
  category: Category;

  @Column()
  category_id: string;

  @ManyToMany(() => Specifications)
  @JoinTable({
    // nome da tablea
    name: "specifications_cars",
    // name da coluna dentro da tabela de relacionamento que referencia a tablea q a gente ta
    joinColumns: [{ name: "car_id" }],
    // a outra coluna que referencia a tabela que esta colocando dentro do many to many
    inverseJoinColumns: [{ name: "specification_id " }]
  })
  specifications: Specifications[];

  @CreateDateColumn()
  created_at: Date;
  
  constructor() {
    if(!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Car }