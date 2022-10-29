import styles from './Cards.module.css'
import Image from 'next/image'
import { Courses } from '../../data/courseData'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { RightArrow } from '../../icons'

interface course {
    id: number,
    name: string,
    pic: string
}


const Cards = () => {
    const [courses, setCourses] = useState<course[]>([])

    useEffect(() => {
        const fetchData = async () => {

            setCourses(Courses)

        }
        fetchData()

    }, [Courses])

    return (
        <div className={styles["card-container"]}>
            <header>

                <h2>Learn development from scrath</h2>
            </header>
            <div className={styles["card-body"]}>


                {
                    courses.map((data, index) => (

                        <motion.div
                            className={styles["card-wrap"]}
                            animate={{ y: -50, opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: index * 0.3
                            }}
                        >
                            <div className={styles.card}>

                                <Image src={data.pic} height={210} width={300} alt="Mern stack" className={styles.imageRound} />
                                <span className={styles["learn-btn"]}>
                                    Learn
                                    <div className = {styles.rightArrow}>

                                    <RightArrow />
                                    </div>
                                </span>
                            </div>
                        </motion.div>

                    ))
                }


            </div>
        </div>
    )
}


// export const getServerSideProps = async () => {

// return {
//     props:{
//         courses,
//     }
// }

// }

export default Cards