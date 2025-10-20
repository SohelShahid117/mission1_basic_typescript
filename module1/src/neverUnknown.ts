{
  console.log("hi never");
  //1-12 Never,unknown and nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("search name");
    } else {
      console.log("there is nothing to search");
    }
  };
  searchName("shahid");
  searchName(null);

  const getSpdInMtrPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const spd = (value * 1000) / 3600;
      console.log(`converted spd ${value} kmph = ${spd.toFixed(3)} mps`);
    } else if (typeof value === "string") {
      //   const valInNumb = value.split(" ");
      const [valInNumb, unit] = value.split(" ");
      //   const speed = Number(valInNumb);
      const speed2 = parseFloat(valInNumb);
      console.log(speed2);
      console.log(typeof speed2);
      const result = (speed2 * 1000) / 3600;
      console.log(`converted spd ${speed2} kmph = ${result.toFixed(3)} mps`);
    } else {
      console.log("wrong input");
    }
  };
  getSpdInMtrPerSec(60);
  getSpdInMtrPerSec("70 kmph");
  getSpdInMtrPerSec(null);

  const throwErr = (msg: string): never => {
    throw new Error(msg);
  };
  //   console.log(throwErr("k"));
  throwErr("onek boro err");
}
