import React, { useState } from 'react';
import Link from 'next/link';

import AlertMui from '../alert/AlertMui';

import classes from "./Register.module.css";

const Register = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPasswrod, setUserPasswrod] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [ErrorName, setErrorName] = useState("");
    const [ErrorPasswrod, setErrorPasswrod] = useState("");


    const userHandler = (e) => {
        console.log(e.target.value)
        setUserEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        console.log(e.target.value)
        setUserName(e.target.value)
    }

    const emailHandler = (e) => {
        console.log(e.target.value)
        setUserPasswrod(e.target.value)
    }


    const formHandler = (e) => {
        e.preventDefault();

        if (userEmail.trim() === '' || !userEmail.includes("@")) {
            setErrorEmail("Invalid.")
        }

        if (userName.trim() === '') {
            // setErrorName("Invalid password")
            setErrorEmail("Invalid.")
        }

        if (userPasswrod.trim() === '' || userPasswrod.length <= 7) {
            // setErrorPasswrod("Passwrod must be more 7 character.")
            setErrorEmail("Invalid.")
        }



        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: userEmail,
                username: userName,
                password: userPasswrod,
                // expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then(console.log);

    }

    setInterval(() => {
        
        const errorClear = setErrorEmail("");

        return
        () => clearInterval(errorClear)
    }
        , 5000);


    return (
        <div className={classes.formdetail}>
            {errorEmail && <AlertMui />}
            <form onSubmit={formHandler}>
                <h1>Register</h1>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label>Email</label>
                        <input onChange={(e) => emailHandler(e)} type="text" placeholder="Type your Email" />
                    </div>
                    <div className={classes.control}>
                        <label>Username</label>
                        <input onChange={(e) => userHandler(e)} type="text" placeholder="Type your username" />
                    </div>
                    <div className={classes.control}>
                        <label>Password</label>
                        <input onChange={(e) => passwordHandler(e)} type="password" placeholder="Type your password" />
                    </div>
                </div>
                <p className={classes.forgot}>
                    <a>Forgot Password?</a>
                </p>
                <div className={classes.action}>
                    <button>SUBMIT</button>
                </div>
                <Link href="/login">
                    <div className={classes.signup}>
                        <p>SIGN IN</p>
                    </div>
                </Link>
            </form>
        </div>
    )
}

export default Register