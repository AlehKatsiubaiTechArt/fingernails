import PageLayout from "../components/PageLayout";

export default function Services() {
  return (
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          fontSize: "24px",
        }}
      >
        <div className="image"></div>
        <p>
          Всем привет. Я Вероника и я ваш мастер. Работаю с 2018 года. Выполняю
          наращивание, покрытие с укрепление базой (или гелем), маникюр. Я
          постоянно учусь, совершенствую свой уровень и качество работ, слежу за
          последними тенденциями...
        </p>
        <p>
          В работе использую качественные материалы. Палитра гель-лаков
          насчитывает более 100 цветов!
        </p>
        <p>
          Я работаю во многих техниках: рисую, делаю градиенты, инкрустирую
          ногти стразами и декоративными элементами, и т.д. В арсенале также
          есть большой выбор слайдер-дизайнов. Как правило, я выполняю любой
          каприз клиента.
        </p>
        <p>
          Большое внимание уделяю инструменту. Он проходит все стадии
          дезинфекции и стерилизации. Я забочусь о Вашем здоровье!
        </p>
        <p className="center">
          <i>Я хочу, чтобы идеальные ногти носила каждая женщина.</i>
        </p>
        <style jsx>{`
        .image {
          background-image: url("images/20150708_202217.jpg");
          background-position: right;
          background-size: 500px;
          width: 200px;
          height: 200px;
          margin: auto;
          border-radius: 50%;
          border: 1px solid #947960;
        }
        .center {
          text-align: center;
        }
      `}</style>
      </section>
  );
}
