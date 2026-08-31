import bcrypt from "bcrypt";
import type { RegisterBody } from "../types/auth.ts";
import prisma from "../lib/prisma.ts";  

export const registerUser = async ({ username, email, password }: RegisterBody) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return user;
};