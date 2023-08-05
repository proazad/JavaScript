function wordReverse(text){
    const textarray = text.split(" ");
    const reveseText = [];
    for(var i = textarray.length - 1; i>=0; i--){
        reveseText.push(textarray[i]);
    }
    let reveseWord = reveseText.join(" ");
    return reveseWord;
}
const text = "I am a good boy";

console.log(wordReverse(text));