import { Router } from "express";
import TipsController from "../controller/controllTips.js";
const router = Router();


router.post("/create", (req, res) => {
    TipsController.setTips(req, res)
})
router.get("/tips", (req, res) => {
    TipsController.getTips(req, res)
})
export default router;

