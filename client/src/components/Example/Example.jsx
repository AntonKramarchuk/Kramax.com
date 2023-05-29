import React from "react";
import styles from "./Example.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/exampleSlice";
const Example = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.example.value);
  return (
    <div>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increase
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
};

export default Example;
