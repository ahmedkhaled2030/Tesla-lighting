import styles from "../../styles/Login.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

import Head from "next/head";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/authSlice";
import FormInput from "@/components/FormInput";
import Link from "next/link";
const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://tesla-lightning.herokuapp.com/user/register",
        {
          "firstName": values.firstName,
          "lastName":values.lastName,
          "email": values.email,
          "password": values.password,
        }
      );   

      router.push("/login");
    } catch (err) {
      setError(true);
    }
  };
//ahmedKh@15455
  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "",
      errorMessage:
        "firstName should be 3-16 characters and shouldn't include any special character!",
      label: "FIRST NAME",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "",
      errorMessage:
        "lastName should be 3-16 characters and shouldn't include any special character!",
      label: "LAST NAME",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "It should be a valid email address!",
      label: "EMAIL",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "PASSWORD",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
      <h1 className={` primaryText ${styles.title}`}>CREATE ACCOUNT</h1>
      <form className={styles.form}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className={styles.switchButton} onClick={handleSignUp}>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default SignUp;
