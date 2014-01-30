var clothesAreClean = true;
var mountain = ['o','o','o','o','o','o','o','o','o','o','o','o','o','o']; // <== pieces of coal!
var amountOfCoal = 0;
var coalScoopCapacity = 3;

var startmining = function() {
  var coalbin = [];
  var theCoal = [];
  while(mountainHasCoal()) {
    if(haveCleanClothes()) {
      theCoal = doSomeMining();
      for(var i = 0; i<theCoal.length; i++)
      {
          coalbin.push(theCoal[i]);
      }
      theCoal = [];
    } else {
      console.log("Need to wash clothes!");
      coalbin = washClothes(coalbin);
    }
  }
  return coalbin.length;
};

var mountainHasCoal = function() {
  return !!mountain.length;
};

var haveCleanClothes = function() {
  return clothesAreClean;
};

var doSomeMining = function() {
  var coalMined = []
  amountOfCoal = Math.ceil(Math.random()*coalScoopCapacity);
  for(var i=0; i<amountOfCoal; i++) {
    var coal = mountain.pop();
    coalMined.push(coal);
  }
  return coalMined;
};

var washClothes = function(myCoalbinNotYours) {
  if(myCoalbinNotYours.pop()) {
    clothesAreClean = true;
  } else {
    // oh, no, we don't have enough coal to run the washer!
    throw new Error("Washing Machine Error: code 729, insufficient power");
    // ^^^ this is a joke; don't write confusing error messages like this
  }
  return myCoalbinNotYours;
};

var amountMined = startmining();
console.log("I mined "+amountMined+" pieces of coal from that bad ol' mountain!");
