# Unhandled Undefined and Non-Numeric Inputs in JavaScript Addition

This repository demonstrates a common error in JavaScript:  incorrect handling of null, undefined, and non-numeric inputs when performing addition. The `bug.js` file shows the flawed code, and `bugSolution.js` provides a corrected version.

The original code only explicitly checks for `null` values, leading to potential runtime errors or unexpected outputs if undefined or non-numeric inputs are provided.  The solution improves the error handling to check for these other scenarios, ensuring robust functionality.

## Bug
The `foo` function in `bug.js` adds two numbers, but it lacks comprehensive error handling for various input types. This can lead to `NaN` results or runtime errors.