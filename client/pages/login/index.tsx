import styles from './Login.module.css'
import { motion } from 'framer-motion'

const Login = () => {

 

  return (
    <div className={styles["login-wrap"]}>
      {
        <motion.div 
        animate={{ opacity: 1, y: 10 }}
        initial = {{opacity:0, y:-10}}
          transition={{ duration: 0.5 }}
          className={styles["heading-wrap"]}>
         <h1>Learn Dev</h1>
        </motion.div>
      }
      <form >
        <input type="email" placeholder='Enter You email' />
        <input type="password" placeholder='Enter Your password' />
        <button className={styles.loginBtn}>Login</button>
        <span className={styles.signUpReference}>Don't have an acoount ? Singn up </span>
      </form>
    </div>
  )
}

export default Login