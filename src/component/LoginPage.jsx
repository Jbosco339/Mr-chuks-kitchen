import React from 'react'
import './Login.css'
import facebookImg from '../assets/images/facebook.png';
import googleImg from '../assets/images/google.png';
import hideEye from '../assets/images/hidden.png';
import emailImg from '../assets/images/email.png';
import passLock from '../assets/images/lock.png';
function LoginPage() {
  return (
    <section id='login_section'>
      <div id='loginPage_inner'>
      <div className='backgroundImg_div'>
        <div id='text_hold_div'>
          <h3 className='nigerian_meals_header'>Chuks Kitchen</h3>
          <p >
            Your journey to delicious, authentic <br /> Nigerian meals starts here. Sign up <br /> or log in to order your favorites <br /> today
          </p>
        </div>
      </div>
        <div className='login_div'>
          
          <div id='login_form_holder'>
          <h3 id='chuks_kitchen_login'>Chuks Kitchen</h3>
          <p id='accountLoginHeader'>Login your Account</p>
          <form action="" id='loginForm'>
            <label htmlFor="" className='input_labels'>Email or phone number</label><br />
            <div className='password_wrapper'>
              <img src={emailImg} alt="" id='email_logo'/>
              <input type="email" placeholder='name@gmail.com' className='login_input'/>
            </div>

            <label htmlFor="" className='input_labels'>Password</label><br />
            <div className='password_wrapper'>
              <img src={passLock} alt="" id='passLockImg' />
              <input type="password" placeholder='*********************' className='login_input' />
              <img src={hideEye} alt="" id='hide_eye' />
            </div>
            <p id='forgot_pass'>Forgot Password?</p>

            <button className='continue_button'>Continue</button>
            <p id='continue_with'>or continue with</p>
            <button className='socials_buttonFG'>
              <img src={googleImg} alt="" className='login_social_img'/>
              Continue with Google
              </button>
            <button className='socials_buttonFG'>
              <img src={facebookImg} alt="" className='login_social_img'/>
              Continue with Facebook
              </button>
            <p id='create_account'>Don't have an account? <span id='create_account22'>Create an account</span></p>
          </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default LoginPage