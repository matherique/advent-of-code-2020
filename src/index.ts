const [ex, ..._] = process.argv.slice(2);

if (ex) {
  try {
    const { part1, part2 } = require(`./${ex}`);

    const anwser1 = part1();
    const anwser2 = part2();
    console.log(`Answer 1: ${anwser1}`);
    console.log(`Answer 2: ${anwser2}`);
  } catch (error ) {
    console.log(`day ${ex} not found`);
  }
}

