import { Router } from "express";

import { CreateSpecificationsController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationsController.handle);

export { specificationsRoutes };