import Card from "../components/Card";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Services.module.scss";

export default function Services() {
  return (
      <section className={styles.list}>
        <Card
          title="Наращивание"
          imgSrc={`images/services/extension.svg`}
          description={
            <ul>
              <li>коррекция</li>
              <li>донаращивание длины</li>
              <li>исправление клюющих ногтей</li>
              <li>ремонт трещин</li>
              <li>востановление углов</li>
            </ul>
          }
        />
        <Card
          title="Покрытие гель лаком"
          imgSrc={`images/services/coating.svg`}
          description={
            <ul>
              <li>Lusso</li>
              <li>IVA</li>
              <li>Love Nail</li>
              <li>AdriCoco</li>
              <li>и другие</li>
            </ul>
          }
        />
        <Card
          title="Укрепление"
          imgSrc={`images/services/strengthening.svg`}
          description={
            <ul>
              <li>базой</li>
              <li>гелем</li>
              <li>акриловой пудрой</li>
              <li>акригелем</li>
            </ul>
          }
        />
        <Card
          title="Маникюр"
          imgSrc={`images/services/manicure.svg`}
          description={
            <ul>
              <li>комбинированный</li>
              <li>аппаратный</li>
            </ul>
          }
        />
        <Card
          title="Дизайн"
          imgSrc={`images/services/design.svg`}
          description={
            <p>
              френч, лунки, градиент, омбре, инкрустация, стемпинг, слайдеры,
              поталь и другие
            </p>
          }
          /* description={
            <ul>
              <li>френч</li>
              <li>лунки</li>
              <li>градиент</li>
              <li>омбре</li>
              <li>инкрустация</li>
              <li>стемпинг</li>
              <li>слайдеры</li>
              <li>поталь</li>
              <li>и другие</li>
            </ul>
          } */
        />
        <Card
          title="Снятие"
          imgSrc={`images/services/removal.svg`}
          description={
            <ul>
              <li>гель-лака</li>
              <li>нарощенных ногтей</li>
            </ul>
          }
        />
        <style jsx>{`
          ul {
            list-style-type: none;
            text-align: center;
            padding-left: 0;
          }
          p {
            text-align: center;
          }
        `}</style>
      </section>
  );
}
