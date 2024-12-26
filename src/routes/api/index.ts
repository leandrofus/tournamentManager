import { Router } from "express";
import Players from "./Players";
import Matches from "./Matches";
import Tournaments from "./Tournaments";
const router = Router();

router.use("/jugadores", Players);
router.use("/partidos", Matches);
router.use("/ligas", Tournaments);
export default router;