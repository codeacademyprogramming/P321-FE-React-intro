import styles from "./index.module.css";

export const CustomButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.value}
    </button>
  );
};
