import mongoose, { Model } from "mongoose";

/** Represents a single view of a blog post.
 * New view = new document
 */
interface PostView {
    slug: string;
    ip: string;
}

const modelName = 'PostViews'
export const PostViews: Model<PostView> = mongoose.models[modelName] ||
    mongoose.model<PostView>(
        modelName,
        new mongoose.Schema({
            slug: { type: String, required: true },
            ip: { type: String, required: true },
        }, { timestamps: true }),
        modelName
    );

