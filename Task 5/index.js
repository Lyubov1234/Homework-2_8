let person = {
      firstName: "",
      lastName: "",
    
      get FirstName() {
        return this.lirstName;
      },
    
      set FirstName(value) {
        this.firstName = value;
      },
    
      get LastName() {
        return this.lastName;
      },
    
      set LastName(value) {
        this.lastName = value;
      },

      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },

      set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      },
    };

person.firstName = "Lyubov";
person.lastName = "Dydyshko";

console.log(person.firstName); 
console.log(person.lastName); 

person.fullName = "Alex Dydyshko";

console.log(person.firstName); 
console.log(person.lastName); 
console.log(person.fullName); 



//////////////////////////////////


class circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}

let Circle = new circle(3);
console.log(Circle.diameter); 

circle.diameter = 6;
console.log(Circle.radius); 