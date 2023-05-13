import React, { useState } from 'react'
import style from "./Zakat.module.css"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next'
export default function Zakat() {
    const { t } = useTranslation()
    const [zakat, setZakat] = useState({
        money: '',
        gold21: "",
        gold24: '',
        zakagold21: "2635"


    });
    const much = Math.floor(zakat.zakagold21 * 87.48)
    const onChangeHandler = e => {

        setZakat({ ...zakat, [e.target.name]: e.target.value })

    }
    return (
        <>
            <section className={`${style.zakat}`}>
                <Container>
                    <h1 className={`${style.zakatTitle}`}>{t("احسب زكاتك مع مؤسسة اترك أثرا")}</h1>
                    <p className={`${style.zakatPara}`}>{t("كيف تحسب زكاتك؟ حاسبة الزكاة على موقع مؤسسة اترك أثرا، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة المال أو المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وكما يمكنك أيضاً من حساب قيمة زكاة الذهب من خلال إدخال مقدار الذهب وبالتالي تتعرف على قيمة الزكاة الواجبة عليها. وتقوم مؤسسة اترك أثرا بصرف زكاة المال الخاصة بك في مصارف الزكاة الشرعية. * يرجى التواصل مع جهة أو دار فتوى شرعية حتى تتحقق من شروط وضوابط الزكاة الواجبة.")}</p>
                    <Row className={`${style.zakatRow}`}>
                        <Col lg={4} md={12} xs={12} className={`${style.zakaCol}`}>
                            <div className={`${style.zaka}`}>
                                <h4 className={`${style.zakatValue}`}> {t("قيمة الزكاة")}</h4>
                                <hr />
                                <div >
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{zakat.money <= (zakat.zakagold21 * 87.48) ? "0 ج.م" : ((zakat.money * 2.5) / 100)}</p>
                                        <p>  {t("زكاة المال")}</p>
                                    </div>
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{((zakat.gold21 * 2635 * 2.5) / 100) + ((zakat.gold24 * 2635 * 2.5) / 100)} ج.م</p>
                                        <p>{t("زكاة الدهب")}</p>
                                    </div>
                                    <hr />
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{zakat.money <= (zakat.zakagold21 * 87.48) ? ((zakat.gold21 * 2635 * 2.5) / 100) + ((zakat.gold24 * 2635 * 2.5) / 100) : ((zakat.money * 2.5) / 100) + ((zakat.gold21 * 2635 * 2.5) / 100) + ((zakat.gold24 * 2635 * 2.5) / 100)} ج.م</p>
                                        <p>{t("إجمالي مبلغ الزكاة")}</p>
                                    </div>
                                </div>
                                <button className={`${style.zakatValue__btn}`}> {t("تبرع الآن")}</button>
                            </div>
                        </Col>
                        <Col lg={8} md={12} xs={12}>
                            <div className={`${style.zakatValue__carts}`}>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>  {t("زكاة المال")}</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label className={`${style.label}`}> {t("قيمة المال الذي أملكه")}</label>
                                            <input required="" type="text" name="money" className={`${style.input}`} placeholder={t("القيمة هنا")} value={zakat.money}
                                                onChange={onChangeHandler} />  {zakat.money <= (zakat.zakagold21 * 87.48) ? <p className={`${style.err}`}> {t("  لحساب زكاة المال")} {t("يجب ادخال مبلغ اكبر من  ")}{much}</p> : ""}
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p> {t("العملة")}</p>
                                            <p>  {t("جنيه مصري")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>  {t("زكاة الدهب")}</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label className={`${style.label}`}> {t("وزن الذهب الذي تملكه من عيار 21")}</label>
                                            <input required="" type="text" className={`${style.input} ${style.dahab}`} placeholder={t("القيمة هنا")} name="gold21" value={zakat.gold21} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>{t("قيمة الذهب اليوم")}</p>
                                            <p> 2635  {t("جنيه مصري")}</p>
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>  {t("وحدة القياس")}</p>
                                            <p>  {t("الجرام")}</p>
                                        </div>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label className={`${style.label}`}>  {t("وزن الذهب الذي تملكه من عيار 24")}</label>
                                            <input required="" type="text" className={`${style.input} ${style.dahab}`} placeholder={t("القيمة هنا")} name="gold24" value={zakat.gold24} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p> {t("قيمة الذهب اليوم")}</p>
                                            <p> 2635  {t("جنيه مصري")}</p>
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p> {t("وحدة القياس")}</p>
                                            <p> {t("الجرام")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}
