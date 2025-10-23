{
  console.log("2-9: Conditional types");
  //2-9:

  /*1t type r 1t tpe er upor depend korle setike bolbe Conditional types */

  //   type a1 = null;
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Gari = {
    bike: string;
    car: string;
    ship: string;
  };

  // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Gari ? true : false;

  type HasCar = CheckVehicle<"car">;
  type HasTractor = CheckVehicle<"tractor">;
}
