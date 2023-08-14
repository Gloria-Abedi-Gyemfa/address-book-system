import React from 'react'
import styles from './forms.module.css'

const Gender = ({gender, setGender}) => {
  return (
    <div className={styles.genderWrapper}>
        <label>Gender</label>
        <div className={styles.gender}>
        <div className={styles.genderType}>
              <input  type="radio" value='male' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender' className={styles.genderValue}>Male</label>
            </div>
            <div>
              <input className="border" type="radio" value='female' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender' className={styles.genderValue}>Female</label>
            </div>
        </div>
    </div>
  )
}

export default Gender