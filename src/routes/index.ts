import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes); // cria a rota categories path inicia com categories
router.use("/specifications", specificationsRoutes);

export { router };