axios.get('https://jsonplaceholder.typicode.com/posts').then(postsResponse => {
  let posts = postsResponse.data;
  axios.get('https://jsonplaceholder.typicode.com/comments').then(commentsResponse => {
    let comments = commentsResponse.data;
    
    console.log('posts:', posts);
    console.log('comments', comments);
    posts.forEach(post => {
      posts.comments = comments.filter(comment => comment.postId === post.id);

      //code goes in here....e
    });
    
  });
});



