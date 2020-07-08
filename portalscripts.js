// This is where the name searching javascript will go, refer to the github to find the code
const filePath = "Names.txt";
let result;

function loadFile(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();

    if (xmlhttp.status == 200){
        result = xmlhttp.responseText;
        result = result.split("\n");
    }
}

function findHouseTeam(){
    let userInput = document.getElementById("user-input-text").value;

    for (let i = 0; i < result.length; i++){
        if (result[i].toLowerCase().includes(userInput.toLowerCase())){
            let userArray = result[i].split(" ");
            document.getElementById("which-house-image").src = "images/" + userArray[userArray.length - 1] + " Description.png";
        }
    }
}

function flipImage(houseTeamName){
    var img = document.getElementById(houseTeamName);
    var fileName = "images/Vanier_House_" + houseTeamName + "PNG.png";


    if (img.getAttribute("src") === fileName){
        img.src = "images/" + houseTeamName + " Quote.png";
    } else {
        img.src = fileName;
    }
}

function clearName(){
    document.getElementById("user-input-text").value = "";
}
