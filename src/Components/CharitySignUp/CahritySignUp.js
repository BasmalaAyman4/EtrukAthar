import React, { useState } from 'react'
import style from '../Sign-up/signUp.module.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function CahritySignUp() {
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
                    <p className={style.signup__para}> doner ? <a href='/signup'>Sign up for user</a></p>
                    <hr />
                    <Form onSubmit={onSubmitHandler} >
                        <div className={style.userName}>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control name="userName" className={`${style.input}`} placeholder="Your Charity Name" onChange={onChangeHandler} value={userName} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.userName}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder="Your Charity Email" onChange={onChangeHandler} value={email} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="type-of-work" autoComplete="off" className={`${style.input}`} placeholder="Type Of Work" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="RegistrationNumber" autoComplete="off" className={`${style.input}`} placeholder="Registration Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="yourArea" autoComplete="off" className={`${style.input}`} placeholder="Your Area" />
                            </Form.Group>
                            <div class={style.inputGroupp}>
                                <PhoneInput
                                    defaultCountry="EG"
                                    international
                                    error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                    value={phone}
                                    onChange={onChangeHandler}
                                    className={` ${style.PhoneInputInput} ${style.PhoneInput} ${style.input}`} />
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="Your Password" onChange={onChangeHandler} value={password} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.password}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="confirmPassword" type="password" autoComplete="off" className={`${style.input}`} placeholder="Confirm Password" onChange={onChangeHandler} value={confirmPassword} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.confirmPassword}
                                </Form.Text>
                            </Form.Group>
                            <Button className={style.signup__btn} type="submit">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}
