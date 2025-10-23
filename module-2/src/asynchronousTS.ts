{
  console.log("hello");
  //2-8: Asynchronous typescript

  const createPromise = (): Promise<string> => {
    //   const createPromise = (): Promise<boolean> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "some data here";
      //   const data: boolean = false;
      try {
        if (data) {
          resolve(data);
        } else {
          reject("no data");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };
  showData();

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();
}
