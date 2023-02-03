import { DISCORD_ENQUIRIES_CHANNEL } from "$env/static/private";
import { isValidEmail } from "$lib/schema";
import { contactUsFormSchema } from "$lib/schema/contactUs";
import { error, json } from "@sveltejs/kit";
import axios from "axios";
import { z } from "zod";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const parsed = contactUsFormSchema.safeParse(body);
    if (!parsed.success) throw error(400, 'Invalid body');

    const { name, email, message, cell } = parsed.data;
    // Sometimes an empty string comes thru, instead of undefined.
    // The initial schema is looser, and allows thru any string | undefined
    // Here we tighten it up, and throw an error if it's not a valid email
    if (
        email !== undefined &&
        email.length > 0 &&
        !isValidEmail(email)
    ) throw error(400, 'Invalid email address')
    if (
        cell !== undefined &&
        cell.length > 0 &&
        !z.string().regex(/^\d{10,15}$/).safeParse(cell).success
    ) throw error(400, 'Invalid cell number')

    if (!email && !cell) throw error(400, 'Must provide either email or cell number');

    let content = `New enquiry from: ${name}\n`;
    if (email) content += `**Email**: ${email}\n`;
    if (cell) content += `**Cell**: ${cell}\n`;
    content += `**Message**: ${message}`;

    try {
        await axios.post(DISCORD_ENQUIRIES_CHANNEL, { content })

        return json({ ok: true })
    } catch (error) {
        console.error(error);
        return json({ ok: false })
    }
}