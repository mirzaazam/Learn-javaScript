
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(d => data(d))

    function data(d) {
        console.log(d);
    }

}


function getData() {
    // fetch data from datastore
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadData(data))

//crate div>ul>crate li then set list data than apped to div>ul.
    const ul = document.getElementById('put-li');
    function loadData(data) {
        for (const item of data) {
            const li = document.createElement('li');
            li.innerText = item.username;
            ul.appendChild(li);
        }
    }

}