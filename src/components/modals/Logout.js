import React from 'react'
import Button from '../buttons/Button'
import styles from './modal.module.css'

const Logout = ({setShowModal}) => {

  return (
    <div>
        <div className={styles.logoutCard}>
            <p>Are you sure, you want to logout</p>
            <div className={styles.logoutBtns}>
            <Button text='Yes, Logout' variant='danger' size='medium'/>
            <Button text='No' variant='tertiary' size='medium' setShowModal={setShowModal}/>
            </div>
            
        </div>
    </div>
  )
}

export default Logout