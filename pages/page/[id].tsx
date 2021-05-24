import type { GetServerSideProps } from "next";
import type { RootProps } from "../../common";

import db from "../../services/sqlite";
import Main from "../../components/main";
import Redirect from "../../components/redirect";

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const page = Number(id);
  if (isNaN(page))
    return {
      props: {
        redirect: true,
      },
    };
  const pages = {
    available: await db.pageAmount(),
    requested: page,
  };
  if (page > pages.available || page <= 0)
    return {
      props: {
        redirect: true,
      },
    };
  return {
    props: {
      pages,
      users: await db.page(page),
    },
  };
};

export default function Page({ users, redirect, pages }: RootProps) {
  if (redirect) return <Redirect path="/" />;

  return <Main users={users} pages={pages} />;
}
