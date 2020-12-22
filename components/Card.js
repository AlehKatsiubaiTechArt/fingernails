import styles from "../styles/Card.module.scss";

export default function Card({ title, imgSrc, description }) {
  return (
    <div className={styles.card}>
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className={styles.image}
      ></div>
      <div className={styles.title}>{title}</div>
      <hr className={styles.line} />
      <div className={styles.description}>{description}</div>
    </div>
  );
}
