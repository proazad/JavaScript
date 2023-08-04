const myComputer = {
    mac: 82629266,
    brand: "HP",
    ram: "16Gb",
    rom: "1TB",
    mother_board:"Giga Byte 303",
    processor: "intel core i7 12gen"
}

for(var keys in myComputer){
    let value = myComputer[keys];

    console.log(keys, "=", value);
} 