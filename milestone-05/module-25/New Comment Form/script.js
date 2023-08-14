document.getElementById("submit").addEventListener('click',function(){
    const comment = document.getElementById("comment");
    const newComment = comment.value;

    const commentContainer = document.getElementById("comments-list");
    const commentwrapper = document.createElement('div');
    commentwrapper.setAttribute("class","chat chat-start");
    const p = document.createElement("p");
    p.innerText = newComment;
    commentwrapper.appendChild(p);
    commentContainer.appendChild(commentwrapper);
    comment.value ='';
});