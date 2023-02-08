import { blogLoad, } from '$lib/utils/blogs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = blogLoad