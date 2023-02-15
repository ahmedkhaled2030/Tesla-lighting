import styles from "../../styles/SignUp.module.scss";

import Image from "next/image";
import { useState } from "react";
import axios from "axios"; 
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/authSlice";
const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignUp = async (e) => {

    e.preventDefault();
    try {
      const res = await axios.post(
        "https://tesla-lightning.herokuapp.com/user/register",
        { firstName, lastName, email, password }
      );

      router.push("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={` flexCenter paddings ${styles.container}`}>
      <Head>
        <title>product</title>
        <meta name="description" content="Tesla Lighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className={` primaryText ${styles.title}`}>CREATE ACCOUNT</h1>
      <form className={styles.form}>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>
            FIRST NAME
          </span>
          <input type="text" className={styles.signInput}   onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>
            LAST NAME
          </span>
          <input type="text" className={styles.signInput} onChange={(e) => setLastName(e.target.value)}  />
        </div>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>EMAIL</span>
          <input type="text" className={styles.signInput} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>PASSWORD</span>
          <input type="password" className={styles.signInput } onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button className={styles.switchButton} onClick={handleSignUp}>Create</button>
      </form>
    </div>
  );
};

export default SignUp;
