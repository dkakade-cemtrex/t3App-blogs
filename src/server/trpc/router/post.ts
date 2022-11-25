import { Session } from "inspector";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const postRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        Category: true,
        user: true,
      },
      orderBy: {
        date_updated: "desc",
      },
    });
  }),
  byCategory: publicProcedure
    .input(z.object({ id: z.number().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findMany({
        where: {
          categoryId: input.id,
          published: true,
        },
        include: {
          Category: true,
          user: true,
        },
        orderBy: {
          date_updated: "desc",
        },
      });
    }),
  details: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirstOrThrow({
        where: {
          id: input.id,
        },
        include: {
          Category: true,
          user: true,
        },
      });
    }),
  addPost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        email: z.string(),
        image: z.any(),
        categoryId: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirstOrThrow({
        where: {
          email: input.email,
        },
      });
      await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          published: input.published,
          image: input.image,
          userId: user.id,
          categoryId: parseInt(input.categoryId),
        },
      });
      return {
        submit: `Blog added successfully.`,
      };
    }),
});
