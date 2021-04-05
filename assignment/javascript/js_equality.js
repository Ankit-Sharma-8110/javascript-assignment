console.log("Equality Operators: == vs ===");
//1.
let numNeighbours;
numNeighbours = prompt("How many neighbour countries does your country have?");

//2.
if(numNeighbours==1) console.log("Only 1 border!");

//3.
else if(numNeighbours>1) console.log("More than 1 border");

//4.
else console.log("No borders");

//5. CHECKING RESULTS FOR MULTIPLE INPUTS

//6.
if(numNeighbours===1) console.log("Only 1 border!");
else if(numNeighbours>1) console.log("More than 1 border");
else console.log("No borders");

//7.
numNeighbours = 5;
if(numNeighbours===1) console.log("Only 1 border!");
else if(numNeighbours>1) console.log("More than 1 border");
else console.log("No borders");

//8.
console.log("WE SHOULD USE THE === OPERATOR AND TYPE CONVERSION IN THIS SITUATION \nAS IS PROVIDES ACCURATE RESULTS.")