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

// --- Filter ---

// Old Filter
const numbers = [11, 12, 13, 14, 15];

const evenNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

// console.log(evenNumbers);

// New Filter

const evenNumberz = numbers.filter((number) => {
  return number % 2 === 0;
});

// console.log(evenNumberz);

const numz = [12, 4, 24, 6, 3, 9];

const sorted = numz.sort((a, b) => {
  return b - a;
});

// console.log(sorted);

const users = [
  { name: "Tom", isAdmin: true },
  { name: "Ashish", isAdmin: true },
  { name: "John", isAdmin: false },
];

const admins = users.filter((user) => {
  return user.isAdmin;
});

/*
[
  { name: "Tom", isAdmin: true },
  { name: "Ashish", isAdmin: true },
];
*/

const adminNames = admins.map((admin) => {
  return admin.name;
});

/*
[
  "Tom",
  "Ashish",
];
*/

// console.log(adminNames);

const friends = ["Joey", "Ross", "Rachel", "Chandler", "Phoebe"];

friends.splice(1, 2);

// console.log(friends);

friends.push("Bill");

// console.log(friends);
