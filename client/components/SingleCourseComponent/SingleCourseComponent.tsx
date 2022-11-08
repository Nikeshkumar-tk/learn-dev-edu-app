import Image from 'next/image'
import styles from './SingleCourse.module.css'


const SingleCourseComponent = () => {
  return (
    <div className={styles["page-wrap"]}>
      <div className={styles.header}>
        <h2>Start your MERN stack journey today ..</h2>
        <Image src="https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/Blog-Article-MERN-Stack.jpg?alt=media&token=aab78488-a502-4052-88fa-12c7088bdf7d"

         alt = "MERN stack"
         sizes='100vh'
         width={600}
         height = {350}
         className={styles.imageRound}
         />
      </div>
      <div className={styles.blog}>
        <p>
          <h2>What is MERN stack</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quasi sit aspernatur, non consectetur voluptatibus placeat eos ab rerum, iste nihil. Quaerat inventore iste est odit sunt nihil blanditiis nemo?
        </p>
      </div>
    </div>
  )
}

export default SingleCourseComponent