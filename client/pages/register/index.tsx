import styles from './Register.module.css'
import { motion } from 'framer-motion'

function Register() {

    const caption = ["L", "e", "a", "r", "n", " ", "D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t"]

    return (

        <div className={styles["register-wrap"]}>
            <div className={styles["register-inner"]}>
                <div>
                    {
                        caption.map((data, index) => {
                            return (
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial = {{opacity:0}}
                                    transition = {{duration:index * 0.2}}
                                    className={styles.caption}>
                                    {data}

                                </motion.div>
                            )
                        })

                    }
                </div>
                <form >
                    <input type="text" placeholder='Enter your name' />
                    <input type="email" placeholder='Enter your email' />
                    <input type="password" placeholder='Enter your password' />
                    <button className={styles["register-btn"]}>Register</button>
                </form>
            </div>
        </div>
    )


}
export default Register