import { Component, Fragment } from "react";
import { PAGESIZE } from "../config";
import type { User } from "../common";
import defaultAv from "../services/defaultAv";
import styles from "../styles/card.module.css";

interface Props {
  user: User;
}

interface State {
  url: string;
}

export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.user = props.user;
    this.state = {
      url: props.user.avatar,
    };
  }

  user: User;

  setImage() {
    this.setState({
      url: defaultAv(this.user.name),
    });
  }

  render() {
    // needs to be rendered clientside to catch images failing to load
    if (process.browser)
      return (
        <Fragment>
          <div className={styles.userLeft}>
            <div className={styles.userRank}>{this.user.rank}</div>
            <img
              className={styles.userIcon}
              src={this.state.url}
              onError={() => this.setImage()}
            />
            <div className={styles.userName}>{this.user.name}</div>
          </div>
          <div className={styles.userLeft}>
            <div className={styles.statBlock}>
              <div className={styles.statName}>XP</div>
              <div className={styles.statValue}>
                {this.user.level_xp} / {this.user.levelup_xp}
              </div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>TOTAL</div>
              <div className={styles.statValue}>{this.user.total_xp}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>LEVEL</div>
              <div className={styles.statValue}>{this.user.level}</div>
            </div>
          </div>
          {this.user.rank % PAGESIZE == 0 ? null : (
            <div className={styles.separator}></div>
          )}
        </Fragment>
      );
    else return null;
  }
}
