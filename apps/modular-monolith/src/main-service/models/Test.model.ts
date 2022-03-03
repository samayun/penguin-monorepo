import { model, Schema } from 'mongoose';

const TestSchema = new Schema(
    {
        title: String,
        slug: {
            source: 'title',
            type: String,
            slugPaddingSize: 2,
            unique: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Test = model('Test', TestSchema);
