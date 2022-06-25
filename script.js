
let data = [
    {
        id: 1,
        title: 'HTML'
    },
    {
        id: 2,
        title: 'CSS'
    },
    {
        id: 3,
        title: 'Javascript'
    },
]


let htmlButton = document.getElementById('button-html');
let cssButton = document.getElementById('button-css');
let javascriptButton = document.getElementById('button-javascript');


htmlButton.addEventListener('click', function(item) {
    let post = document.getElementById('post');
    let pTag = document.createElement('p');
    post.classList.add('active');
    pTag.classList.add('title');
    pTag.textContent('HTML');
    post.appendChild(pTag);
});




