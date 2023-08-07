let map = new Map();

map.set("Russia", "Moscow");   
map.set("France", "Paris");      
map.set("USA", "Washington");  
map.set("Germany", "Berlin");  

console.log(map);


//////////////////////////////

let getCountry = (country) => {
  return map.get(country);
};

console.log(getCountry("France"));

////////////////////////////


let setCountry = (country, capital) => {
  map.set(country, capital);
};

setCountry("Lithuania", "Vilnius");
console.log(getCountry("Lithuania"));


////////////////////////////////////////////

let deleteCountry = (country) => {
 map.delete(country);
};

deleteCountry("Germany");
console.log(map);
