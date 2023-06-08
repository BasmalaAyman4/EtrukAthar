import React, { useState } from 'react'
import style from './signUp.module.css'
import './SignUp.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "./../../assets/images/ngo-illustration-Artboard-5.png"
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import Cookies from 'js-cookie'
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom'


export default function SignUp() {

  const { t } = useTranslation()
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const currentLanguageCode = Cookies.get('i18next') || 'en'
  const validname = /^[A-Za-z]+$/;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [formData, setFormData] = useState({
    nameEn: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: '',

  })
  const [formError, setFormError] = useState({})
  const [token, setToken] = useState('')
  const onChangeHandler = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData, "form")
  }

  const onChangeHandlerPhone = data => {
    setFormData({ ...formData, phone: data })
    console.log(formData)
  }

  function handleSigupUserErrors() {
    let err = {}

    /*    if (formData.name === '') {
         err.name = 'الاسم مطلوب';
       }
       if (formData.email === '') {
         err.email = "البريد الالكتروني مطلوب";
       } else if (!validEmail.test(formData.email)) {
         err.email = "البريد الالكتروني غير صحيح";
       }
       if (formData.password === '') {
         err.password = "كلمه السر مطلوبه"
       }
       if (formData.confirmPassword === '') {
         err.confirmPassword = "تاكيد كلمه السر مطلوبه"
       }
       if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
         err.confirmPassword = " كلمه المرور لا تتطابق"
       }
       if (formData.gender === '') {
         err.gender = 'النوع مطلوب';
       }
       if (formData.phone === '') {
         err.phone = 'رقم الهاتف مطلوب';
       }
    */
    setFormError({ ...err })
  }

  const reqSignUpData = {
    email: formData.email,
    name_en: formData.nameEn,
    gender: formData.gender,
    password: formData.password,
    password_confirmation: formData.confirmPassword,
    phone: formData.phone,
    user_type: "1"
  }
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const handleRedirect = async () => {
    await delay(1500);

    if (localStorage.getItem("token")) {
      window.location.reload();
      navigate("/")
    } else {
      navigate("/login")
    }
  }

  const onSubmitHandler = (e) => {

    const toastId = toast.loading("Please wait...")
    setTimeout(() => { toast.dismiss(toastId); }, 1000);
    e.preventDefault()
    handleSigupUserErrors()
    setDisabled(!disabled)
    axios.post(`https://otrok.invoacdmy.com/api/register?lang=${currentLanguageCode}`, reqSignUpData)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        toast.success(t("تم التسجيل بنجاح"))
        handleRedirect()
      }, [currentLanguageCode])
      .catch((err) => {
        toast.error(err.response.data.message)
      }, [currentLanguageCode]);
  }


  return (
    <>
      <section className={style.logForm}>
        <div className='container' >
          <div className='row'>
            <div className={`${style["login__header-display"]}  col-lg-4 col-md-12 col-sm-12 d-none d-lg-block d-xl-block`}>
              <div className={style["login__header-image"]}>
                <img className='' src={img} alt="" />
              </div>
            </div>
            <div className='col-lg-8 col-md-12 col-sm-12 pb-5'>
              <div className={style.signup}>
                <h2 className={style.signup__title}>{t("تسجيل حساب جديد")}</h2>
                <p className={style.signup__para}>{t("تعمل  كجمعية خيرية؟")}<a href="/charitySign-up">{t(" انشاء حساب كجمعية خيرية")}</a></p>
                <hr />
                <Form onSubmit={onSubmitHandler} >
                  <div className={style.userName}>

                    <Form.Group className="mb-3" controlId="name" >
                      <Form.Control name="nameEn" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={formData.nameEn} />
                      <Form.Text className={`${style.msErr}`}>
                        {formError.name}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} onChange={onChangeHandler} value={formData.email} />
                      <Form.Text className={`${style.msErr}`}>
                        {formError.email}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                      <select
                        placeholder="State"
                        className={`${style.input} select`}
                        name="gender"
                        value={formData.gender}
                        onChange={onChangeHandler}
                      >
                        <option value=''>{t("النوع")}</option>
                        <option value='m'>ذكر</option>
                        <option value='f'>انثي</option>
                      </select>
                      <Form.Text className={`${style.msErr}`}>
                        {formError.gender}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                      <div class={style.inputGroupp}>
                        <PhoneInput
                          defaultCountry="EG"
                          international
                          error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                          value={formData.phone}
                          name="phone"
                          onChange={onChangeHandlerPhone}
                          className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                        <Form.Text className={`${style.msErr}`}>
                          {formError.phone}
                        </Form.Text>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                      <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("تأكيد كلمة المرور")} onChange={onChangeHandler} value={formData.confirmPassword} />
                      <Form.Text className={`${style.msErr}`}>
                        {formError.confirmPassword}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("كلمة المرور")} onChange={onChangeHandler} value={formData.password} />

                      <Form.Text className={`${style.msErr}`}>
                        {formError.password}
                      </Form.Text>
                    </Form.Group>
                    {/* <InputGroup size='md'>
                                  <Input
                                    isRequired={true}
                                    fontSize='sm'
                                    placeholder='Min. 8 characters'
                                    mb='24px'
                                    size='lg'
                                    type={show ? "text" : "password"}
                                    variant='auth'
                                  />
                                  <InputRightElement display='flex' alignItems='center' mt='4px'>
                                    <Icon
                              
                                      _hover={{ cursor: "pointer" }}
                                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                      onClick={handleClick}
                                    />
                                  </InputRightElement>  
                                </InputGroup> */}


                  </div>
                  <Button className={style.signup__btn} type="submit" disabled={disabled}>
                    {t("انشاء حساب")}
                  </Button>

                </Form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </section>
    </>
  )
}
