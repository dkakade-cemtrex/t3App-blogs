import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { categoryRouter } from "./category";
import { postRouter } from "./post";
import { userRouter } from "./user";
import { commentRouter } from "./comment";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  category: categoryRouter,
  post: postRouter,
  user: userRouter,
  comment: commentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
