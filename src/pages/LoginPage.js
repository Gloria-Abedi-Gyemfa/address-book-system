import React, {useState} from 'react'
import AuthLayout from '../components/services/authLayout'
import LoginCard from '../components/forms/login/LoginCard'
import Alert from '../components/alert/Alert'

const LoginPage = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const handleAlert = (value)=>{
    setAlert(value)
  }
  return (
    <>
    {alert.show && <Alert type={alert.type} message={alert.message} />}
    <AuthLayout>
        <LoginCard onAlert={handleAlert}/>
     </AuthLayout>
    </>
  )
}

export default LoginPage