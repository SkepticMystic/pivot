import { DISCORD_ENQUIRIES_CHANNEL } from "$env/static/private";
import { contactUsFormSchema } from "$lib/schema/contactUs";
import { error, json } from "@sveltejs/kit";
import axios from "axios";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const parsed = contactUsFormSchema.safeParse(body);
    if (!parsed.success) throw error(400, 'Invalid body');

    const { name, email, message, cell } = parsed.data;
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