import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,        // 몽고디비의 ObjectId 타입
        ref: 'User',                        // User 스키마의 참조를 설정
        required: true,
    },

    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },

    tags: {
        type: [String],
        required: [true, 'Tag is required.'],
    }
});

const Post = models['Post'] || model('Post', PostSchema);

export default Post;