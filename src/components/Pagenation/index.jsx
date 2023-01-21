import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagenation.module.scss'
const Pagenation = ({ onChagePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChagePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={4}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagenation
