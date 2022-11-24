import { v4 as uuidV4 } from "uuid";

// Modelo da classe Category
class Category {

  id?: string; // id opcional
  name: string;
  description: string;
  created_at: Date;

  // constructor um método que é chamado quando a classe é instânciada, new () iniciar
  constructor() {
    if (!this.id) { // se ñ tiver nem um id desse Category
      this.id = uuidV4(); // this id recebe um uuid
    }
  }
}

export { Category }