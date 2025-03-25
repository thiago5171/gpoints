import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { hash, verify } from "argon2";
import { TRPCError } from "@trpc/server";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string(),
  companyId: z.number().optional(),
  role: z.enum(["ADMIN", "OWNER", "EMPLOYEE"]),
});

export const authRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const { email, password } = input;

    const user = await ctx.db.user.findUnique({
      where: { email },
      include: {
        company: true,
      },
    });

    if (!user || !user.password) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Usuário não encontrado",
      });
    }

    const isValidPassword = await verify(user.password, password);

    if (!isValidPassword) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Senha incorreta",
      });
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      company: user.company,
    };
  }),

  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, password, name, role } = input;

      const existingUser = await ctx.db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email já está em uso",
        });
      }

      const hashedPassword = await hash(password);

      const user = await ctx.db.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role,
        },
        include: {
          company: true,
        },
      });

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        // company: user.company,
      };
    }),

  me: protectedProcedure.query(async ({ ctx }) => {
    // TODO: Implementar verificação de sessão
    if (!ctx.session?.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Não autenticado",
      });
    }

    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: {
        company: true,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Usuário não encontrado",
      });
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      company: user.company,
    };
  }),
});
