function foo(a, b) {
  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  // Check for null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values
  }
  return a + b;
}
//test cases
console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 0
console.log(foo(10, undefined)); // Output: 0
console.log(foo('hello', 20)); // Output: NaN
console.log(foo(10, 'world')); //Output: NaN