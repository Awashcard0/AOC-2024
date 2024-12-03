import * as fs from 'fs';
import { console } from 'inspector';
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');

let list1: Array<number> = [];
let list2: Array<number> = [];

let diffs: Array<number> = [];

for (let line of lines) {
    list1.push(+line.split('   ')[0]);
    list2.push(+line.split('   ')[1])
}

for (let i = 0; i < lines.length; i++) {
    const smallest1 = Math.min(...list1);
    const smallest2 = Math.min(...list2);
    let diff = 0;

    list1.splice(list1.indexOf(smallest1), 1);
    list2.splice(list2.indexOf(smallest2), 1);

    if (smallest1 < smallest2) {
        diff = smallest2 - smallest1;
    } else {
        diff = smallest1 - smallest2;
    }

    diffs.push(diff);
    // console.log(diff);
}

let total = 0;

for (let diff of diffs) {
    total += diff;
}

console.log(total);