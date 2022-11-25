import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const commentRouter = router({
  byPost: publicProcedure
    .input(z.object({ id: z.number().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.comment.findMany({
        where: {
          postId: input.id,
        },
        include: {
          user: true,
          replies:true
        },
      });
    }),
  add: publicProcedure
    .input(
      z.object({
        email: z.string().nullable().optional(),
        postId: z.number(),
        body: z.string(),
        commentId: z.number().nullable().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirstOrThrow({
        where: {
          email: input.email,
        },
      });

      await ctx.prisma.comment.create({
        data: {
          body: input.body,
          postId: input.postId,
          userId: user.id,
          commentId: input.commentId ? input.commentId : null,
        },
      });
      return {
        submit: `Comment added successfully.`,
      };
    }),
});
