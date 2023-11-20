const numToEvent = [
      "Cuneiform created",
      "Cayans rise",
      "Abraham covenant God",
      "Hittites rise to power",
      "Hittites fall",
      "Alexander to King Macedonia",
      "Persian empire defeated",
      "Mayans create a new calendar",
      "Jesus Christ is born",
      "Jesus dies",
      "WW2",
      "Russia Invades Crimea",
      "China Invades Tiwan"
];
let currentCellSelectContent = "";

let list = [];
let numList = [];

let yourOrder = [
      
];
let score = 0;
let lastCellClick = "";
function cellPress(id) {
      if (id.includes("event")) {
            if (lastCellClick !== "") {
                  document.getElementById(lastCellClick).style.background = "white";
            }
            document.getElementById(id).style.background = "#defcff";
            currentCellSelectContent = document.getElementById(id).innerText;
            lastCellClick = id;
      } else {
            document.getElementById(id).innerText = currentCellSelectContent;
            document.getElementById(lastCellClick).style.background = "white";
            currentCellSelectContent = "";
            
      }
}

function start() {
      list = [];
      numList = [];
      makeList();
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            document.getElementById("event" + h).innerText = numToEvent[list[y]-1];
      }
      
}

function makeList() {
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            document.getElementById("order" + h).innerText = "";
      }
      let place = Math.floor(Math.random() * numToEvent.length);
      for (let x = 0; x < 10; x++) {
            while (list.includes(place+1)) {
                  place = Math.floor(Math.random() * numToEvent.length);
            }
            list.push(place+1);
            numList.push(Number(place+1));
            place = Math.floor(Math.random() * numToEvent.length);
      }
      numList.sort((a, b) => a - b);
}

function check() {
      score = 0;
      yourOrder = [];
      for (let y = 0; y < 10; y++) {
            var h = y + 1;
            let text = document.getElementById("order" + h).innerText;
            if (numToEvent.indexOf(text) == -1) {
                  yourOrder.push("");
            } else {
                  yourOrder.push(numToEvent.indexOf(text)+1);
            }
         
      }
      for (let g = 0; g < 10; g++) {
            if (yourOrder[g] == numList[g]) {
                  score++;
            }
           
}
if(score == 1) {
       alert("You scored " + score + " point!");
} else {
      alert("You scored " + score + " points!");
}

}
