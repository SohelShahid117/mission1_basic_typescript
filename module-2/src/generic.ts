{
  //2-3: Introduction to generics

  console.log("hello");
  type GenericArray<param> = Array<param>;

  const rool: number[] = [1, 2, 3, 4];
  const rool2: Array<number> = [11, 21, 13, 14];
  const rool3: GenericArray<number> = [121, 221, 123, 124];
  console.log(rool);
  console.log(rool2);
  console.log(rool3);

  const name: string[] = ["X", "Y", "z"];
  const name2: Array<string> = ["p", "q", "r"];
  const name3: GenericArray<boolean> = [true, false, false, true, false];
  console.log(name, name2);
  console.log(name3);

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "shahid", age: 33 },
    { name: "aadil", age: 3 },
    // { name: "abdullah", age: 13, roll: 45 },
  ];
  console.log(user[0]);

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<{ brand: string; price: number }> = {
    name: "Sohel",
    computer: {
      brand: "HP",
      model: "abc123",
      releaseYear: 2025,
    },
    // smartWatch: "Apple",
    smartWatch: {
      brand: "apple",
      price: 500,
    },
  };
  console.log(poorDeveloper.computer);
  console.log(poorDeveloper.smartWatch);

  type Hpwatch = {
    brand: string;
    price: number;
    model: string;
  };
  const richDeveloper: Developer<Hpwatch> = {
    name: "Shahid",
    computer: {
      brand: "ASUS",
      model: "abc123",
      releaseYear: 2005,
    },
    // smartWatch: "Apple",
    smartWatch: {
      brand: "HP",
      price: 1500,
      model: "abc",
    },
  };
  console.log(richDeveloper.smartWatch);
}
