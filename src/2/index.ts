import * as fs from 'fs';
import * as path from 'path';

const filepath = path.resolve(__dirname, "in");
const data = fs.readFileSync(filepath).toString().split("\n");

export function part1() {
  let anwser = 0;
  for (const p of data) {
    if (!p) continue;
    const [rule, password] = p.split(": ");
    const [range, letter] = rule.split(" ");
    const [min, max] = range.split("-").map(Number);

    const qtd = password.split("").filter(l => l === letter).length;
    if (qtd >= min && qtd <= max) {
      anwser += 1
    }
  }
  return anwser
}

export function part2() {
  let anwser = 0;
  
  for (const p of data) {
    if (!p) continue;
    const [rule, password] = p.split(": ");
    const [range, letter] = rule.split(" ");
    const [idx1, idx2] = range.split("-").map(Number);

    const pos1 = password.charAt(idx1 - 1) === letter;
    const pos2 = password.charAt(idx2 - 1) === letter;
  
    if (
      (pos1 && !pos2) || 
      (pos2 && !pos1)
    ) {
      anwser += 1
    }
  }
  return anwser

}

