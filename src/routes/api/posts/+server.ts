import { getAllBlogPosts } from '$lib/utils/blog'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
    const allPosts = await getAllBlogPosts()

    allPosts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())

    return json(allPosts)
}