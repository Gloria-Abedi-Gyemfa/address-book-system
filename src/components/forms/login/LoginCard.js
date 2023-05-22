import React, {useState} from 'react'
import Card from '../../card/Card'
import LoginForm from './LoginForm'
// import Alert from '../../alert/Alert'
import Api from '../../services/api'
import  {useNavigate } from 'react-router-dom'

const LoginCard = ({onAlert}) => {
    const [loader, setLoader] = useState(false)
    const [childAlert, setChildAlert] = useState({ show: false, message: '', type: '' })
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData(e.target)
          try {
            let response = await Api.post('/login', Object.fromEntries(data.entries()))
            if (response.data.success) {
              setChildAlert=(prev)=>({
                ...prev,
                show: true,
                message: response.data.message,
                type: 'success',
              })
              onAlert(childAlert)
              setTimeout(() => {
                setChildAlert=(prev)=>({...prev,  show: false })
                onAlert(childAlert)
              }, 4000)
            }
            navigate('/dashboard')
          } catch (error) {
            setLoader(true)
            setChildAlert=(prev)=>({
              ...prev,
              show: true,
              message: JSON.stringify(error.response.data.message),
              type: 'error',
            })
            onAlert(childAlert)
            setTimeout(() => {
              setChildAlert=(prev)=>({...prev, show: false })
              setLoader(false)
            }, 4000)
            navigate('/')
          }
        
      }

  return (
    <>
     <Card title='Login'>
         <LoginForm handleSubmit={handleSubmit} loader={loader}/>
         {/* {alert.show && <Alert type={alert.type} message={alert.message} />} */}
     </Card>
    </>
    
  )
}

export default LoginCard