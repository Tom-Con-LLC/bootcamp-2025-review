// --- For Each ---
const nums = [6, 7, 8, 9, 10];

// OLD Iteration
for (let i = 0; i < nums.length; i += 1) {
  const num = nums[i];
  // console.log(num * num);
}
// NEW Iteration
nums.forEach((num) => {
  // console.log(num * num);
});

// --- Map ---
const names = ["CHAKAR", "TANDIN", "TSHERING", "DAWA", "BIKRAM"];

// OLD Transformation
const lowercaseNames = [];
for (let i = 0; i < names.length; i += 1) {
  lowercaseNames.push(names[i].toLowerCase());
}

/*
 i | names[i] | names[i].toLowerCase() | lowercaseNames
-----------------------------------------------------------------
 0 | "CHAKAR" | "chakar"               | [] -> ["chakar"]
 1 | "TANDIN" | "tandin"               | ["chakar"] -> ["chakar", "tandin"]
 2 |"TSHERING"| "tshering"             | ["chakar", "tandin"] -> ["chakar", "tandin", "tshering"]
 3 | "DAWA"   | "dawa"                 | ["chakar", "tandin", "tshering"] -> ["chakar", "tandin", "tshering", "dawa"]
 4 | "BIKRAM" | "bikram"               | ["chakar", "tandin", "tshering", "dawa"] -> ["chakar", "tandin", "tshering", "dawa", "bikram"]
 5 |          |                        | ["chakar", "tandin", "tshering", "dawa", "bikram"] ->
*/

const namez = ["cHAKAR", "TANDIN", "TSHERING", "DAWA", "BIKRAM"];
//            [ undefined, undefined, undefined, undefined, undefined]
// New Transformation
const pascalNamez = namez.map((name) => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
});

// console.log(pascalNamez);
