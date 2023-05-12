import { useState } from "react";
import React from "react";
import { numbersArray } from "../utils/NumbersArray";
import { notNumbersArray } from "../utils/NotNumbersArray";
export function useCalculator() {
  const [sequence, setSequence] = useState<string[]>(["0"]);

  const control = {
    append(input: string) {
      setSequence([...sequence, input]);
    },
    deleteLastInput() {
      setSequence((prevState) => prevState.slice(0, -1));
    },
    getLast() {
      const lastEle = sequence.at(-1);

      if (lastEle == null) {
        throw new Error("첫 입력으로 연산자를 넣을 수 없습니다.");
      }

      return lastEle;
    },
    appendInput(a: string) {
      const pseudo = [...sequence]; // 마지막 입력이 연산자라면 string의 마지막을 입력된 걸로 바꿔줌
      pseudo[pseudo.length - 1] = a;

      setSequence(pseudo);
    },
    stringConcat(input: string[]) {
      const a = "".concat(...input);
      return Number(a);
      // let value = "";
      // for (var a = 0; a < input.length; a++) {
      //   value.concat(input[a]);
      // }
      // return parseInt(value);
    },
    findsign() {
      const signIndex = (x: string) => notNumbersArray.includes(x);
      const signPoint = sequence.findIndex(signIndex);
      const sign = sequence[signPoint];
      // 연산자의 위치를 찾았고 앞부분을 A 뒷부분을 B
      const pseudo = [...sequence];
      const aArray = pseudo.slice(0, signPoint);
      const bArray = pseudo.slice(signPoint + 1);
      const aNumber = control.stringConcat(aArray);
      const bNumber = control.stringConcat(bArray);
      return { aNumber, bNumber, sign };
    },
    calculate(aNumber: number, bNumber: number, sign: string) {
      if (sign === "-") {
        const res = aNumber - bNumber;
        const pseudo = res.toString();
        const arr = pseudo.split("");
        setSequence(arr);
      } else if (sign === "+") {
        const res = aNumber + bNumber;
        const pseudo = res.toString();
        const arr = pseudo.split("");
        setSequence(arr);
      } else if (sign === "*") {
        const res = aNumber * bNumber;
        const pseudo = res.toString();
        const arr = pseudo.split("");
        setSequence(arr);
      } else if (sign === "/") {
        const res = aNumber / bNumber;
        const pseudo = res.toString();
        const arr = pseudo.split("");
        setSequence(arr);
      }
    },

    math: {
      equal() {
        const { aNumber, bNumber, sign } = control.findsign();
        // 계산 처리만 하면 끝
        control.calculate(aNumber, bNumber, sign);
      },
      plus() {
        const lastInput = control.getLast();
        if (numbersArray.includes(lastInput)) {
          // 마지막 입력이 숫자니?
          control.append("+"); // 그럼 그대로 연산자를 append
        } else {
          control.appendInput("+");
        }
      },
      minus() {
        const lastInput = control.getLast();
        if (numbersArray.includes(lastInput)) {
          // 마지막 입력이 숫자니?
          control.append("-"); // 그럼 그대로 연산자를 append
        } else {
          control.appendInput("-");
        }
      },
      multiple() {
        const lastInput = control.getLast();
        if (numbersArray.includes(lastInput)) {
          // 마지막 입력이 숫자니?
          control.append("*"); // 그럼 그대로 연산자를 append
        } else {
          control.appendInput("*");
        }
      },
      divide() {
        const lastInput = control.getLast();
        if (numbersArray.includes(lastInput)) {
          // 마지막 입력이 숫자니?
          control.append("/"); // 그럼 그대로 연산자를 append
        } else {
          control.appendInput("/");
        }
      },
    },
  };
  return { control, sequence };
}
