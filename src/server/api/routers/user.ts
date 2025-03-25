import * as z from "zod";
import { hash } from "argon2";
import { createTRPCRouter, publicProcedure } from "../trpc";
import Roles from "@/types/role";
import { companyRouter } from "./campany";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
  company: z.object({
    name: z.string(),
  }),
});

export const signUpSchema = loginSchema.extend({
  name: z.string(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;

export const userRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ ctx, input }) => {
      const {
        password,
        email,
        name,
        company: { name: companyName },
      } = input;
      const hashedPassword = await hash(password);

      const user = await ctx.db.user.create({
        data: {
          ...input,
          email,
          name,
          password: hashedPassword,
          role: Roles.OWNER,
          company: {
            create: {
              name: companyName,
            },
          },
        },
      });
      return user;
    }),
});
