import { model, Schema } from 'mongoose';

const CategorySchema = new Schema(
    {
        title: String,
        status: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Category = model('Category', CategorySchema);
