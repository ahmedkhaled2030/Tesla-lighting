import styles from "../styles/CustomerReview.module.scss";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";     
const CustomerReview = ({ id }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);  
  console.log(id, "id");
  const [value, setValue] = useState(5);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addReview = async(e) => { 
    e.preventDefault();
    console.log(value, "value");
    console.log(title, "title");
    console.log(text, "text");
    try { 
      const res =await axios.post(
        `${process.env.NEXT_PUBLIC_GAID}/product/${id}/review`,
        {
          text: text,
          rating: value,
          title: title,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await res 
      console.log(data ,"data")
    } catch (err) {      
     console.log(err);
    }
  };
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.reviewPart}>
          <span className={`secondaryText ${styles.subHeading}`}>REVIEW</span>
          <textarea
            rows="9"
            type="text"
            placeholder="Write your comments here"
            className={styles.reviewInput}
            onChange={(e) => setText(e.target.value)}
          />
        </div>


      </form>
      <div className={styles.reviewButtons}> 
          <button className={styles.switchButton} onClick={addReview}>
            Submit Review
          </button>
          <button
            onClick={() => setShow(false)}
            className={styles.switchButton}
          >
            Cancel review
          </button>
        </div>
    </div>
  );
};

export default CustomerReview;
