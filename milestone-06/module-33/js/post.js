function displayPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>posts(data))
}

function posts(posts){
    const postContainer = document.getElementById("post-container");
    for(const post of posts){
        const article = document.createElement('article');
        const h1 = document.createElement('h2');
        const p = document.createElement('p');
        h1.innerText =  post.title;
        p.innerText =  post.body;
        article.appendChild(h1)
        article.appendChild(p)
        postContainer.appendChild(article)
    }
}


displayPost();

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 