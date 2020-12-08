import * as fs from 'fs';
import * as path from 'path';

const filepath = path.resolve(__dirname, "in");
const data = fs.readFileSync(filepath).toString().split("\n");

const example = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
]

export function part1() {
  let anwser = 0;
  
  const RIGHT = 3;
  const DOWN = 1;
  const TREE = '#';
  const line_size = data[0].length;

  let c = 0;
  let idx = 0;
  let i = 0;
  
  while (data[i].charAt(idx) !== '') {
    idx = c % line_size;
    if (data[i].charAt(idx) === TREE) anwser += 1;
    i += DOWN;
    c += RIGHT + line_size;
  }
  
  return anwser;
}

export function part2() {
  let anwser = 0;
  
  const TREE = '#';
  const line_size = data[0].length;
  const slopes = [[1,1], [3,1], [5,1], [7,1],[1,2]];


  let anwsers = [];
  for (const slope of slopes) {
    let sum = 0;
    let [RIGHT, DOWN] = slope;
    let c = 0;
    let idx = 0;
    let i = 0;
    
    while (i < data.length) {
      idx = c % line_size;
      if (data[i].charAt(idx) === TREE) sum += 1;
      i += DOWN;
      c += RIGHT + line_size;
    }
    anwsers.push(sum);
  }
   
  return anwsers.reduce((pv, cv) => pv * cv, 1);
}

