import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  branches: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
});

export const companyRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      include: {
        branches: true,
      },
    });
    return companies;
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input: { id } }) => {
      const company = await ctx.db.company.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          branches: true,
        },
      });
      return company;
    }),

  create: publicProcedure
    .input(companySchema.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const company = await ctx.db.company.create({
        data: {
          ...input,
          branches: {
            create: input.branches,
          },
        },
      });
      return company;
    }),

  update: publicProcedure
    .input(companySchema)
    .mutation(async ({ ctx, input }) => {
      const company = await ctx.db.company.update({
        where: {
          id: Number(input.id),
        },
        data: {
          name: input.name,
        },
      });
      return company;
    }),
});
