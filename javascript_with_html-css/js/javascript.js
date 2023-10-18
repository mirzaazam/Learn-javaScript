
const MyUl = document.getElementById('my-ul');
const newLine = document.createElement('li');
newLine.innerText = 'item-5';

MyUl.appendChild(newLine);

// option: 2
const makeBlue = document.getElementById('blue');
function makeBule(){
    document.body.style.backgroundColor = 'blue';
}

// option: 3
const makeDark = document.getElementById('dark');
makeDark.onclick = makeDarkFunction;

function makeDarkFunction(){
    document.body.style.backgroundColor = 'black';
}

// option: 4
const makeRed = document.getElementById('red');
makeRed.onclick = function makeReD(){
    document.body.style.backgroundColor = 'red';
}

// option: 5
const makeOrange = document.getElementById('make-orange');
makeOrange.addEventListener('click',makeOrangeFunction);
function makeOrangeFunction(){
    document.body.style.backgroundColor = 'orange';
}

//option: 6
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click',function (){ 
    document.body.style.backgroundColor = 'pink';
});

document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
});

//input feild theke value niye jawwa 
const btn = document.getElementById('btn-1');
const paraghraph = document.getElementById('p-tag');

btn.addEventListener('click', function(){
    paraghraph.innerText = 'i am change at this time';
})

const update_btn = document.getElementById('btn-update');

update_btn.addEventListener('click', function(){
    const input_feild = document.getElementById('input-feild');
    const input_text = input_feild.value;
    paraghraph.innerText = input_text;          
    input_feild.value = ' ';
})