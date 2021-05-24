import type { RootProps } from "../common";
import Container from "./container";
import Head from "./head";

export default function Main({ users, pages }: RootProps) {
  return (
    <div>
      <Head />
      <Container users={users} pages={pages} />
    </div>
  );
}
