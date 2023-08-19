import React from 'react'
import loginImg from '../../assets/login.png'
import signupImg from '../../assets/signup.png'
import pattern from '../../assets/pattern.png'
import styles from './gallery.module.css'

const Gallery = ({page}) => {
  return (
    <div className={styles.gallery} style={{width:'50%'}}>
        <img src={pattern} className={styles.pattern}  style={{width:'100%'}}/>
        <div className={styles.personImg}>
            {page ==='login' ? <img  src={loginImg} className={styles.person}/> : <img src={signupImg} className={styles.person}/>}
        </div>

    </div>
  )
}

export default Gallery