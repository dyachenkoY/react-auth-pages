import React, { Component } from "react";
import Header from "../Header";
import styles from "./RegistrationForm.module.scss";

const initialState = {
  firstName: "",
  lastName: "",
  dispalyName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

class RegistrationForm extends Component {
  state = structuredClone(initialState);
  render() {
    const {
      firstName,
      lastName,
      dispalyName,
      email,
      password,
      passwordConfirm,
    } = this.state;
    return (
      <>
      < Header location={this.props.location}/>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <p className={styles.title}>
          We always keep your name and email address private.
        </p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            defaultValue={firstName}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            type="text"
            name="lastName"
            defaultValue={lastName}
            placeholder="Last Name"
          />
          <input
            className={styles.input}
            type="text"
            name="displayName"
            defaultValue={dispalyName}
            placeholder="Display Name"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            defaultValue={email}
            placeholder="Email Address"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            defaultValue={password}
            placeholder="Password"
          />
          <input
            className={styles.input}
            type="password"
            name="passwordConfirmation"
            defaultValue={passwordConfirm}
            placeholder="Password Confirmation"
          />
          <label className={styles.radioLabel}>
            <input
              className={styles.radioBtn}
              type="radio"
              name="gender"
              defaultValue="female"
              defaultChecked
            />
            Join As a Buyer
            <p className={styles.radioDescr}>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </label>
          <label className={styles.radioLabel}>
            <input
              className={styles.radioBtn}
              type="radio"
              name="gender"
              defaultValue="female"
            />
            Join As a Creative or Marketplace Seller
            <p className={styles.radioDescr}>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </label>
          <label className={styles.checkLabel}>
            <input type="checkbox" name="isRemembered" /> Allow Squadhelp to
            send marketing/promotional offers from time to time
          </label>
          <button className={styles.btn} type="submit">
            Create account
          </button>
          <p className={styles.termsDescr}>
            By clicking this button, you agree to our{" "}
            <a
              className={styles.termsDescr}
              href="https://www.squadhelp.com/Terms&Conditions"
            >
              Terms of Service.
            </a>
          </p>
          <a className={styles.googleLink} href="#">
            Sign in with Google
          </a>
        </form>
      </>
    );
  }
}

export default RegistrationForm;
