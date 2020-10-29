import type { PaginationProps } from "../common"
import { Component, Fragment } from "react";
import styles from "../styles/pagination.module.css"

type Props = { pages: PaginationProps }

export default class Pagination extends Component<Props, PaginationProps> {

  constructor(props: Props) {
    super(props)
    this.state = props.pages
  }

  move(direction: number) {
    this.goTo(this.state.requested + direction)
  }

  goTo(page: number) {
    window.location.href = `/page/${page}`
  }

  render() {
    return (
      <div className={styles.pagination}>
        {
          this.state.requested == 1
            ? null
            : <Fragment>
                <PageButton onClick={() => this.goTo(1)} name="1" />
                <PageButton onClick={() => this.move(-1)} name="‹" />
              </Fragment>
        }
        <PageButton disabled={true} name={this.state.requested} />
        {
          this.state.requested == this.state.available
            ? null
            : <Fragment>
                      <PageButton onClick={() => this.move(1)} name="›" />
                      <PageButton onClick={() => this.goTo(this.state.available)} name={this.state.available}/>
              </Fragment>
        }
      </div>
    )
  }
}

interface ButtonProps {
  onClick?: Function
  disabled?: boolean
  name: string | number
}

function PageButton({ onClick, name, disabled }: ButtonProps) {
  if (disabled)
    return (
      <button disabled className={styles.button}>{name}</button>
    )
  return (
    <button onClick={() => onClick()} className={styles.button}>{name}</button>
  )
}