import React, { useState } from 'react'
import style from './Login.module.css'

export default function Login() {
    const [active, setActive] = useState(true)
    const showActive = (role) => {
        role === "volenteer" ? setActive(true) : setActive(false)
    }


    return (
        <>
            <section className={style.logForm}>
                <div className={style.login}>
                    <h2 className={style.login__title}>Sign in</h2>
                    <hr />
                    <ul className={style.userLog__list}>
                        <li className={`${style.userLog__item}`} onClick={() => { showActive("volenteer") }} >
                            <button type='button' className={`${active ? style.user__link : style.userLog__link}`} >AS VOUNTEER OR DONOR</button>
                        </li>
                        <li className={`${style.userLog__item}  `} onClick={() => { showActive("charity") }} >
                            <button type='button' className={`${active ? style.userLog__link : style.user__link}`} >AS CHARITY</button>
                        </li>
                    </ul>
                    <div>
                        <div class={style.inputGroupp}>
                            <input required="" type="text" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Email address</label>

                        </div>
                        <div class={style.inputGroupp}>
                            <input required="" type="password" name="text" autocomplete="off" className={style.inputt} />
                            <label class={style.userLabell}> Password</label>
                        </div>
                        <button className={style.log__btn}>Sign in</button>
                    </div>
                    <hr className={style.forgetLine} />
                    <a href='/forget' className={style.log__link}> Forget your password?</a>
                </div>
            </section>
        </>
    )
}
