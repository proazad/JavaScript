let series ='';
for(let i = 1; i<=10; i++){
    series= i+" = ";
    for(let j =1; j<=10; j++){
        series += i * j+" ";
    }
    console.log(series);
}