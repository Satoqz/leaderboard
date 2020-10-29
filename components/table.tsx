import type { UserProps } from "../common";
import Card from "./card"

export default function Table({ users }: UserProps) {
  const cards = users.map((user, index) => <Card user={user} key={index}/>)
  return (
    <div className="row cards">
      {cards}
    </div>
  )
}