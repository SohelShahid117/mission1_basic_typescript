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
}
