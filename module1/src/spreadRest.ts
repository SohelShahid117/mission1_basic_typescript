{
  const poorUser = {
    name: "Shahid",
  };

  const bros1: string[] = ["Karim", "Rahim"];
  const bros2: string[] = ["Sujan", "Saju"];

  const bros3: string[] = [];
  bros3.push(...bros1, ...bros2);

  bros2.push(...bros3);

  console.log(bros1, bros2, bros3);

  const mentors1 = {
    TS: "Sohel",
    Redux: "Shahid",
    dbms: "Islam",
  };

  const mentors2 = {
    prisma: "SS",
    nextJS: "Sohel Shahid",
    cloud: "Shahidul Islam Sohel",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const myFriends = (...frnds: string[]) => {
    // return `hello ${frnds}`;
    // frnds.forEach((f: string): string => `hello ${f}`);
    frnds.forEach((f: string) => console.log(`hello ${f}`));
  };

  //   console.log(myFriends("Abul", "babul", "Kabul"));
  myFriends("Abul", "babul", "Kabul");
  const { cloud } = mentorList; //destructuring
  console.log(cloud);

  const stdDetails: {
    id: number;
    name: {
      firstName: string;
      lastName: string;
    };
    cont: string;
    address: string;
  } = {
    id: 123,
    name: {
      firstName: "Shahid",
      lastName: "Sohel",
    },
    cont: "0182345789",
    address: "BD",
  };

  //object destructuring
  const {
    id,
    name: { firstName: dakNam }, //name alias
  } = stdDetails;
  console.log(id, dakNam);

  //array destructuring

  const amarBondhura = ["katrina", "karina", "rani", "ayesha", "mousomi"];
  const [, , bandhobi, ...restMal] = amarBondhura;
  console.log(bandhobi);
  console.log(restMal);
}
