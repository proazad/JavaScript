// let mobile = {
//     brand: "Vivo",
//     ram: "6gb",
//     color:"white",
//     rom:'64gb',
//     model:"2020"
// }
// console.log(mobile);
// console.log(mobile.brand);

let student = {
    id:272,
    name: 'Jubair Hami Arhaam',
    father_name: "Azad Hossain",
    mother_name: "Josna Akter",
    class: 8,
    group: "Science",
    school_name: "Noakhali govt. High School"
}

// let studentProperty = Object.keys(student);
// console.log(studentProperty);
// let studentValues = Object.values(student);
// console.log(studentValues);

/**
 * Get Object Single value
 */

// let studentName = student.name;
// console.log(studentName);
// let studentFatherName = student['father_name'];
// console.log(studentFatherName);
// let studentMother = 'mother_name';
// console.log(student[studentMother]);

/**
* Set Object Single Value
*/

student.name= "Aysha Alayna";
let studentName = student.name;
// console.log(studentName);

student.class ="Play";
let studentClass = student['class'];
// console.log(studentClass);

let school = "Jahanabad Ideal KG School";
student.school_name = school;
// console.log(student.school_name);


/**
 * Object Looping
 */
let studenKeys = Object.keys(student);
for(var i = 0; i < studenKeys.length; i++){
    let property = studenKeys[i];
    console.log(property+" = "+student[property]);
}