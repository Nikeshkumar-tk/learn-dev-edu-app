import styles from './Login.module.css'
import { motion } from 'framer-motion'
import axios from '../../axios/axios'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginStart, loginSucess, loginFailed } from '../../stateManagement/features/userSlice'
import { useRouter } from 'next/router'



interface UserData {
  email: string | undefined
  password: string | undefined
}

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const router = useRouter()

  //Login function

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginStart())
    const userObj: UserData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }

    try {
      const res = await axios.post("/login", userObj)
      console.log(res)
      dispatch(loginSucess(res.data))
      if (res.data) {
        localStorage.setItem('edu-user', JSON.stringify(res.data))
      }

      res && router.replace("/")

    } catch (error) {
      console.log(error)

      dispatch(loginFailed())

    }

  }


  return (
    <div className={styles["login-wrap"]}>
      {
        <motion.div
          animate={{ opacity: 1, y: 10 }}
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className={styles["heading-wrap"]}>
          <h1>Learn Dev</h1>
        </motion.div>
      }
      <form onSubmit={(e) => handleLogin(e)}>
        <input type="email" placeholder='Enter You email' ref={emailRef} />
        <input type="password" placeholder='Enter Your password' ref={passwordRef} />
        <button className={styles.loginBtn} type="submit">Login</button>
        <span className={styles.signUpReference}>Don't have an acoount ? Singn up </span>
      </form>
    </div>
  )
}

export default Login