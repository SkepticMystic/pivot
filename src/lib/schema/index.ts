import { z } from "zod";

export const isValidEmail = (email: string) => z.string().email().safeParse(email).success