
import { Rating } from "@mui/material";
import Image from "next/image";
import styles from "./../styles/ReviewCard.module.scss";
const ReviewCard = ({title,desc,user,img,itemName}) => {
  return (
    <div className={`yPaddings ${styles.container}`}>
      <Rating name="read-only" value="5" readOnly className={styles.rating} />
      <h3 className={`secondaryText ${styles.title}`}>{title}</h3>
      <span className={`secondaryText ${styles.desc}`}>{desc}</span>
      <span className={`secondaryText ${styles.user}`}>{user}</span>
      <Image src={img} alt={title} width="70" height="70" objectFit="contain" />
      <p>{itemName.substring(0, 42)}...</p>
    </div>
  )
}

export default ReviewCard