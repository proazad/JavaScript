const getConfirm = () =>{
    const isConfirm = confirm("Are you a Student  ?");
    if(isConfirm){
        const school = prompt("What is your School Name ?");
        console.log(school);
    }else{
        console.log("You are not eligable for this Job")
    }
}