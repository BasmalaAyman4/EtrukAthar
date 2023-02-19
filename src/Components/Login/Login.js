import React, { useState, useContext } from 'react'
import style from './Login.module.css'
import { AuthContext } from '../AuthContext'

export default function Login() {
    const [active, setActive] = useState(true)
    const showActive = (role) => {
        role === "volenteer" ? setActive(true) : setActive(false)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    function login(e) {
        e.preventDefault();


        if (password === '123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({ token, email });
        } else {
            alert('wrong details');
        }
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
                            <input name="email" autoComplete="off" className={`${style.input}`} placeholder="Your Email" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div class={style.inputGroupp}>
                            <input name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder="Your Password" onChange={e => setPassword(e.target.value)} value={password} />
                        </div>
                        <button className={style.log__btn} onClick={login}>Sign in</button>
                    </div>
                    <hr className={style.forgetLine} />
                    <a href='/forget' className={style.log__link}> Forget your password?</a>
                </div>
            </section>
        </>
    )
}
