function makeBlue(){
    document.body.style.backgroundColor='Blue';
}

const makeYollow = document.getElementById('make-yellow').onclick= makeYellow;
function makeYellow(){
    document.body.style.backgroundColor='Yellow';
}

const makePurple = document.getElementById("make-purple").onclick = function makePurple(){
    document.body.style.backgroundColor ='purple';
}


const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinkBg)
function makePinkBg(){
    document.body.style.backgroundColor = 'pink';
}

const green = document.getElementById("make-green");
    green.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
    });

 document.getElementById("make-goldenrod").addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
    // console.log("hello")
 })


 const submitbtn = document.getElementById('submit').addEventListener('click',function(){

    const inputText = document.getElementById('text');
    const showtext = document.getElementById('demo');
    if(inputText.value !== ''){
        showtext.innerText = inputText.value;
    }
    inputText.value = '';
    // console.log(inputText, showtext);
 });