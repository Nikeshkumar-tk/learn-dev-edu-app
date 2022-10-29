
import Cards from '../components/Cards/Cards'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Navbar />

      {/* Cards */}
      <Cards />

    </div>
  )
}
