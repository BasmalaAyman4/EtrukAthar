import React, { useState } from 'react'
import style from '../Sign-up/signUp.module.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
export default function CharitySignUp() {
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
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        let err = {}

        if (formData.userName === '') {
            err.userName = 'الاسم مطلوب';
        } else if (!validname.test(userName)) {
            err.userName = 'يحب كتابه الاسم بدون مسافات';
        }
        if (formData.email === '') {
            err.email = "البريد الالكتروني مطلوب";
        } else if (!validEmail.test(email)) {
            err.email = "بريد غير صحيح";
        }
        if (formData.password === '') {
            err.password = "كلمه السر مطلوبه"
        } else if (!validPass.test(password)) {
            err.password = 'Minimum eight characters, at least one letter and one numbe';

        }
        if (formData.confirmPassword !== formData.password) {
            err.confirmPassword = "تأكيد كلمه المرور لا تتطابق"
        }
        setFormError({ ...err })
    }
    const { t } = useTranslation()
    return (
        <>
            <section className={style.logForm}>
                <div class="container">
                    <div className={style.signup}>
                        <h2 className={style.signup__title}>{t("تسجيل حساب جمعية خيرية ")}</h2>
                        <p className={style.signup__para}> {t("هل انت متبرع ؟")} <a href='/sign-up'>{t("انشاء حساب مستخدم ")}</a></p>
                        <hr />
                        <Form onSubmit={onSubmitHandler} >
                            <div className={style.userName}>

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control name="userName" className={`${style.input}`} placeholder={t("اسم الجمعية")} onChange={onChangeHandler} value={userName} />
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
                                    <Form.Control name="yourArea" autoComplete="off" className={`${style.input}`} placeholder={t("العنوان")} />
                                </Form.Group>
                                <div class={style.inputGroupp}>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput} ${style.input}`} />
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("تأكيد كلمة المرور")} onChange={onChangeHandler} value={confirmPassword} />
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
