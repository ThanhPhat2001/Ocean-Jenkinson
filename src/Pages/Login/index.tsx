import React, { useState } from 'react';
import styles from './login.module.css'; // Import your CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported

import { FaEnvelope, FaFacebook, FaGoogle, FaHouse, FaLock, FaRegUser, FaTwitter,FaPhone } from 'react-icons/fa6';



const Login = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [phoneValue, setPhoneValue] = useState('');

  const switchToLogin = () => {
    const x = document.getElementById("login");
    if (x !== null) {
      x.style.left = "4px";
      setLoginVisible(true);
    }
  };

  const switchToRegister = () => {
    const y = document.getElementById("register");
    if (y !== null) {
      y.style.right = "5px";
      setLoginVisible(false);
    }
  };

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    setPhoneValue(numericValue);
  };

  const login = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const a = document.getElementById("loginBtn");
    const b = document.getElementById("registerBtn");

    if (x && y && a && b) {
      x.style.left = "4px";
      y.style.right = "-520px";
    
      x.style.opacity = '1';
      y.style.opacity = '0';
    }
  };

  const register = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const a = document.getElementById("loginBtn");
    const b = document.getElementById("registerBtn");

    if (x && y && a && b) {
      x.style.left = "-510px";
      y.style.right = "5px";
     
      x.style.opacity = '0';
      y.style.opacity = '1';
    }
  };


  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.nav_menu} id="navMenu"></div>
        <div >
          <button id="loginBtn" onClick={switchToLogin}>

          </button>
          <button  id="registerBtn" onClick={switchToRegister}>

          </button>
        </div>
      </nav>

      <div className={styles.form_box}>
        <div className={`${styles.login_container} ${loginVisible ? '' : styles.hidden}`} id="login">
          <header>Login</header>
          <div className={styles.input_box}>
            <input
              type="text"
              className={styles.input_field}
              placeholder="Username or Email"
            />
            <FaRegUser className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="password"
              className={styles.input_field}
              placeholder="Password"
            />
            <FaLock  className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="submit"
              className={styles.submit}
              value="Sign In"
            />
          </div>
          <div className={styles.two_col}>
            <div className={styles.one}>
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className={styles.two}>
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
          <div className={styles.top}>
            <span>Don't have an account?<a href="#" onClick={register}>Sign Up</a></span>
            <span >Or Sign Up with
              <div className={`${styles.Icon_Singup} `}>
                <FaFacebook style={{ marginRight: '10px' }} />
                <FaGoogle style={{ marginRight: '10px' }} />
                <FaTwitter />
              </div>
            </span>
          </div>
        </div>



        <div className={`${styles.register_container} ${loginVisible ? styles.hidden : ''}`} id="register">
          <header>Sign Up</header>
          <div className={styles.two_forms}>
            <div className={styles.input_box}>
              <input
                type="text"
                className={styles.input_field}
                placeholder="FirstName"
              />
              <FaRegUser className={styles.i}/>
            </div>
            <div className={styles.input_box}>
              <input
                type="text"
                className={styles.input_field}
                placeholder="LastName"
              />
             <FaRegUser className={styles.i}/>
            </div>
          </div>
          <div className={styles.input_box}>
            <input
              type="text"
              className={styles.input_field}
              placeholder="Email"
            />
            <FaEnvelope  className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="tel"
              className={styles.input_field}
              placeholder="Phone Number"
              id="phone-input"
              value={phoneValue}
              onChange={handlePhoneInputChange}
            />
          <FaPhone  className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="text"
              className={styles.input_field}
              placeholder="Address"
            />
            <FaHouse className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="password"
              className={styles.input_field}
              placeholder="Password"
            />
             <FaLock  className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="password"
              className={styles.input_field}
              placeholder="Confirm Password"
            />
            <FaLock  className={styles.i}/>
          </div>
          <div className={styles.input_box}>
            <input
              type="submit"
              className={styles.submit}
              value="Register"
            />
          </div>
          <div className={styles.two_col}>
            <div className={styles.one}>
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className={styles.two}>
              <label><a href="#">Terms & conditions</a></label>
            </div>
          </div>
          <div className={styles.top}>
            <span>Have an account? <a href="#" onClick={login}>Login</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
