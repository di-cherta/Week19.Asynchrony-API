//получает на вход объект поста и возвращает строку HTML-разметки;

function createPostMarkup(object){
    return `
    <div>
    <h2 class='titles'>Заголовок: ${object.title}</h2>
    <p>Статья: ${object.body}</p>
    </div>`;
}

//добавляет полученную разметку в полученный контейнер;

const postsList = document.querySelector('.container');

function addPostMarkup(marking) {
    postsList.innerHTML += marking;
    }

//делает GET запрос по адресу https://jsonplaceholder.typicode.com/posts и добавит их на страницу (для этого примените метод forEach и функции созданные ранее).

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {
    data.forEach((post) => {
    const marking = createPostMarkup(post);
    addPostMarkup (marking);
    });
});


// Сокращенный вариант:

// const postsList = document.querySelector('.container');

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => data.forEach((post) => {
//     postsList.insertAdjacentHTML('beforeEnd',  `
//     <h2 class='titles'>Заголовок: ${post.title}</h2>
//     <p>Статья: ${post.body}</p>
//     `)
// }))