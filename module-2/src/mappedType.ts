{
  //ts-node-dev --respawn --transpile-only server.ts
  //2-10: Mapped types
  console.log("2-10: Mapped types");

  const arrOfNumb: number[] = [1, 2, 4, 5, 6];
  const arrOfString: string[] = arrOfNumb.map((n) => n.toString());
  console.log(arrOfString);

  type areaNumb = {
    height: number;
    width: number;
  };

  type areaString = {
    // [key in "height" | "width"]: string;
    // [key in keyof areaNumb]: string;
    [key in keyof areaNumb]: boolean;
  };

  type Area<T> = {
    [key in keyof T]: T[key];
  };

  const area1: Area<{ width: string; height: number }> = {
    width: "200",
    height: 50,
  };
  console.log(area1);
}
