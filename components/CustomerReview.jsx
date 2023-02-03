import styles from "../styles/CustomerReview.module.scss";
import { useState } from "react";
import { Rating } from "@mui/material";

const CustomerReview = () => {
  const [value, setValue] = useState(5);
  return (
    <div className={styles.container}>
      <h1 className={` primaryText  ${styles.title}`}>Write a review</h1>
      <span className={`secondaryText ${styles.subHeading}`}>RATING</span>

      <form className={styles.form}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
                  }}
                  className={styles.rating}
        />
        <div className={styles.reviewPart}>
          <span className={`secondaryText ${styles.subHeading}`}>
            REVIEW TITLE
          </span>
          <input
            type="text"
            placeholder="Give your review a title"
            className={styles.reviewInput}
          />
        </div>
        <div className={styles.reviewPart}>
          <span className={`secondaryText ${styles.subHeading}`}>REVIEW</span>
          <textarea
            rows="9"
            type="text"
            placeholder="Write your comments here"
            className={styles.reviewInput}
          />
        </div>
        <div className={styles.reviewPart}>
          <span className={`secondaryText ${styles.subHeading}`}>Name</span>
          <input
            type="text"
            placeholder="Enter your name (public)"
            className={styles.reviewInput}
          />
        </div>
        <div className={styles.reviewPart}>
          <span className={`secondaryText ${styles.subHeading}`}>EMAIL</span>
          <input
            type="text"
            placeholder="Enter your email (private)"
            className={styles.reviewInput}
          />
        </div>
      </form>
    </div>
  );
};

export default CustomerReview;
