let set= new Set(["red", "green", "blue"]);


let hasColor = (color) => {
  return set.has(color);
};

console.log(hasColor("white"));
console.log(hasColor("red"));

//////////////////////////////////

let addColor = (color) => {
  set.add(color);
};

addColor("black");
console.log(set);

/////////////////////////////////////////

let deleteColor = (color) => {
set.delete(color);
};

deleteColor("green");
console.log(set);