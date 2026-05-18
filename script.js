const names = [
    "器用度",
    "敏捷度",
    "筋力",
    "生命力",
    "知力",
    "精神力"
];

const growth = [0,0,0,0,0,0];

let leftDice = null;
let rightDice = null;

let rolled = false;

let growthCount = 5;

function rollDice(){

    if(rolled){
        alert("すでに振っています！");
        return;
    }

    leftDice = Math.floor(Math.random() * 6);
    rightDice = Math.floor(Math.random() * 6);

    document.getElementById("leftName").textContent =
        names[leftDice];

    document.getElementById("rightName").textContent =
        names[rightDice];

    rolled = true;
}

function chooseLeft(){

    if(!rolled){
        alert("先に振ってください！");
        return;
    }

    growth[leftDice]++;

    finishGrowth();
}

function chooseRight(){

    if(!rolled){
        alert("先に振ってください！");
        return;
    }

    growth[rightDice]++;

    finishGrowth();
}

function finishGrowth(){

    growthCount--;

    document.getElementById("count").textContent =
        growthCount;

    for(let i=0;i<6;i++){

        document.getElementById("g"+i).textContent =
            growth[i];
    }

    document.getElementById("leftName").textContent = "-";
    document.getElementById("rightName").textContent = "-";

    rolled = false;
}