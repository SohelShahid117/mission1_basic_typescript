{
  //2-1: Type assertion / type narrowing
  console.log("hello");
  let x: number = 10;
  x = 5;
  console.log(x);
  console.log("enjoy typescript");

  let anything: any;
  anything = "hello sohel";
  // anything.
  let upper = (anything as string).toUpperCase();
  console.log(anything);
  console.log(upper);

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      let convertedVal = parseFloat(value) * 1000;
      return `string to number val is ${convertedVal}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(5) as number;
  const result2 = kgToGm("5") as number;
  console.log(result1);
  console.log(result2);

  //2-2: Interface, type vs interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll = User1 & { rool: number };

  const user1: UserWithRoll = {
    // const user1: User1 = {
    name: "shahid",
    age: 35,
    // rool: "117",
    rool: 117,
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    rool: number;
  }

  // const user2: User2 = {
  const user2: UserWithRoll2 = {
    name: "sohel",
    age: 33,
    rool: 118,
  };

  console.log(user1);
  console.log(user2);

  type Roll = number[];

  const roolNumber: Roll = [4, 5, 7, 9];
  console.log(roolNumber);

  interface Name {
    [index: number]: string;
    // [index: string]: number;
  }
  const nickName: Name = ["sohel", "shahid"];
  console.log(nickName);

  type Sum = (n1: number, n2: number) => number;
  interface Sum2 {
    (n1: number, n2: number): number;
  }
  // const sum: Sum = (n1: number, n2: number) => n1 + n2;
  const sum: Sum2 = (n1: number, n2: number) => n1 + n2;
  console.log(sum(4, 99));
}
