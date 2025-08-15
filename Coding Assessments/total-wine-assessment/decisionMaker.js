function initialize() {
  // Write your code here
  //3 checkboxes:
  //Is it raining outside?
    //yes 
      //Do you have a raincoat?
        //no -> skip jog
        //yes -> Did you get enough sleep?
    //no -> Did you get enough sleep?
  //Did you get enough sleep?
    document.getElementById("decisionButton").addEventListener('click', () => {
        const isRaining = document.getElementById("rain").checked;
        const isSleepy = document.getElementById("sleep").checked;
        const hasRaincoat = document.getElementById("raincoat").checked;
    
        let decisionText = "";
    
        if (isRaining) {
            if (hasRaincoat) {
                decisionText = isSleepy ? "Go Jog" : "Skip Jog";
            } else {
                decisionText = "Skip Jog";
            }
        } else {
            decisionText = isSleepy ? "Go Jog" : "Skip Jog";
        }
    
        document.getElementById("decisionText").innerHTML = decisionText;
    });
}

document.body.innerHTML = ` 
  <div>
    <input type="checkbox" id="rain"><label>Is it raining outside?</label>
  </div>
  <div>
    <input type="checkbox" id="sleep"><label>Did you get enough sleep?</label>
  </div>
  <div>
    <input type="checkbox" id="raincoat"><label>Do you have a raincoat?</label>
  </div>
  <button id="decisionButton">Make decision</button>
  <div id="decisionText"></div>
  `;

initialize();

document.getElementById("sleep").click();
document.getElementById("decisionButton").click();
console.log(document.getElementById("decisionText").innerHTML); // "Go Jog"