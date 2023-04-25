import React, { useState } from 'react'
import style from "./charitySignUp.module.css"
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "./../../assets/images/ngo-illustration-Artboard-5.png"
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function CharitySignUp() {
    const { t } = useTranslation()
    const validname = /^[A-Za-z]+$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: ''

    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)

    }
    function handleErrors() {
        let err = {}

        if (formData.name === '') {
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
        if (formData.address === '') {
            err.address = 'العنوان مطلوب';
        }
        if (formData.phone === '') {
            err.phone = 'رقم الهاتف مطلوب';
        }
        setFormError({ ...err })
    }
    const onChangeHandlerPhone = data => {
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }


    const reqSignUpData = {
        email: formData.email,
        name: formData.name,
        address: formData.address,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        phone: formData.phone,
        user_type: "2"
    }
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const handleRedirect = async () => {
        await delay(3000);

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
        handleErrors()
        axios.post(`https://otrok.invoacdmy.com/api/register`, reqSignUpData)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                toast.success("Successfully registered!")
                handleRedirect()
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            });
    }

    return (
        <>
            <section className={style.logForm}>
                <div class="container">
                    <div className='row'>
                        <div className={`${style["login__header-display"]}  col-lg-4 col-md-12 col-sm-12 d-none d-lg-block d-xl-block`}>
                            <div className={style["login__header-image"]}>
                                <img className='' src={img} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12 pb-5'>
                            <div className={style.signup}>
                                <div className='container'>
                                    <h2 className={style.signup__title}>{t("تسجيل حساب جمعية خيرية ")}</h2>
                                    <p className={style.signup__para}> {t("هل انت متبرع ؟")} <a href='/sign-up'>{t("انشاء حساب مستخدم ")}</a></p>
                                    <hr />
                                    <Form onSubmit={onSubmitHandler} >
                                        <div className={style.userName}>

                                            <Form.Group className="mb-3" controlId="name" >
                                                <Form.Control name="name" className={`${style.input}`} placeholder={t("اسم الجمعية")} onChange={onChangeHandler} value={formData.name} />
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
                                            <Form.Group className="mb-3" controlId="address">
                                                <Form.Control name="address" autoComplete="off" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={formData.address} />
                                                <Form.Text className={`${style.msErr}`}>
                                                    {formError.address}
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

                                        </div>

                                        <Button className={style.signup__btn} type="submit">
                                            {t("انشاء حساب")}
                                        </Button>

                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}
