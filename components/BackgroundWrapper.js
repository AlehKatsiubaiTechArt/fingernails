import styles from '../styles/BackgroundWrapper.module.scss'

export default function BackgroundWrapper({ background, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>{background}</div>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
