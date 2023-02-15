import styles from "../../styles/Login.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

import Head from "next/head";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/authSlice";
const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://tesla-lightning.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      const authData = await res.data.data;
      localStorage.setItem("token", authData.refreshToken);
      console.log(authData, "authData");
      dispatch(authLogin({ ...authData.user }));
      router.push("/")
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
      <h1 className={` primaryText ${styles.title}`}>Login</h1>
      <form className={styles.form}>
        <div className={styles.signPart}>
          <span className={`secondaryText ${styles.subHeading}`}>EMAIL</span>

          <input
            type="email"
            placeholder="email"
            className={styles.signInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.signPart}>
          <div className={styles.password}>
            <span className={`secondaryText ${styles.subHeading}`}>
              PASSWORD
            </span>
            <span className={`${styles.subHeading} ${styles.forgot} `}>
              Forgot password?
            </span>
          </div>
          <input
            placeholder="password"
            type="password"
            className={styles.signInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.switchButton} onClick={handleLogin}>
          Login
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
        <span className={styles.text}>Create account</span>
      </form>
    </div>
  );
};

export default Login;
