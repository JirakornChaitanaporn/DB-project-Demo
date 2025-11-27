import { Router } from "express";
import * as controller from "../controller/test.controller.js";

const router = Router();

router.get("/", controller.testController);

export default router;
