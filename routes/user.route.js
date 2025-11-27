import { Router } from "express";
import * as controller from "../controller/user.controller.js";

const router = Router();

router.get("/", controller.getUserController);

export default router;
