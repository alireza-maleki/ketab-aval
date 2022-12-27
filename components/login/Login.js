import React from 'react';
import Link from 'next/link';

import classes from "./Login.module.css";

const Login = () => {

    const userHandler = (e) => {
        console.log(e.target.value)
    }

    const passwordHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className={classes.formdetail}>
            <form>
                <h1>Login</h1>
                <div className={classes.controls}>
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
                    <button>LOGIN</button>
                </div>
                <p className={classes.signup}>
                    <a>Or Sign Up Using</a>
                </p>
                <div className={classes.media}>
                    <div>
                        <img src="/images/facebook.png" />
                    </div>
                    <div>
                        <img src="/images/twitter.png" />
                    </div>
                    <div>
                        <img src="/images/instagram.png" />
                    </div>
                </div>
                <Link href="/register">
                    <div className={classes.getsignup}>
                        <p>SIGN UP</p>
                    </div>
                </Link>
            </form>
        </div>
    )
}

export default Login