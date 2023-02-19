import React from 'react'
import style from './Forget.module.css'
import { BsFillReplyFill } from "react-icons/bs";
export default function Forget() {
    return (
        <>
            <section className={style.logForm}>
                <div className={style.login}>
                    <h2 className={style.login__title}>Sign in</h2>
                    <hr />
                    <div>
                        <h4 className={style.forgot__title}>Forgot your password?</h4>
                        <div class={style.inputGroupp}>
                            <input name="email" autoComplete="off" className={`${style.input}`} placeholder="Your Email" />
                        </div>
                        <button className={style.log__btn}>Request new password</button>
                    </div>
                    <hr className={style.forgetLine} />
                    <a href='/login' className={style.forget__link}><BsFillReplyFill /> Go back</a>
                </div>
            </section>
        </>
    )
}
