import styles from "../styles/Home.module.scss";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
      <section className={styles.main}>
        <h2>
          <Link href="/reservation">Запись на маникюр</Link>
        </h2>
        <h2>Запись на вебинар</h2>
      </section>
  );
}
