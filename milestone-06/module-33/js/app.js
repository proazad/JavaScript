function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function displayUsers(data){
    const tbody = document.getElementById('user-list');
    for(let user of data){
        // const li = document.createElement('li');
        // li.innerText = user.name;
        // tbody.appendChild(li)
        const tr = document.createElement('tr');
        const id = user.id;
        tr.innerHTML = `<td>${id}<td><td>${user.name}<td>`;
   
       tbody.appendChild(tr);
    }
}