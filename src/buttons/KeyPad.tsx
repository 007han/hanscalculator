import React, { FunctionComponent } from "react";
import { useState } from "react";

export function KeyPad({ control }: any) {
  const firstRowNumber = [1, 2, 3];
  const secondRowNumber = [4, 5, 6];
  const thirdRowNumber = [7, 8, 9, 0];

  // const FirstRow = firstRowNumber.map((x) => NumButton(x));
  // const SecondRow = secondRowNumber.map((x) => NumButton(x));
  // const ThirdRow = thirdRowNumber.map((x) => NumButton(x));
  const firstRowButton = firstRowNumber.map((x) => (
    <button onClick={() => control.append(x.toString())}>{x}</button>
  ));
  const secondRowButton = secondRowNumber.map((x) => (
    <button onClick={() => control.append(x.toString())}>{x}</button>
  ));
  const thirdRowButton = thirdRowNumber.map((x) => (
    <button onClick={() => control.append(x.toString())}>{x}</button>
  ));
  const deleteButoon = (
    <button onClick={() => control.deleteLastInput()}>C</button>
  );
  const plusButton = <button onClick={() => control.math.plus()}>+</button>;
  const minusButton = <button onClick={() => control.math.minus()}>-</button>;
  const multipleButton = (
    <button onClick={() => control.math.multiple()}>*</button>
  );
  const equalButton = <button onClick={() => control.math.equal()}>=</button>;

  const devideButton = <button onClick={() => control.math.divide()}>/</button>;
  return (
    <>
      <p>{firstRowButton}</p>
      <p>{secondRowButton}</p>
      <p>{thirdRowButton}</p>
      <p>{deleteButoon}</p>
      <p>
        {plusButton}
        {minusButton}
        {multipleButton}
        {devideButton}
        {equalButton}
      </p>
    </>
  );
}
