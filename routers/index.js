import { Router } from "express";

import authRouter from './authRouter.js';
import hashtagsPosts from "./hashtagsPosts.js";
import usersRouter from "./usersRouter.js";
import timelineRouter from './timelineRouter.js'
import postsRouter from "./postsRouter.js";
import likeRouter from "./likeRouter.js";
import commentsRouter from "./commentsRouter.js";
import followsRouter from "./followsRouter.js";
import rePostRouter from './rePostRouter.js';

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(timelineRouter);
router.use(hashtagsPosts);
router.use(postsRouter);
router.use(likeRouter);
router.use(commentsRouter);
router.use(followsRouter);
router.use(rePostRouter);

export default router;