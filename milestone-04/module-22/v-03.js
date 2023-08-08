const names = ['abul','babul','cabul','dabul','ebul','babul','abul','kabul','gabul','cabul','babul','abul','abul','pabul','cabul','pabul'];

function removeDuplicate(names){
    const uniqueName = [];
    for(var i = 0; i<names.length; i++){
        let name = names[i];
        if(uniqueName.includes(name) === false){
            uniqueName.push(name);
        }

    }
    return uniqueName;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);

// try another Way 

function removeDuplicate(names){
    let uniqueName = [];
    for(var name of names){
        if(uniqueName.includes(name)=== false){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}

const unique = removeDuplicate(names);
console.log(unique);

