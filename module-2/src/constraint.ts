{
  //2-6: Constraints in typescript

  const addCourseToStd = <T extends { id: number; name: string }>(param: T) => {
    const course = "Next level web developer";
    return {
      ...param,
      course,
    };
  };

  //   const std1 = addCourseToStd<{ name: string; age: number }>({
  const std1 = addCourseToStd<{ id: number; name: string; age: number }>({
    id: 222,
    name: "a",
    age: 33,
  });
  console.log(std1);

  //2-7 Constraint using key of

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Sohel",
    age: 35,
    address: "ctg",
  };
  const result1 = getPropertyValue(user, "age");
  console.log(result1);

  const car = {
    model: "X",
    year: 2022,
  };
  const result2 = getPropertyValue(car, "model");
  console.log(result2);
}
