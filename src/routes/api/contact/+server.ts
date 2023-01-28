
import { DISCORD_ENQUIRIES_CHANNEL } from "$env/static/private";
import { error, json } from "@sveltejs/kit";
import axios from "axios";
import { z } from "zod";
import type { RequestHandler } from "./$types";

const discordPostSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().max(2000),
})

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const parsed = discordPostSchema.safeParse(body);
    if (!parsed.success) throw error(400, 'Invalid body');
    const { name, email, message } = parsed.data;

    const content = `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`;
    await axios.post(DISCORD_ENQUIRIES_CHANNEL, { content })


    return json({ ok: true })
}