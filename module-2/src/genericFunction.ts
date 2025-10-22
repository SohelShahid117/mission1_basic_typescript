{
  //2-5 Function with generics
  console.log("2-5 Function with generics");

  const createArr = (para: string): string[] => {
    return [para];
  };

  const res1 = createArr("hello");
  console.log(res1);

  const createArrWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  interface Usr {
    name: string;
    age: number;
  }

  //   const res2 = createArrWithGeneric<{ name: string; age: number }>({
  const res2 = createArrWithGeneric<Usr>({
    name: "a",
    age: 33,
  });
  console.log(res2);
}
