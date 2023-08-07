function createCounter() { 
  let counter =0; 
 counter = counter  +1 
  const myFunction = function () { 
      counter = counter+1; 
      return counter 
  } 
  return myFunction 
} ;

let n = createCounter();
console.log(n());
console.log(n()) ;
console.log(n()) ;



// ///////////////////////


function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(5));  
console.log(add10(10)); 


/////////////////////////////

function multiplier(x) {
  return function(y) {
    return x * y;
  };
};

let multiplierAdd2 = multiplier(2);
let multiplierAdd3 = multiplier(3);

console.log(multiplierAdd2(2));  
console.log(multiplierAdd3(3)); 
