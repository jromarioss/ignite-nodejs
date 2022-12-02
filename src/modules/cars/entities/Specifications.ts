import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from "uuid";

@Entity("specifications")
class Specifications {
  @PrimaryColumn()
  id?: string; // id opcional

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  // constructor um método que é chamado quando a classe é instânciada, new () iniciar
  constructor() {
    if (!this.id) { // se ñ tiver nem um id desse Category
      this.id = uuidV4(); // this id recebe um uuid
    }
  }
}

export { Specifications };