import { useState } from "react";
import { PAGESIZE } from "../config";
import type { User } from "../common";
import defaultAv from "../services/defaultAv";
import styles from "../styles/card.module.css";

interface Props {
  user: User;
}

export default function Card({ user }: Props) {
  const [avatarURL, setAvatarURL] = useState(user.avatar);

  function fallbackImage() {
    setAvatarURL(defaultAv(user.name));
  }

  // forcing client-side rendering to catch the image loading error event
  if (process.browser)
    return (
      <>
        <div className={styles.userLeft}>
          <div className={styles.userRank}>{user.rank}</div>
          <img
            className={styles.userIcon}
            src={avatarURL}
            onError={() => fallbackImage()}
          />
          <div className={styles.userName}>{user.name}</div>
        </div>
        <div className={styles.userLeft}>
          <div className={styles.statBlock}>
            <div className={styles.statName}>XP</div>
            <div className={styles.statValue}>
              {user.level_xp} / {user.levelup_xp}
            </div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statName}>TOTAL</div>
            <div className={styles.statValue}>{user.total_xp}</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statName}>LEVEL</div>
            <div className={styles.statValue}>{user.level}</div>
          </div>
        </div>
        {user.rank % PAGESIZE == 0 ? null : (
          <div className={styles.separator}></div>
        )}
      </>
    );
  else return null;
}
