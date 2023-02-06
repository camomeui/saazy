import styles from "./styles.module.scss";

export default function Heading({ main, sub }: { main: string; sub: string }) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.heading__main}>{main}</h2>
      <p className={styles.heading__sub}>{sub}</p>
    </div>
  );
}
