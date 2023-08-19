import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
import {TbDotsVertical} from 'react-icons/tb'
import styles from './navbar.module.css'
import {useNavigate} from 'react-router'

const InformedBar = ({text}) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

  return (
    <div className={styles.informedBar}>
        <div className={styles.about}>
        <MdClose onClick={()=>navigate('/')} className={styles.close}/>
        <p className={styles.aboutPage}>{text}</p>
        </div>
        <TbDotsVertical onClick={()=>setShow(!show)}/>
        {show && 
            <div className={styles.settings}>
                <ul >
                    <li className={styles.list}>Cancel</li>
                </ul>
            </div>
        }
    </div>
  )
}

export default InformedBar