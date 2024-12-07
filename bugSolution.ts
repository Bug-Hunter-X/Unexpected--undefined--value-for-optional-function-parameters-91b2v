function printName(name?: string): void {
  console.log(name ?? 'No name provided'); // Use nullish coalescing operator
}

function printName2(name?: string): void {
  console.log(name?.toString() || 'No name provided'); // Use optional chaining
}

printName(); // Prints 'No name provided'
printName(undefined); // Prints 'No name provided'
printName2(); // Prints 'No name provided'
printName2(undefined); // Prints 'No name provided' 