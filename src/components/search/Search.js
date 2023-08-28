import React from 'react'
import {FaSearch} from 'react-icons/fa'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.input}>
        <FaSearch className={styles.searchIcon}/>
        <input type="text" placeholder="search..." />
    </div>
  )
}

export default Search