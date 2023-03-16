import styles from "../styles/CustomerReview.module.scss";
import { useEffect, useState } from "react";
import { Alert, Rating, Snackbar } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
const CustomerReview = ({ id, toggleShow }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => {
    console.log("checked");
    //console.log(newState, "newState");
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState(5);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const addReview = async (e) => {
    e.preventDefault();
    console.log(value, "value");
    console.log(title, "title");
    console.log(text, "text");
    try {
      const res = await axios.post(
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
      const data = await res;
      console.log(data, "data");
      setText("");
      setTitle("");
      setValue(5);
      handleClick({
        vertical: "top",
        horizontal: "left",
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Rating added successfully and under review
        </Alert>
      </Snackbar>
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
            value={title}
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
            value={text}
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
        <button onClick={toggleShow} className={styles.switchButton}>
          Cancel review
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
