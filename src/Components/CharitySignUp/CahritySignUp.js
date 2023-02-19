import React, { useState } from 'react'
import style from '../Sign-up/signUp.module.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function CahritySignUp() {
    const [value, setValue] = useState()
    return (
        <>
            <section className={style.logForm}>
                <div className={style.signup}>
                    <h2 className={style.signup__title}>Sign Up</h2>
                    <p className={style.signup__para}>Volunteer or doner ? <a href='/signup'>Sign up for user</a></p>
                    <hr />
                    <div className={style.userName}>
                        <div class={style.inputGroupp}>
                            <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Your Charity Name</label>
                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Your Charity Email</label>
                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Type of Work</label>
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
                            <label class={style.userLabell}> Registration Number</label>
                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Your Area</label>
                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="password" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Your Password</label>
                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="password" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Confirm Password</label>
                        </div>
                    </div>
                    <div>

                        <button className={style.signup__btn}>Sign Up</button>
                    </div>
                    <hr className={style.forgetLine} />
                    <p className={style.signup__term}> Aleardy have an account?<a href='/login'>Sign In</a> </p>
                </div>
            </section>
        </>
    )
}
