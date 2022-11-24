import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const specificationsRepository = new SpecificationRepository();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository);
const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase);

export { createSpecificationsController };