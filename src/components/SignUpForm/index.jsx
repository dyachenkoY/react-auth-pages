import React, { Component } from "react";
import styles from "./SignUpForm.module.scss";
import showPass from "./img/showPass.png";

function signUp(userData) {
  console.log(`${userData.email} ${userData.password} is registered`);
}

const initialState = {
  email: "",
  password: "",
  isRemembered: false,
  isShowed: false,
};

class SignUpForm extends Component {
  state = structuredClone(initialState);

  render() {
    const { email, password, isShowed } = this.state;
    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
        />
        <input
          className={styles.input}
          type={!isShowed ? "password" : "text"}
          name="password"
          value={password}
          placeholder="Password"
        />
        <div className={styles.checkboxContainer}>
          <label className={styles.checkbox}>
            <input type="checkbox" name="isRemembered" /> Remember Me
          </label>
          <a className={styles.link} href="#">
            Forgot Password
          </a>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>
        <a className={styles.googleLink} href="#">
          Sign in with Google
        </a>
      </form>
    );
  }
}

export default SignUpForm;
