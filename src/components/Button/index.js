import styles from "./index.module.css";

export const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${styles["reset-button"]}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
