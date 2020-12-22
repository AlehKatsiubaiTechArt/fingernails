import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function ManicureReservation() {
  return (
      <section className="main">
        <ol className="list">
          <li>
            <Link href="/reservation">Перезвоните мне</Link>
          </li>
          <li>
            <Link href="/reservation">Календарь</Link>
          </li>
          <li>
            <Link href="/reservation">Калькулятор цен</Link>
          </li>
        </ol>
        <style jsx>{`
          .main {
            display: flex;
            justify-content: flex-end;
            max-width: 1200px;
            padding: 20px;
          }
          .list {
            font-size: 36px;
          }
        `}</style>
      </section>
  );
}
