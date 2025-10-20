{
  console.log("hello");
  const age: number = 15;
  if (age > 18) {
    console.log("adult");
  } else {
    console.log("child");
  }

  const isAdult = age >= 18 ? console.log("adult") : console.log("child");

  const isAuthenticated = null;
  const result = isAuthenticated ?? "Guest";
  console.log(result);

  //   const x = 5;
  const x = 0;
  const result2 = x ?? 55;
  console.log(result2);

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permaAddress?: string;
    };
  };

  const user: User = {
    name: "ssss",
    address: {
      city: "ctg",
      road: "khtin",
      presentAddress: "bahaddarhat",
    },
  };

  const permannetadd = user?.address?.permaAddress ?? "no permanent address";
  console.log(permannetadd);
}
