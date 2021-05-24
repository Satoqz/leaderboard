import React from "react";
import type { PaginationProps } from "../common";
import styles from "../styles/pagination.module.css";

type Props = { pages: PaginationProps };

function Pagination(props: Props) {
  function move(direction: number) {
    goTo(props.pages.requested + direction);
  }

  function goTo(page: number) {
    window.location.href = `/page/${page}`;
  }

  return (
    <div className={styles.pagination}>
      {props.pages.requested == 1 ? null : (
        <>
          <PageButton onClick={() => goTo(1)} name="1" />
          <PageButton onClick={() => move(-1)} name="‹" />
        </>
      )}
      <PageButton disabled={true} name={props.pages.requested} />
      {props.pages.requested == props.pages.available ? null : (
        <>
          <PageButton onClick={() => move(1)} name="›" />
          <PageButton
            onClick={() => goTo(props.pages.available)}
            name={props.pages.available}
          />
        </>
      )}
    </div>
  );
}

interface ButtonProps {
  onClick?: Function;
  disabled?: boolean;
  name: string | number;
}

function PageButton({ onClick, name, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={styles.button}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Pagination;
