import mongoose, { Model } from "mongoose";

interface PostView {
    slug: string;
    views: number;
}

const modelName = 'PostViews'
export const PostViews: Model<PostView> = mongoose.models[modelName] ||
    mongoose.model<PostView>(
        modelName,
        new mongoose.Schema({
            slug: { type: String, required: true },
            views: { type: Number, required: true, default: 0 },
        }, { timestamps: true }),
        modelName
    );

