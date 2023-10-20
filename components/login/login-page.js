import styles from "./login-page.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginpage}>
      <div className={styles.pleaseLoginTo}>Please Login To Continue</div>
      <div className={styles.userdetails}>
        <div className={styles.usernameinputParent}>
          <input
            className={styles.usernameinput}
            placeholder="User Name or Email"
            type="text"
          />
          <input
            className={styles.passwordinput}
            placeholder="Password"
            type="password"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rememberMeWrapper}>
            <button className={styles.rememberMe}>Remember Me</button>
          </div>
          <div className={styles.forgotPasswordWrapper}>
            <button className={styles.forgotPassword}>Forgot Password?</button>
          </div>
        </div>
      </div>
      <button className={styles.loginbtn}>
        <div className={styles.signIn}>Sign In</div>
      </button>
      <div className={styles.sociallogins}>
        <button className={styles.google}>
          <img className={styles.googleChild} alt="" src="/group-395941.svg" />
          <div className={styles.signIn}>with Google</div>
        </button>
        <button className={styles.google}>
          <div className={styles.facebook1}>facebook</div>
          <button className={styles.withFacebook}>with Facebook</button>
        </button>
        <button className={styles.google}>
          <div className={styles.linkedinIn}>linkedin-in</div>
          <div className={styles.signIn}>with Google</div>
        </button>
        <button className={styles.google}>
          <div className={styles.github1}>github</div>
          <div className={styles.signIn}>with Github</div>
        </button>
        <div className={styles.alreadyHaveAnContainer}>
          <span>{`Already have an account? `}</span>
          <i className={styles.signUp}>Sign Up</i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
