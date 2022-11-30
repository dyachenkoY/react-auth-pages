import React, { Component } from "react";
import styles from "./SignUpForm.module.scss";
import Header from "../Header";


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
      <>
      <Header location={this.props.location} />
      <form className={styles.form} onSubmit={this.submitHandler}>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
        <input
          className={styles.input}
          type="email"
          name="email"
          defaultValue={email}
          placeholder="Email address"
        />
        <input
          className={styles.input}
          type={!isShowed ? "password" : "text"}
          name="password"
          defaultValue={password}
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
      </>
    );
  }
}

export default SignUpForm;
