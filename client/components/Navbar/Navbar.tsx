import { useState } from 'react'
import { User } from '../../icons'
import styles from './Navbar.module.css'



const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

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