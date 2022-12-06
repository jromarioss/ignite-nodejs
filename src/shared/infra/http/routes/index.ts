import { Router } from "express";

import { authenticateRoutes } from "@shared/infra/http/routes/authenticate.routes";
import { carsRoutes } from "@shared/infra/http/routes/cars.routes";
import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes";
import { specificationsRoutes } from "@shared/infra/http/routes/specifications.routes";
import { usersRoutes } from "@shared/infra/http/routes/users.routes";

const router = Router();

router.use("/categories", categoriesRoutes); // cria a rota categories path inicia com categories
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export { router };