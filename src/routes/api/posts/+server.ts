import { getAllBlogPosts } from '$lib/utils/blog'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
    const allPosts = await getAllBlogPosts()

    allPosts.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime())

    return json(allPosts)
}