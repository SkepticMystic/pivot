import mongoose from "mongoose";

interface PostView {
    slug: string;
    views: number;
}

const modelName = 'PostViews'
export const PostViews = mongoose.model<PostView>(
    modelName,
    new mongoose.Schema({
        slug: { type: String, required: true },
        views: { type: Number, required: true, default: 0 },
    }, { timestamps: true }),
    modelName
);

