import React, { useContext } from 'react'
import { SearchContext } from '../../App'
import styles from './Search.module.scss'

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  return (
    <>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder="Поиск пицы....."
      />
      <div>
        {searchValue ? (
          <svg
            onClick={() => setSearchValue('')}
            className={styles.clear}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Search
