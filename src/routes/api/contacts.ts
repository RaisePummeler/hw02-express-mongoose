import express from "express";

import * as ctrl from "../../controllers/contacts/index";

import {ctrlWrapper} from "../../helpers/index";
import { isValidId } from "../../middlewares/index";

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.updateFieldById));

export default router;