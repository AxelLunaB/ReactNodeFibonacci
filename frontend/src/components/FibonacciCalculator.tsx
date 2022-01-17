import React, { useState, useEffect } from "react";
import * as styles from "./FibonacciCalculator.styles";
import { actions } from "./slice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const FibonacciCalculator = () => {
  const [error, setErrorData] = useState<string>();
  const loading = useAppSelector((state) => state.fibonacci.isLoading);
  const fibResult = useAppSelector((state) => state.fibonacci.result);
  const fibNumber = useAppSelector((state) => state.fibonacci.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    requestFibonacci();
  }, []);

  const requestFibonacci = () => {
    dispatch(actions.setLoadingValue(true));

    fetch(`/api/fibonacci/${fibNumber}`)
      .then((res) => res.json())
      .then(
        (res) => {
          dispatch(actions.setResult(res.fibonacciResult));
          dispatch(actions.setLoadingValue(false));
        },
        (error) => {
          console.log(error);

          setErrorData(error);
        }
      );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actions.setValue(fibNumber));
    requestFibonacci();
  };

  const handleChange = (e: { target: HTMLInputElement }) => {
    setErrorData(null);
    dispatch(actions.setValue(e.target.value));
  };

  const truncateFibLength = () => {
    let check = fibResult.toString();
    //see browser console to see full number when the number is too long
    console.log(check);
    return check.length > 15 ? `${check.substring(0, 15)}...` : check;
  };

  return (
    <div style={styles.boxDiv}>
      <h1>Calculate Fibonacci!</h1>
      <form style={styles.cardForm} onSubmit={handleSubmit}>
        <input
          style={styles.fibInput}
          type="text"
          value={fibNumber}
          pattern="[0-9]*"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={handleChange}
          alt="inputFibonacci"
        />
        <input style={styles.fibButton} type="submit" value="Calculate" />
      </form>
      <div style={styles.fibResult}>
        <div data-testid="fibonacciStatusText">
          {error == null
            ? loading
              ? `loading...`
              : `Fibonnaci Result: ${truncateFibLength()}`
            : `ERROR: positive whole numbers only`}
        </div>
      </div>
    </div>
  );
};
