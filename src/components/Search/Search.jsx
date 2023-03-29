import React, { useContext, useState } from 'react'
import { SearchContext } from '../../App'
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import clsx from 'clsx'
import SearchIcon from './SearchIcon'

const Search = ({ showSearch, className }) => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 1000),
    []
  )
  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={clsx('search', className)}>
      <SearchIcon />
      {showSearch && (
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.root}
          placeholder="Пошук піци....."
        />
      )}

      <div className={styles.box_clear}>
        {value && (
          <svg
            onClick={onClickClear}
            className={styles.clear}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        )}
      </div>
    </div>
  )
}

export default Search
