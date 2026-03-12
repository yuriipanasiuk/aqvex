import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loader;
