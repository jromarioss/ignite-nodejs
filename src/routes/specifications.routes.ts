import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases/createSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationsRoutes };