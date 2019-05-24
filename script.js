axios.get('https://jsonplaceholder.typicode.com/posts').then(postsResponse => {
  let posts = postsResponse.data;
  axios.get('https://jsonplaceholder.typicode.com/comments').then(commentsResponse => {
    let comments = commentsResponse.data;
    //console.log('posts:', posts);
    //console.log('comments', comments);
    posts.forEach(post => {
      post.comments = comments.filter(comment => comment.postId === post.id);
      console.log(post);

      let entryPoint = document.getElementById('app');
      entryPoint.classList.add('container');

      let cardWrapper = document.createElement('div');
      cardWrapper.classList.add('card');
      
      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');


      let cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.innerText = post.title;
      

      let cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.innerText = post.comments;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardWrapper.appendChild(cardBody);
      entryPoint.appendChild(cardWrapper);
    });
    
  });
});



