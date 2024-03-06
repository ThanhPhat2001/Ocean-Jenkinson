import styles from './fivestar.module.css'
import { FaStar } from "react-icons/fa6";

const FiveStar = () => {
  return (
    <div className={styles.fivestar}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
    </div>
  )
}

export default FiveStar