import { z } from "zod";

export const contactUsFormSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().optional(),
    cell: z.string().optional(),
    message: z.string().max(2000),
})

export type ContactUsForm = z.infer<typeof contactUsFormSchema>;