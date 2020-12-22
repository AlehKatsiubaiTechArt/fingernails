import PageLayout from "../components/PageLayout";
import styles from "../styles/Price.module.scss";

export default function Price() {
  return (
      <section className={styles.container}>
        <table className={styles.table}>
          <caption>
            <div>
              *возможно увеличение цены на 1 - 3 р. в зависимости от длины
            </div>
            <div>
              **0.5 р. за ремонт при коррекции, 3 р. за ремонт без последующих
              работ
            </div>
            <div>***цена зависит от количества используемого материала</div>
          </caption>
          <thead>
            <tr>
              <td colSpan="2">
                <h2>Цены</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            <GroupRow name="Наращивание" />
            <PriceRow name="Наращивание + маникюр + покрытие" price="37 р.*" />

            <GroupRow name="Коррекция" />
            <PriceRow
              name="Гелевая коррекция + маникюр + покрытие"
              price="30 р.*"
            />

            <GroupRow name="Покрытие" />
            <PriceRow name="Маникюр + выравнивание + покрытие" price="27 р.*" />

            <GroupRow name="Маникюр" />
            <PriceRow
              name="Комбинированный маникюр(аппарат + ножнички)"
              price="20 р.*"
            />
            <PriceRow
              name="Снятие чужого материала(с дальнейшей работой)"
              price="2 р.*"
            />
            <PriceRow
              name="Снятие любого материала(без дальнейшей работой)"
              price="5 р.*"
            />
            <PriceRow name="Ремонт одного ногтя" price="0,50/3 р.**" />

            <GroupRow name="Дизайн" />
            <PriceRow name="Френч" price="0,50 р./ноготок" />
            <PriceRow name="Лунки" price="0,50 р./ноготок" />
            <PriceRow name="Стемпинг" price="0,50 р./ноготок" />
            <PriceRow
              name="Фольга, блёстки, паутинка, градиент, омбре"
              price="0,50 р./ноготок"
            />
            <PriceRow name="Наклейка" price="0,50 р./ноготок" />
            <PriceRow name="Стразы, бульонки" price="0,50 - 1 р./ноготок***" />
          </tbody>
          <style jsx>{`
            h2 {
              font-size: 36px;
              margin: 0;
            }
            caption {
              font-style: italic;
              caption-side: bottom;
              text-align: left;
              padding: 30px 0;
            }
          `}</style>
        </table>
      </section>
  );
}

function GroupRow({ name }) {
  return (
    <tr>
      <td colSpan="2">
        <h3>{name}</h3>
      </td>
      <style jsx>{`
        h3 {
          margin-bottom: 0;
          font-size: 24px;
        }
      `}</style>
    </tr>
  );
}

function PriceRow({ name, price }) {
  return (
    <tr>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{price}</span>
      </td>
    </tr>
  );
}
