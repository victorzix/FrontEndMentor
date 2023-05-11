import dataJson from "../data.json" assert { type: "json" };

let reaction = document.getElementById("reaction");
let memory = document.getElementById("memory");
let verbal = document.getElementById("verbal");
let visual = document.getElementById("visual");

let finalResult = document.getElementById("finalResult");

let reactionData = dataJson[0];
let memoryData = dataJson[1];
let verbalData = dataJson[2];
let visualData = dataJson[3];

window.addEventListener("load", () => {
  reaction.innerHTML = `<span class="reactionSpan individualResults">
    <img src="./assets/images/icon-reaction.svg" /> 
    ${reactionData.category} </span><span class="points"><b>${reactionData.score}</b> / 100</span>`;

  memory.innerHTML = `<span class="memorySpan individualResults">
    <img src="./assets/images/icon-memory.svg" /> 
    ${memoryData.category} </span><span class="points"> <b>${memoryData.score}</b> / 100</span>`;

  verbal.innerHTML = `<span class="verbalSpan individualResults">
    <img src="./assets/images/icon-verbal.svg" />
    ${verbalData.category}</span><span class="points"> <b>${verbalData.score}</b> / 100</span>`;

  visual.innerHTML = `<span class="visualSpan individualResults">
    <img src="./assets/images/icon-visual.svg" />
    ${visualData.category} </span><span class="points"> <b>${visualData.score}</b> / 100</span>`;

  finalResult.innerText = Math.round(
    (visualData.score +
      memoryData.score +
      verbalData.score +
      reactionData.score) /
      4
  );
});
