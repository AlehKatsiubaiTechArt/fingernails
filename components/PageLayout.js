import Particles from "react-tsparticles";
import styles from "../styles/PageLayout.module.scss";
import particles from "../particles";
import Social from "./Social";
import Header from "./Header";
import Head from "next/head";
import { animated, useTransition } from "react-spring";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Footer = React.memo(function () {
  return (
    <>
      <div className={styles.grass}></div>
      <footer className={styles.footer}>
        <h3>Вероника</h3>
        <h3>
          <a href="tel:+375259058835">+375259058835</a>
        </h3>
        <Social />
      </footer>
    </>
  );
});

export default function PageLayout({ children, backgroundImage, title = "" }) {
  const router = useRouter();

  const transitions = useTransition(router, (router) => router.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      position: "absolute",
      transform: "translate3d(-50%,0,0)",
    },
  });
  useEffect(() => {
    console.log('render');
  }, []);
  return (
    <div className={styles.parallax}>
      <Head>
        <title>{title}</title>
      </Head>
      <Particles className={styles.particles} params={particles} />
      <div className={styles.page}>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className={styles.background}
        >
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.content}>
            {transitions.map(({ item, props, key }) => {
              console.log(item);
              const components = router.components;
              
              if (components) {
                const component = components[item.pathname];
                return (
                  <animated.div key={key} style={props}>
                    <component.Component {...component.props} />
                  </animated.div>
                );
              } else {
                return (
                  <animated.div key={key} style={props}>
                    {children}
                  </animated.div>
                );
              };
            })}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
