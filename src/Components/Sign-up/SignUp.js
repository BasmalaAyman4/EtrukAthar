import React, { useState } from 'react'
import style from './signUp.module.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Form from 'react-bootstrap/Form';
export default function SignUp() {
  const [value, setValue] = useState()
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [formError, setFormError] = useState({})

  const onChangeHandler = (event) => {

    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }))

  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    let err = {}

    if (formData.username === '') {
      err.username = 'Please Fill Out This Field'
    }
    if (formData.email !== validEmail) {
      err.email = "Invalid Email"
    }
    if (formData.password === '') {
      err.password = 'Please Fill Out This Field'
    }
    if (formData.confirmPassword === formData.password) {
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

          <Form onSubmit={onSubmitHandler} >
            <div className={style.userName}>
              <div class={style.inputGroupp}>
                <input required="" type="text" name="text" autocomplete="off" className={style.inputt} onChange={onChangeHandler} value={formData.username} />
                <label class={style.userLabell}> Your Full Name</label>
                <div className={`${style.msErr}`}>{formError.username}</div>
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="text" name="text" autocomplete="off" className={style.inputt} onChange={onChangeHandler} value={formData.email} />
                <label class={style.userLabell}> Your Email</label>
                <div className={`${style.msErr}`}>{formError.email}</div>
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                <label class={style.userLabell}> Your Skills</label>
              </div>
              <div class={style.inputGroupp}>
                <PhoneInput
                  defaultCountry="EG"
                  international
                  error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                  value={value}
                  onChange={setValue}
                  className={` ${style.PhoneInputInput} ${style.PhoneInput} ${style.inputt}`} />
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                <label class={style.userLabell}> Your Address</label>
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                <label class={style.userLabell}> Your Age</label>
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="password" name="text" autocomplete="off" className={style.inputt} onChange={onChangeHandler} value={formData.password} />
                <label class={style.userLabell}> Your Password</label>
                <div className={`${style.msErr}`}>{formError.password}</div>
              </div>
              <div class={style.inputGroupp}>
                <input required="" type="password" name="text" autocomplete="off" className={style.inputt} onChange={onChangeHandler} value={formData.confirmPassword} />
                <label class={style.userLabell}> Confirm Password</label>
                <div className={`${style.msErr}`}>{formError.confirmPassword}</div>
              </div>
              <button className={style.signup__btn}>Sign Up</button>
            </div>
          </Form>


          <hr className={style.forgetLine} />
          <p className={style.signup__term}> Aleardy have an account?<a href='/login'>Sign In</a> </p>
        </div>
      </section>
    </>
  )
}
