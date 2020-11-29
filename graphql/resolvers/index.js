const postsResolvs = require('./posts');
const usersResolvs = require('./users');
const commntsResolvs = require('./comments');

module.exports = {
    Post: {
     likeCount: (parent) => parent.likes.length,
     commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvs.Query
    },
    Mutation: {
        ...usersResolvs.Mutation,
        ...postsResolvs.Mutation,
        ...commntsResolvs.Mutation
    },
    Subscription: {
        ...postsResolvs.Subscription
    }
};
