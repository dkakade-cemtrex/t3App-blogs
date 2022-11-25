import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  getUser: publicProcedure
    .input(z.object({ email: z.string().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          email: input?.email,
        },
        include: {
          posts: {
            include: {
              Category: true,
            },
          },
        },
      });
    }),
  editUser: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        bio: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log("email", input.email);
      const user = await ctx.prisma.user.update({
        where: {
          email: input.email,
        },
        data: {
          name: input.name,
          bio: input.bio,
        },
      });
      return {
        submit: `Profile updated successfully.`,
      };
    }),
});
