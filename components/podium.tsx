import type { UserProps } from "../common";
import styles from "../styles/podium.module.css"

export default function Podium({ users }: UserProps) {
  return (
    <div className="row">
      <div className={styles.stepContainer}>
        <div>{users[1].name}</div>
        <div className={`${styles.step} ${styles.two}`}>
          {users[1].rank}
        </div>
      </div>
      <div className={styles.stepContainer}>
        <div>{users[0].name}</div>
        <div className={`${styles.step} ${styles.one}`}>
          {users[0].rank}
        </div>
      </div>
      <div className={styles.stepContainer}>
          <div>{users[2].name}</div>
          <div className={`${styles.step} ${styles.three}`}>
            {users[2].rank}
          </div>
      </div>
    </div>
  )
}