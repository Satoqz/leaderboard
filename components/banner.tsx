import styles from "../styles/banner.module.css"

export default function Banner() {
  return (
    <div className="row">
      <div className={`col ${styles.guildBanner}`}>
        <img className={styles.guildImg} src="/img/guild.gif" />
        <div className={styles.guildName}>🧅Ceapa Cool</div>
      </div>
    </div>
  )
}