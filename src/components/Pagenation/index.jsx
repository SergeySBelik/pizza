import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagenation.module.scss'
const Pagenation = ({ currentPage, onChagePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChagePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  )
}

export default Pagenation
