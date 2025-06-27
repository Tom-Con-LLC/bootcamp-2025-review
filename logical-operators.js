// I am in a classroom and I have a coffee.
//       true          and      true    -> true

// I am in a classroom and I have no teeth.
//       true          and      false   -> false

// I am in a classroom or I have no teeth.
//       true          or       false

// 1234

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  if (isNaN(Number(pin))) {
    return false;
  }

  return true;
}

// Not operator

// console.log(!true)

// console.log(!false)

// console.log(!true || false) // false || false -> false

// console.log(true !== false)

// console.log(!isNaN(5))

// console.log(!("hello".length >= 5));
