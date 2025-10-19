let firstName: string = "Sohel";

let roll: number = 44;
let isStudent: boolean = true;
let x: undefined = undefined;

let y: null = null;

let z: number;
// z="123"
z = 123;

let friends: string[] = ["Karim", "Rahim"];
friends.push("Sanjid");

let gpa: number[] = [44, 1.2, 22];

// let ageName: [number, string] = [36, "Sohel", 55, "Samsul"];
let ageName: [number, string] = [36, "Sohel"];
ageName.push(77);
ageName[0] = 21;

let ageNameStd: [number, string, boolean] = [35, "Shahid", true];

const user: {
  name: string;
  age: number;
  expert?: string; //optional
  isMarried: boolean;
  //   company: "JS Enterprise"; //akan ati 1t type hoye gelo--->literal type
  readonly company: string; //readonly dile pore r change kora jabena
} = {
  name: "Shahid",
  age: 35,
  isMarried: true,
  //   company: "JS",
  company: "JS Enterprise",
};
// user.company = "JS";

console.log(user.age);
console.log(firstName, roll, isStudent, x, y);
