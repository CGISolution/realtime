var postSchema = mongoose.Schema({
    ip: String,
    subject: String,
    body: String,
    excerpt: String,
    active: Boolean,
    created: Date,
    published: Date
});

exports.name = 'post';

exports.Schema = mongoose.model('posts', postSchema);
