
function stringReverse(text){

    // for(var i = 0; i < text.length; i++){
    //     console.log(text[i]);
    // }
    let result = '';
    for(var i = text.length-1; i>= 0; i--){
        result += text[i];
    }
    return result;
}
const  text = "I am a good boy";
console.log(stringReverse(text))