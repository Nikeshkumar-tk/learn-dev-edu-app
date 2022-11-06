import styles from './Register.module.css'
import { motion } from 'framer-motion'
import axios from '../../axios/axios'
import { useRef } from 'react'


interface UserData{
    username:string | undefined
    email:string | undefined
    password:string | undefined
}

function Register() {

    const caption = ["L", "e", "a", "r", "n", " ", "D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t"]
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    //Register function

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const userObj:UserData = {
            username: usernameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }

        try {
            const res = await axios.post("/register", userObj)

            console.log(res)
        } catch (error) {

        }


    }

    return (

        <div className={styles["register-wrap"]}>
            <div className={styles["register-inner"]}>
                <div>
                    {
                        caption.map((data, index) => {
                            return (
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: index * 0.2 }}
                                    className={styles.caption}>
                                    {data}

                                </motion.div>
                            )
                        })

                    }
                </div>
                <form onSubmit={(e) => handleRegister(e)}>
                    <input type="text" placeholder='Enter your name' ref={usernameRef} />
                    <input type="email" placeholder='Enter your email' ref={emailRef} />
                    <input type="password" placeholder='Enter your password' ref={passwordRef} />
                    <button className={styles["register-btn"]} type="submit">Register</button>
                </form>
            </div>
        </div>
    )


}
export default Register