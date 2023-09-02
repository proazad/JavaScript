const string = localStorage.getItem('fName');
// console.log(string);

const setName = () => {
    const person = {
        name: "Jubair Hami Ahraam",
        age: "4 Years",
        mothersName: "Josna Akter",
        fathersName: "Azad Hossain",
        district: "Noakhali",
        country: "Bangladesh"
    };

    const personString = JSON.stringify(person);
    localStorage.setItem('person', personString);
}

const getDataFromLocalStorage = () => {
    const personString = localStorage.getItem('person');
    const personObject = JSON.parse(personString);
    if (personObject) {
        document.getElementById("demo").innerHTML = `
    <p>Name: ${personObject.name}</p>
    <p>age: ${personObject.age}</p>
    <p>Mothers Name: ${personObject.mothersName}</p>
    <p>Fathers Name: ${personObject.fathersName}</p>
    <p>Disctrict: ${personObject.district}</p>
    <p>Country: ${personObject.country}</p>
    `;
    }
}