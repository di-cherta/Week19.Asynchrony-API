const postTitle = document.getElementById('postTitle');
const postText = document.getElementById('postText');
const postList = document.querySelector('.postList');
const addButton = document.getElementById('btn');


function createPosts(postTitle, postText){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: postTitle.value,
            body: postText.value,
        })
    })
    .then((res) => res.json())
    .then((json) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<div class='post'>
        <h3>${json.title}</h3>
        <p>${json.body}</p>
        </div>`;
        postList.appendChild(postElement);
    })
    .catch((err) => console.log('Ошибка, запрос не выполнен!', err));
}

addButton.addEventListener("click", function() {
    createPosts(postTitle, postText);
    postTitle.value = "";
    postText.value = "";
});

