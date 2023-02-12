# Pivot Site

## Blog

### Adding new posts

To make a new blog post, do the following:

1. In `src/routes/blog`, create a new file with the name of the post, e.g. `my-new-post.md`.

   - This slug will be used as a foreign key for other purposes, so make sure you're happy with it, as it's a mission to change.

2. Add frontmatter metadata to the post using YAML. Refer to `src/lib/interfaces/blog/index.ts` for the types allowed.

3. After adding your content, create a thumbnail by saving a `.webp` file to the `static` directory at the root of the project. The name of the file should be the same as the **slug** of the post, e.g. `my-new-post.webp`.
