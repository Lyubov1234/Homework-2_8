
const pow = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n + pow(n - 1);
  }
};

console.log(pow(7));


/////////////////////////////////////////

const factorial = (n)=> {
  return n ? n*factorial(n-1) : 1;
};

console.log(factorial(7));