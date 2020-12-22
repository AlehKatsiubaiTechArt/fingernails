import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { useRouter } from "next/router";

export default React.memo(function Header() {
  return (
    <nav className={styles.navigation}>
      <ActiveLink activeClassName="active" href="/">
        <a>Главная</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/services">
        <a>Услуги</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/price">
        <a>Цены</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/gallery">
        <a>Мои работы</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/about">
        <a>Обо мне</a>
      </ActiveLink>
      <style jsx>{`
        .active {
          text-decoration: underline #947960;
        }
      `}</style>
    </nav>
  );
});

function ActiveLink({ href, children, activeClassName = "selected" }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
