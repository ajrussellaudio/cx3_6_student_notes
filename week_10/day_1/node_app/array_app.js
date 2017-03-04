var guitars = ["Fender", "Gibson", "Gretsch"];
console.log("guitars:", guitars);

var drums = new Array();
drums.push("Gretsch");
drums.push("Yamaha");
console.log("drums:", drums);

console.log("guitars[0]:", guitars[0]);
console.log("drums[1]", drums[1]);

console.log("drums[9000]:", drums[9000]); // undefined

guitars[30] = "Rickenbacker";
console.log("guitars:", guitars);
console.log("guitars.length:", guitars.length);
console.log("guitars[20]:", guitars[20]);