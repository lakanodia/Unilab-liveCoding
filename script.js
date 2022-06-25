
let htmlButton = document.getElementById('button-html');
let cssButton = document.getElementById('button-css');
let javascriptButton = document.getElementById('button-javascript');



htmlButton.addEventListener('click', function(){
    let post = document.getElementById('post');
    let pTag = document.createElement('p');
    post.classList.add('active');
    pTag.classList.add('title');
    pTag.textContent = 'HTML';
    post.appendChild(pTag);
});

cssButton.addEventListener('click', function(){
    let postCss = document.getElementById('post-css');
    let pTag = document.createElement('p');
    postCss.classList.add('active');
    pTag.classList.add('title');
    pTag.textContent = 'CSS';
    postCss.appendChild(pTag);
});

javascriptButton.addEventListener('click', function(){
    let postJava = document.getElementById('post-javascript');
    let pTag = document.createElement('p');
    postJava.classList.add('active');
    pTag.classList.add('title');
    pTag.textContent = 'Javascript';
    postJava.appendChild(pTag);
});







