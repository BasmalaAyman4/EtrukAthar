import React, { useState } from 'react'
import style from './signUp.module.css'
import  './SignUp.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

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

  const onChangeHandlerPhone = data => {
    setFormData( { ...formData, phone: data })
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
      err.password = 'Minimum eight characters, at least one letter and one number';

    }
    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Confirm Password does not match"
    }
    setFormError({ ...err })
  }
  const {t}= useTranslation()
  return (
    <>
      <section className={style.logForm}>
        <div className='container' >
        <div className={style.signup}>
          <h2 className={style.signup__title}>{t("تسجيل حساب جديد")}</h2>
          <p className={style.signup__para}>{t("تعمل  كجمعية خيرية؟")}<a href='/charitySign-up'>{t(" انشاء حساب كجمعية خيرية")}</a></p>
          <hr />
          <Form onSubmit={onSubmitHandler} >
            <div className={style.userName}>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Control name="userName" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={userName} />
                <Form.Text className={`${style.msErr}`}>
                  {formError.userName}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} onChange={onChangeHandler} value={email} />
                <Form.Text className={`${style.msErr}`}>
                  {formError.email}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="skills" autoComplete="off" className={`${style.input}`} placeholder={t("مهارات")} />
              </Form.Group>
              <div class={style.inputGroupp}>
                <PhoneInput
                  defaultCountry="EG"
                  international
                  error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                  value={phone}
                  name="phone"
                  onChange={onChangeHandlerPhone}
                  className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="address" autoComplete="off" className={`${style.input}`} placeholder={t("العنوان")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="age" autoComplete="off" className={`${style.input}`} placeholder={t( "العمر")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder={t( "تأكيد كلمة المرور")} onChange={onChangeHandler} value={confirmPassword} />
                <Form.Text className={`${style.msErr}`}>
                  {formError.confirmPassword}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("كلمة المرور")} onChange={onChangeHandler} value={password} />
                <Form.Text className={`${style.msErr}`}>
                  {formError.password}
                </Form.Text>
              </Form.Group>
             
              <Button className={style.signup__btn} type="submit">
                {t("انشاء حساب")}
              </Button>
            </div>
          </Form>
        </div>
        </div>
      </section>
    </>
  )
}
