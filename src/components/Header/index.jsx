
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./img/logo.png";

const Header = ({location}) => {

  return (
    <header className={styles.header}>
      <a href="https://www.squadhelp.com/">
        <img className={styles.headerLogo} src={logo} alt="" />
      </a>
      {location.pathname ===  "/signup" ? (
        <Link className={styles.headerBtn} to="/login">
          Login
        </Link>
      ) : (
        <Link className={styles.headerBtn} to="/signup">
          SignUp
        </Link>
      )}
    </header>
  );
};

export default Header;
