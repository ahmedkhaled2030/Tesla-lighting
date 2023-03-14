import styles from "../../styles/Login.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/authSlice";
import FormInput from "@/components/FormInput";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",

    password: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://18.214.112.247:4000/user/login",
        values
      );
      const authData = await res.data.data;

      setCookie("token", authData.refreshToken, { path: "/" });
      ////console.log(authData, "authData");
      dispatch(authLogin({ ...authData.user }));
      router.push("/");
    } catch (err) {
      setError(true);
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "EMAIL",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "PASSWORD",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ]; 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
        {/* <div className={styles.signPart}>
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
        </div> */}

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className={styles.switchButton} onClick={handleLogin}>
          Login
        </button>
        <Link href={`/signup`} passHref className="link">
          <span className={styles.text}>Create account ?</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
