//first call to api for data
axios.get('https://jsonplaceholder.typicode.com/posts').then(postsResponse => {
  //storing first calls usable data in a variable
  let posts = postsResponse.data;
  //second call to api for data
  axios.get('https://jsonplaceholder.typicode.com/comments').then(commentsResponse => {
    //storing second call usable data in a variable
    let comments = commentsResponse.data;
    
    //iterating over the posts data
    posts.forEach(post => {

      //adding comments as a property to the posts object and logic to add comments from the second call to the corresponding post of the first call
      post.comments = comments.filter(comment => comment.postId === post.id);

      //creating and entry point in to the dom and attaching a container class
      let entryPoint = document.getElementById('app');
      entryPoint.classList.add('container');

      //creating creating a card wrapper and adding classes to use with bootstrap
      let cardWrapper = document.createElement('div');
      cardWrapper.classList.add('card');
      cardWrapper.classList.add('mb-4');
      
      //creating a div to hold the body of the card
      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');


      //creating an h5 element to house the post title
      let cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      //inserting the post title to the h5 element 
      cardTitle.innerText = post.title;
      
      //creating a p element to hold the comment list
      let cardText = document.createElement('p');
      cardText.classList.add('card-text');

      //creating an unordered list for the individual comments
      let commentList = document.createElement('ul');
      commentList.classList.add('list-group');

      //iterating over the individual comments
      post.comments.forEach(singleComment => {
        //creating a li for a single comment
        let newComment = document.createElement('li');
        newComment.classList.add('list-group-item');
        newComment.classList.add('mb-2');
        
        //inserting a single comment to the li element
        newComment.innerText = singleComment.body;

        //attaching the single comment to the comment list
        commentList.appendChild(newComment);
      });
      //adding the post tile to the card body
      cardBody.appendChild(cardTitle);

      //adding the comment list to the card text area
      cardText.appendChild(commentList);

      //adding the card text area to the card body
      cardBody.appendChild(cardText);

      //adding the card body to the card wrapper
      cardWrapper.appendChild(cardBody);

      //inserting the card to the dom
      entryPoint.appendChild(cardWrapper);
    });
  });
});



