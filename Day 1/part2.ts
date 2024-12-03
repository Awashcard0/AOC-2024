import * as fs from 'fs';
import { console } from 'inspector';
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');

let list1: Array<number> = [];
let list2: Array<number> = [];

let outputs: Array<number> = [];

for (let line of lines) {
    list1.push(+line.split('   ')[0]);
    list2.push(+line.split('   ')[1])
}

for (let i = 0; i < lines.length; i++) {
    const number = list2.filter(x => x==list1[0]).length

    let out = list1[0] * number;

    list1.splice(list1.indexOf(list1[0]), 1);

    outputs.push(out);
}

let total = 0;

for (let output of outputs) {
    total += output;
}

console.log(total);