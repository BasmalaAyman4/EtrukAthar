import React from 'react'
import style from './Forget.module.css'
import { BsFillReplyFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
export default function Forget() {
    const {t} = useTranslation()
    return (
        <>
            <section className={style.logForm}>
                <div className='container'>
                    <div className={style.login}>
                        <h2 className={style.login__title}>{t("تسجيل الدخول")}</h2>
                        <hr />
                        <div>
                            <h4 className={style.forgot__title}>{t("هل نسيت كلمة السر؟")}</h4>
                            <div class={style.inputGroupp}>
                                <input name="email" autoComplete="off" className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} />
                            </div>
                            <button className={style.log__btn}>{t("طلب كلمة مرور جديدة")}</button>
                        </div>
                        <hr className={style.forgetLine} />
                        <a href='/login' className={style.forget__link}><BsFillReplyFill /> {t("ارجع للخلف")}</a>
                    </div>
                </div>
            </section>
        </>
    )
}
