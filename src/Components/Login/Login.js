import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <>
            <section className='log-form'>
                <div className='login'>
                    <h2 className='login__title'>Sign in</h2>
                    <hr />
                    <div>
                        <div class="input-groupp">
                            <input required="" type="text" name="text" autocomplete="off" className="inputt" />
                            <label class="user-labell"> Email address</label>
                        </div>
                        <div class="input-groupp">
                            <input required="" type="password" name="text" autocomplete="off" className="inputt" />
                            <label class="user-labell"> Password</label>
                        </div>
                        <button className='log__btn'>Sign in</button>
                    </div>
                    <hr className='forget-line' />
                    <a href='' className='log__link '> Forget your password?</a>
                </div>
            </section>
        </>
    )
}
