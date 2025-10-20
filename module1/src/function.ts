{
  function add(num1: number, num2: number = 50): number {
    return num1 + num2;
  }
  add(4, 55);

  const sum = (n1: number, n2: number): number => n1 + n2;

  const poorUser = {
    name: "Shahid",
    balance: 0,
    addBalance(bal: number) {
      return `amar balanace holo: ${this.balance + bal}`;
    },
  };
  console.log(poorUser.addBalance(55));

  const arr: number[] = [4, 6, 1];
  const newArr: number[] = arr.map((n: number): number => n * n);
  console.log(arr);
  console.log(newArr);
}
