import { Router } from "express";
import api from "./api";
import views from "./view";

const router = Router();

router.use("/api", api);
router.use("/", views);

/**
 * @constant router
 * @description Router for the index
 */
export default router;
