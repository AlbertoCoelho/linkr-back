import { Router } from "express";

import authRouter from './authRouter.js';
import hashtagsPosts from "./hashtagsPosts.js";
import usersRouter from "./usersRouter.js";
import timelineRouter from './timelineRouter.js'

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(timelineRouter);

router.use(hashtagsPosts);

export default router;