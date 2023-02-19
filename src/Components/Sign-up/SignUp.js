import React, { useState } from 'react'
import style from './signUp.module.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function SignUp() {

  const validname = /^[A-Za-z]+$/;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',

  })

  const { userName, email, phone, password, confirmPassword } = formData
  const [formError, setFormError] = useState({})

  const onChangeHandler = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)

  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    let err = {}

    if (formData.userName === '') {
      err.userName = 'Your Name is required';
    } else if (!validname.test(userName)) {
      err.userName = 'Your Name must be only string without spaces';
    }
    if (formData.email === '') {
      err.email = "Email is required";
    } else if (!validEmail.test(email)) {
      err.email = "Invalid Email";
    }
    if (formData.password === '') {
      err.password = "password is required"
    } else if (!validPass.test(password)) {
      err.password = 'Minimum eight characters, at least one letter and one numbe';

    }
    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Confirm Password does not match"
    }
    setFormError({ ...err })
  }
  return (
    <>
      <section className={style.logForm}>
        <div className={style.signup}>
          <h2 className={style.signup__title}>Sign Up</h2>
          <p className={style.signup__para}>Work for charity ? <a href='/charitySign-up'>Sign up for charity account</a></p>
          <hr />

          <form onSubmit={onSubmitHandler} >
            <div className={style.userName}>
              <div class={style.inputGroupp}>
                <input name="userName" autoComplete="off" className={`${style.input}`} placeholder="Your Full Name" onChange={onChangeHandler} value={userName} />
                <div className={`${style.msErr}`}>{formError.userName}</div>
              </div>
              <div class={style.inputGroupp}>
                <input name="email" autoComplete="off" className={`${style.input}`} placeholder="Your Email" onChange={onChangeHandler} value={email} />
                <div className={`${style.msErr}`}>{formError.email}</div>
              </div>
              <div class={style.inputGroupp}>
                <input name="skills" autoComplete="off" className={`${style.input}`} placeholder="Your Skills" />
              </div>
              <div class={style.inputGroupp}>
                <PhoneInput
                  defaultCountry="EG"
                  international
                  error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                  value={phone}
                  onChange={onChangeHandler}
                  className={` ${style.PhoneInputInput} ${style.PhoneInput} ${style.input}`} />
              </div>
              <div class={style.inputGroupp}>
                <input name="address" autoComplete="off" className={`${style.input}`} placeholder="Your Address" />
              </div>
              <div class={style.inputGroupp}>
                <input name="age" autoComplete="off" className={`${style.input}`} placeholder="Your Age" />
              </div>
              <div class={style.inputGroupp}>
                <input name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="Your Password" onChange={onChangeHandler} value={password} />
                <div className={`${style.msErr}`}><p>{formError.password}</p></div>
              </div>
              <div class={style.inputGroupp}>
                <input name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="Confirm Password" onChange={onChangeHandler} value={confirmPassword} />
                <div className={`${style.msErr}`}>{formError.confirmPassword}</div>
              </div>
              <button className={style.signup__btn}>Sign Up</button>
            </div>
          </form>


          <hr className={style.forgetLine} />
          <p className={style.signup__term}> Aleardy have an account?<a href='/login'>Sign In</a> </p>
        </div>
      </section>
    </>
  )
}
