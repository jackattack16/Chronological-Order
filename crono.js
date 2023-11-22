const numToEvent = [
      'cuneiform created',
'mayans rise',
'abraham covenant god',
'hittites rise to power',
'hittites fall',
'alexander to king macedonia',
'persian empire defeated',
'mayans create a new calendar',
'jesus christ is born',
'jesus dies',
'mayans become prominent',
'mohammad born',
'mohammad first revelation',
'hejira',
 'muhammad dies',
'split of the islamic faith',
'abu bakr becomes caliph',
'umayyids rise',
'umayyids fall',
'abbasids caliphate to power',
'cyrillic alphabet created',
'kievan rus created',
'mayans fall',
'first vladimir of kiev',
'seljuks rise',
'urban ii is pope',
'first crusade',
'saladin born',
'second crusade',
'saladin defeated',
'crusaders takes jerusalem',
'saladin dies',
'seljuks fall',
'mongols invade russia',
'mongols rule middle east',
'abbasids caliphate falls',
'ottoman empire rises',
'aztecs rise',
'incas rise',
'ivan the great rules russia',
'russians freed from mongols',
'christopher colombus americas',
'columbian exchange',
'treaty of tordesillas',
'roman catholicism to new world',
'safavids rise',
'african slaves arrive latin america',
'vasco nunez de balboa crosses to pacific ocean',
'magellan leads the expedition',
'suleman the magnificent in power',
'aztec empire defeated by cortes',
'incas defeated by pizarro in peru',
'ivan the terrible rules russia',
'encomienda system',
'oprichnicki by ivan the terrible',
'time of troubles',
'michael romanov elected czar',
'peter the great to power',
'the enlightenment spreads',
'peter the great has beard tax',
'st petersburg is founded',
'safavids fall',
'catherine the great rules russia',
'simon bolivar leads independence',
'jose morelos leads mexican revolution',
'argentina gains independence',
'mexico gains independence',
'mexican-american war',
'benito juarez to president of mexico',
'banana republics become common',
'nicholas ii becomes czar',
'world war i begins',
'february revolution',
'october revolution',
'balfour declaration',
'russia pulls out of ww1',
'bolsheviks execute the romanovs',
'ww1 ends',
'nazi party is founded',
'ottoman empire falls',
'lenin dies and stalin to power',
'meinkampf is published',
'stalin five year plan',
'hitler becomes chancellor',
'usa good neighbor policy',
'hindenburg dies and hitler to power',
'arab revolt of 1936-1939',
'the great purge begins',
'kristallnacht',
'ww2 begins',
'ww2 ends',
'holocaust ends',
'partition of palestine',
'cold war starts',
'israel created by the un',
'1948 war',
'nato is formed',
'nikita khruschev is in power',
'warsaw pact made',
'suez canal crisis',
'1967 war six day war',
'yom kippur war',
'camp david accords',
'gorbachev promotes the perestroika policy',
'intifada i',
'cold war ends and soviet union dissolves',
'intifada ii intifada 2000',
'nicolas maduro to president of venezuela',
'russia annexes crimea',
'russo-ukraine war', 
'2023 ahs honors finals'
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
            document.getElementById("order" + h).style.background = "white";
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
      let gPlus = 1;
      for (let g = 0; g < 10; g++) {
            let curCell = document.getElementById("order" + gPlus)
            if (yourOrder[g] == numList[g]) {
                  score++;
                  curCell.style.background = "#3CE66C";
            } else {
                  
                  let urAss = curCell.innerText;
                  if (urAss.includes("You said:")) {
                    curCell.style.background = "#E63C3C";
                  } else {
                    curCell.style.background = "#E63C3C";
                  if (document.getElementById("checkBox").checked) {
                  let newContent = "You said: " + urAss + "<b>" + "  Correct Answer: " + numToEvent[numList[g]-1] + "." + "<b/>";
                  curCell.innerHTML = newContent;
                  }
                    
                  
                  }
                  
            }
           gPlus++;
}

if(score == 1) {
       alert("You scored " + score + " point!");
} else {
      alert("You scored " + score + " points!");
}

}

