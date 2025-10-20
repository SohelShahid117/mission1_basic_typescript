{
  type Std = {
    name: string;
    age: number;
    cont: string;
    address: string;
    gender?: string;
  };
  const student1: Std = {
    name: "Shahid",
    age: 22,
    cont: "018230000",
    address: "ctg",
  };

  const student2: Std = {
    name: "Sohel",
    age: 25,
    cont: "018231230",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Sohel Shahid";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  type Developer = "FrontendDeveloper" | "BackendDeveloper";
  //   const developer: Developer = "aaa";
  const developer: Developer = "BackendDeveloper";

  type FullDeveloper = "fakibaz" | "expert";

  type FullstackDeveloper = Developer | FullDeveloper;

  type FrontDeveloper = {
    skills: string[];
    designation1: "front dev";
  };
  type BackDeveloper = {
    skills: string[];
    designation2: "back dev";
  };

  type FullDev = FrontDeveloper & BackDeveloper;
  const fullDevlpr: FullDev = {
    skills: ["java", "js", "TS"],
    designation1: "front dev",
    designation2: "back dev",
  };
  console.log(fullDevlpr);

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "0+" | "O-" | "B+" | "B-";
  };

  const user1: User = {
    name: "shahid",
    email: "sha@g.com",
    gender: "male",
    bloodGroup: "0+",
  };
}
