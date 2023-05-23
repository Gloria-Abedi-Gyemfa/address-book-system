import React, {useState} from 'react'
import React, {useState} from 'react'
import AuthLayout from '../components/services/authLayout'
import LoginCard from '../components/forms/login/LoginCard'
import Alert from '../components/alert/Alert'
import Alert from '../components/alert/Alert'

const LoginPage = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const handleAlert = (value)=>{
    setAlert(value)
  }
  return (
    <>
    <AuthLayout>
        <LoginCard />
     </AuthLayout>
    </>
  )
}

export default LoginPage