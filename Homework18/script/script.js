const container = document.createElement('div');
const postsRequest = new XMLHttpRequest();
postsRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
postsRequest.responseType = 'json';

postsRequest.send();
document.body.append(container);

const hideComments = (cont) =>{
    let comments = cont.lastElementChild
    comments.remove()
}

const showComments = (comments, cont) =>{
    const containerComment = document.createElement('div');
    containerComment.classList.add('comment_container')

    comments.forEach((object) => {
        let {body: comment} = object;

        const text = document.createElement('p');
        text.innerText = comment;

        containerComment.append(text)
    });

    cont.append(containerComment)
}

doComments = (id, event) =>{
    const xhrComments = new XMLHttpRequest();

    xhrComments.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    xhrComments.responseType = 'json';

    xhrComments.send()

    let button = event.target;
    let parent = event.target.parentNode;

    xhrComments.onload = () =>{
        let result = xhrComments.response

        if(button.innerText === 'Show comments'){
            button.innerText = 'Hide comments'
            showComments(result, parent)

        }else if(button.innerText === 'Hide comments'){
            button.innerText = 'Show comments'
            hideComments(parent);
        }

    }
}

renderPost = (postsList, block) =>{

    const posts = postsList.map((post) =>{
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h1');
        const postText = document.createElement('p');
        const button = document.createElement('button');

        postTitle.innerText = post.title;
        postText.innerText = post.body;
        button.innerText = 'Show comments';

        postContainer.classList.add('post_container');
        button.classList.add('button');

        postContainer.append(postTitle, postText, button)

        let postsId = post.id;

        button.addEventListener('click', (event) => {
            doComments(postsId, event)
        });
        return postContainer
    })

    block.append(...posts)
}

postsRequest.onload = () =>{
  const { response } = postsRequest;
  renderPost(response, container)

}

