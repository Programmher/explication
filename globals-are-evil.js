var clothesAreClean = true;
var coalbin = [];
var mountain = ['o','o','o','o','o','o','o','o','o','o','o','o','o','o']; // <== pieces of coal!
var amountOfCoal = 0;
var coalScoopCapacity = 3;

var startmining = function() {
  while(mountainHasCoal()) {
    if(haveCleanClothes()) {
      doSomeMining();
    } else {
      console.log("Need to wash clothes!");
      washClothes();
    }
  }
};

var mountainHasCoal = function() {
  return !!mountain.length;
};

var haveCleanClothes = function() {
  return clothesAreClean;
};

var doSomeMining = function() {
  amountOfCoal = Math.ceil(Math.random()*coalScoopCapacity);
  for(var i=0; i<amountOfCoal; i++) {
    var coal = mountain.pop();
    coalbin.push(coal);
  }
};

var washClothes = function() {
  if(coalbin.pop()) {
    clothesAreClean = true;
  } else {
    // oh, no, we don't have enough coal to run the washer!
    throw new Error("Washing Machine Error: code 729, insufficient power");  
    // ^^^ this is a joke; don't write confusing error messages like this
  }
  return true; 
};
