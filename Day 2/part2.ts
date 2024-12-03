import * as fs from 'fs';
import { console } from 'inspector';
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');

let list: Array<Array<number>> = [];

for (const line of lines) {
    const amount = line.split(' ').length;
    let sortedNumbers: Array<number> = [];
    for (let i = 0; i < amount; i++) {
        sortedNumbers.push(+line.split(' ')[i]);
    }

    list.push(sortedNumbers);
}

let total = 0;

function safe(report: number[]): boolean {
    if (isSafe(report)) {
        return true;
    }

    for (let i = 0; i < report.length; i++) {
        const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
        if (isSafe(modifiedReport)) {
            return true;
        }
    }

    return false;
}

function isSafe(report: number[]): boolean {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < report.length; i++) {
        const diff = Math.abs(report[i] - report[i - 1]);
        if (diff < 1 || diff > 3) {
            return false;
        }
        if (report[i] < report[i - 1]) {
            increasing = false;
        }
        if (report[i] > report[i - 1]) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
}

for (const report of list) {
    if (safe(report)) {
        total++;
    }
}

console.log(total);