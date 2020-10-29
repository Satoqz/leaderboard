import type { GetServerSideProps } from "next"
import type { RootProps } from "../common"
import db from "../services/sqlite"
import Main from "../components/main"

export const getServerSideProps: GetServerSideProps<RootProps> = async () => {
  return {
    props: {
      users: await db.page(1),
      pages: {
        requested: 1,
        available: await db.pageAmount()
      }
    }
  }
}

export default function Home({ users, pages }: RootProps) {
  return <Main users={users} pages={pages} />
}