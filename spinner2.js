let arraySpinners = '|/-\\|';
let timer = 0;

for (let spinners of arraySpinners) {
  setTimeout(() => {
    process.stdout.write(`\r${spinners}`)
  }, timer += 200);
};