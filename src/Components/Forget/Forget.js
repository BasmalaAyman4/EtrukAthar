import React from 'react'
import style from './Forget.module.css'
import { BsFillReplyFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import img from "./../../assets/images/ngo-illustration-Artboard-5.png"
export default function Forget() {
    const {t} = useTranslation()
    return (
        <>
            <section className={style.logForm}>
                <div className='container'>
                <div className='row'>
                        <div  className={`${style["login__header-display"]}  col-lg-6 col-md-12 col-sm-12 d-none d-lg-block d-xl-block`}>
                                <div className={style["login__header-image"]}>
                                    <img className='' src={img} alt="" />
                                </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 pb-5'>
                            <div className={style.login}>
                                <h2 className={style.login__title}>{t("تسجيل الدخول")}</h2>
                                <hr />
                                <div>
                                    <h4 className={style.forgot__title}>{t("هل نسيت كلمة السر؟")}</h4>
                                    <div class={style.inputGroupp}>
                                        <input name="email" autoComplete="off" className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} />
                                    </div>

                                    <div className={`${style["inputGroupp"]} mt-3`}>
                                        <input name="newPassword" autoComplete="off" className={`${style.input}`} placeholder={t("كلمة المرور الجديدة")} />
                                    </div>
                                    <button className={style.log__btn}>{t("طلب كلمة مرور جديدة")}</button>
                                </div>
                                <hr className={style.forgetLine} />
                                <a href='/login' className={style.forget__link}><BsFillReplyFill /> {t("ارجع للخلف")}</a>
                            </div>
                         </div>

                </div>
                </div>
            </section>
        </>
    )
}
