const fs = require('fs');
const readLine = require('readLine');

const rl = readLine.createInterface({
    input: fs.createReadStream("Names.txt"),
    output: process.stdout,
    terminal: false
});

function FindHouse(){
    var nameToFind = document.getElementById("FullName").value;

    rl.on('line', (line) =>{
        if (line.includes(nameToFind)){
            lineArray = line.split(" ");
            document.getElementById("HouseTeamName").innerHTML = lineArray[lineArray.length - 1];
        }
    })
}