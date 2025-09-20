import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import classes from "./SignIn.module.css";


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const NavStateData = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();
    const action = e.target.name;
    setError("");

    if (action === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signIn: false });
          navigate(NavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signIn: false });
          setError(err.message);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signUp: false });
          navigate(NavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signUp: false });
          setError(err.message);
        });
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginCard}>
        <div className={classes.loginHeader}>
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        {NavStateData?.state?.msg && (
          <div className={classes.navMsg}>{NavStateData.state.msg}</div>
        )}

        <form className={classes.loginForm}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className={classes.errorMessage}>{error}</div>}

          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.loginBtn}
          >
            {loading.signIn ? <ClipLoader color="#fff" size={18} /> : "Sign In"}
          </button>

          <button
            type="submit"
            name="signUp"
            onClick={authHandler}
            className={classes.registerBtn}
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={18} />
            ) : (
              "Create Your Account"
            )}
          </button>
        </form>

        <div className={classes.divider}>
          <span>or continue with</span>
        </div>

        <div className={classes.socialLogin}>
          <button className={`${classes.socialBtn} ${classes.googleBtn}`}>
            Google
          </button>
          <button className={`${classes.socialBtn} ${classes.appleBtn}`}>
            Apple
          </button>
        </div>

        <div className={classes.signupLink}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
