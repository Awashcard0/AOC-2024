import * as fs from 'fs';
import { console } from 'inspector';
const input = fs.readFileSync('input.txt', 'utf8');

let total: number = 0;

for (let x = 0; x < input.length; x++) {
    let firstNum: number = 1000; // Set to 1000 because the number can only be 1-3 digits
    let secondNum: number = 1000;

    if (input[x] === '(') {
        if (input[x+2] === ',') {
            firstNum = parseInt(input[x+1]);
            if (input[x+4] === ')') {
                secondNum = parseInt(input[x+3]);
            } else if (input[x+5] === ')') {
                secondNum = parseInt(input[x+3] + input[x+4]);
            } else if (input[x+6] === ')') {
                secondNum = parseInt(input[x+3] + input[x+4] + input[x+5]);
            }
        } else if (input[x+3] === ',') {
            firstNum = parseInt(input[x+1] + input[x+2]);
            if (input[x+5] === ')') {
                secondNum = parseInt(input[x+4]);
            } else if (input[x+6] === ')') {
                secondNum = parseInt(input[x+4] + input[x+5]);
            } else if (input[x+7] === ')') {
                secondNum = parseInt(input[x+4] + input[x+5] + input[x+6]);
            }
        }  else if (input[x+4] === ',') {
            firstNum = parseInt(input[x+1] + input[x+2] + input[x+3]);
            if (input[x+6] === ')') {
                secondNum = parseInt(input[x+5]);
            } else if (input[x+7] === ')') {
                secondNum = parseInt(input[x+5] + input[x+6]);
            } else if (input[x+8] === ')') {
                secondNum = parseInt(input[x+5] + input[x+6] + input[x+7]);
            }
        }

        const past3Letters: string = (input[x-3] + input[x-2] + input[x-1]);
        if (!(past3Letters === "mul")) {
            firstNum = 1000;
            secondNum = 1000;
        }
        
    }

    if (!(firstNum == 1000) && !(secondNum == 1000)) {
        total = total + (firstNum * secondNum);
    }
}

console.log(total);