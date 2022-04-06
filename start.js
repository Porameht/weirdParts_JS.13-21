(() => {
  // 1.NaN
  if (NaN !== NaN) {
    console.log("is NaN"); // true is not same it
  }

  if (Number.isNaN(NaN)) {
    // console.log('NaN is working correctly') // true
  }

  // 2. Type Coercion
  if (3 > 2 > 1) {
    console.log("Type coercion makes it become falsy"); // false
  }

  console.log(1 + "2"); // 21
  console.log(true + true); // 2

  // 3. Interpreter & Compiler
  function getPerson() {
    return {
      // ; auto complete semi colon
      name: "frank",
    };
  }
  console.log(getPerson());

  //   4. Check object type
  const person = null; // null not is object
  if (typeof person === "object") {
    console.log("Checking object type is wrong");
  }

  if (typeof person === "object" && person !== null) {
    console.log("Check object type is now working correctly");
  }
})();
