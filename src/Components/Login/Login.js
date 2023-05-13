import React, { useState, useContext } from 'react'
import style from './Login.module.css'
import { AuthContext } from '../../Components/Context/AuthContext'
import Form from 'react-bootstrap/Form';
import img from "./../../assets/images/ngo-illustration-Artboard-5.png"
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [userType, setUserType] = useState("1")
    // const knowUserType = (role) => {
    //     role === "volenteer" ? setUserType('1') : setUserType('2')
    // }
    const { t } = useTranslation()
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const notify = () => toast("Wow so easy !");
    const { email, password } = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
        console.log(userType)
    }
    function handleErrors() {

        let err = {}

        if (formData.email === '') {
            err.email = "البريد الالكتروني مطلوب";
        } else if (!validEmail.test(email)) {
            err.email = "بريد غير صحيح";
        }
        if (formData.password === '') {
            err.password = "كلمه السر مطلوبه"
        }
        setFormError({ ...err })
    }

    const reqSignUpData = {
        email: formData.email,
        password: formData.password,

    }

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const handleRedirect = async () => {
        await delay(7000);

        if (localStorage.getItem("token")) {
            navigate("/")
            window.location.reload();

        } else {
            navigate("/login")
        }
    }



    function handleSubmitLogin(e) {
        const toastId = toast.loading("Please wait...")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        handleErrors()
        if (userType === '1') {
            axios.post(`https://otrok.invoacdmy.com/api/login`, reqSignUpData)
                .then((response) => {
                    localStorage.setItem("token", response.data.token)
                    toast.success(t("تم تسجيل الدخول بنجاح"))
                    handleRedirect()
                })
                .catch((err) => {
                    toast.error(err.response.data.message)
                });
        } else {
            axios.post(`https://otrok.invoacdmy.com/api/login`, reqSignUpData)
                .then((response) => {
                    localStorage.setItem("token", response.data.token)
                    toast.success( "تم تسجيل الدخول بنجاح")
                    handleRedirect()
                })
                .catch((err) => {
                    toast.error(err.response.data.message)
                });
        }

    }

    return (
        <>
            <section className={style.logForm}>

                <div className='container'>
                    <div className='row'>
                        <div className={`${style["login__header-display"]}  col-lg-4 col-md-12 col-sm-12 d-none d-lg-block d-xl-block`}>
                            <div className={style["login__header-image"]}>
                                <img className='' src={img} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-12 col-sm-12 pb-5  '>

                            <div className={style.login}>
                                <div className='container'>
                                    <h2 className={style.login__title}>{t("تسجيل الدخول")}</h2>
                                    <hr />
                                    <ul className={`${style.userLog__list}`}>
                                        <li className={`${style.userLog__item}`} onClick={() => { setUserType('1') }} >
                                            <button type='button' className={`${userType === '1' ? style.userLog__link : style.user__link}`} >{t("مستخدم")}</button>
                                        </li>
                                        <li className={`${style.userLog__item}  `} onClick={() => { setUserType('2') }} >
                                            <button type='button' className={`${userType === '2' ? style.userLog__link : style.user__link}`} >{t("جمعية ")}</button>
                                        </li>
                                    </ul>
                                    <div className={style.userName}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} onChange={onChangeHandler} value={formData.email} />
                                            <Form.Text className={`${style.msErr}`}>
                                                {formError.email}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("كلمة المرور")} onChange={onChangeHandler} value={formData.password} />
                                            <Form.Text className={`${style.msErr}`}>
                                                {formError.password}
                                            </Form.Text>
                                        </Form.Group>
                                        <button className={style.log__btn} type='button' onClick={(e) => { handleSubmitLogin(e) }}>{t("تسجيل الدخول")}</button>
                                    </div>
                                    <hr className={style.forgetLine} />
                                    <a href='/forget' className={style.log__link}> {t("هل نسيت كلمة السر؟")}</a>
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
