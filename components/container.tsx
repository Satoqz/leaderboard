import type  { RootProps } from "../common"
import Banner from "./banner"
import Pagination from "./pagination"
import Table from "./table"
import Podium from "./podium"
import styles from "../styles/container.module.css"

export default function Container({ users, pages }: RootProps) {
  return (
    <div className={styles.container}>
      <Banner />
      {
        pages.requested == 1
          ? <Podium users={users} />
          : <Pagination pages={pages} />
      }
      <Table users={users} />
      <Pagination pages={pages} />
    </div>
  )
}