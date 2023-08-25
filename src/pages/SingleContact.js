import React from 'react'
import {BiChevronLeft, } from 'react-icons/bi'
import {BsTelephone, BsCameraVideo} from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
import styles from './pages.module.css'
import person from '../assets/foto-sushi-6anudmpILw4-unsplash.jpg'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdMailOutline} from 'react-icons/md'
import { useNavigate } from 'react-router'

const SingleContact = () => {
    const navigate = useNavigate()

    const handleBack = () => {
         window.history.back()
    }

  return (
    <div className={styles.body}>
        <div className={styles.singleHeader}>
            <div className={styles.iconContainer} onClick={handleBack}><BiChevronLeft className={styles.icon}/></div>
            <div className={styles.editContainer} onClick={()=>navigate('/edit_contact')}><FaEdit  className={styles.editIcon}/></div>
        </div>
        <div className={styles.contactDetails}>
            <div className={styles.contactImage}>
                {/* AA */}
                <img src={person} alt='contact image'/>
            </div>
            <p className={styles.name}>Kevin Aihoon</p>
            <p className={styles.num}>0258293485</p>
            <div className={styles.contactIcon}>
                <AiOutlineMessage style={{color:'#1275D0'}}/>
                <BsTelephone/>
                <BsCameraVideo style={{color:'red'}}/>
                <MdMailOutline/>
            </div>

            <div></div>
        </div>
    </div>
  )
}

export default SingleContact