import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"
import { PAGESIZE } from "../config"
import defaultAv from "./defaultAv"
import type { PartialUser, User } from "../common"

const levelFn = (lvl: number) => 5 * Math.pow(lvl, 2) + 50 * lvl + 100

class SQLite {

  constructor(private filepath: string) {
    this.setup()
  }

  private async setup() {
    this.db = await open({
      filename: this.filepath,
      driver: sqlite3.Database
    })
    this.ready = true
    this.listeners.forEach(listener => listener())
  }

  public async page(id: number): Promise<User[]> {
    await this.waitReady()
    const res: PartialUser[] = await this.db.all(
      "SELECT * FROM levels ORDER BY xp DESC LIMIT ?, ?;",
      (id - 1) * PAGESIZE,
      PAGESIZE
    )
    return res
      .sort((a, b) => b.xp - a.xp)
      .filter(user => user.last_known_as != null)
      .map((user, index) => {
        return {
          name: user.last_known_as,
          avatar: user.last_known_avatar_url == null
            ? defaultAv(user.last_known_as)
            : user.last_known_avatar_url,
          level_xp: user.level_xp,
          level: user.level,
          total_xp: user.xp,
          rank: index + 1 + PAGESIZE * (id - 1),
          levelup_xp: levelFn(user.level)
        }
      })
  }

  public async pageAmount() {
    await this.waitReady()
    const amount: number = (await this.db!.get("SELECT COUNT(*) FROM levels;"))["COUNT(*)"]
    return Math.ceil(amount / PAGESIZE)
  }

  private waitReady() {
    return new Promise(resolve => {
      if (this.ready)
        resolve()
      else
        this.onReady(resolve)
    })
  }

  private onReady(callback: Function) {
    this.listeners.push(callback)
  }

  private listeners: Function[] = []
  private ready = false
  private db?: Database<sqlite3.Database, sqlite3.Statement>
}

export default new SQLite(process.env.SQLITE)