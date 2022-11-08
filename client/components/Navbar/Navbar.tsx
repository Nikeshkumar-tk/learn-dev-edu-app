import { useEffect, useState } from 'react'
import { User } from '../../icons'
import styles from './Navbar.module.css'
import { useAppSelector } from '../../stateManagement/configs/typeExports'
import { Router, useRouter } from 'next/router'

interface User {
    message: string
    username: string
    email: string
    acessToken: string
}

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    var user: User | any
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    

    user = useAppSelector(store => store.user.user)
    useEffect(() => {
        !user && router.replace('/login')
        setHydrated(true)
    })
    if (!hydrated) {
        return null
    }


    return (
        <div className={styles["nav-wrap"]}>

            <div className={styles.container}>

                <h3 className={styles.logo}>Learn Dev</h3>
                <ul className={styles["nav-ul"]}>
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Roadmaps</li>
                    <li>Cheatsheets</li>
                </ul>
                <div className={styles["right-wrap"]}>
                    <div className={styles.icon}>

                        <User />
                    </div>

                    <h5 className={styles["user-name"]}>{user.username}</h5>

                    <div
                        className={`${styles["handburger-wrap"]} ${mobileMenu ? styles.active : ""}`}
                        onClick={() => { setMobileMenu(p => !p) }}

                    >
                        <div className={`${styles.bar} ${styles["bar-1"]}`}></div>
                        <div className={`${styles.bar} ${styles["bar-2"]}`}></div>
                        <div className={`${styles.bar} ${styles["bar-3"]}`}></div>
                    </div>
                </div>

            </div>
            <span className={`${styles["mobile-wrap"]} ${mobileMenu ? styles["show-mobile"] : ""}`}></span>
        </div>
    )
}

export default Navbar