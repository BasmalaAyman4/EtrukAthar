import React, { useState, useEffect } from 'react'
import style from "./Zakat.module.css"
import { Container, Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../Global/AnimatedPage';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Zakat() {
    const { t } = useTranslation()
    const [zakat, setZakat] = useState({
        money: '0',
        gold21: "0",
        gold24: '0',

    });
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/zakat/show`)
            .then((response) => {
                setZakat(response.data.result)
            }).catch((err) => { console.log(err) })


    }, [])
    const navigate = useNavigate();
    const much = Math.floor(zakat.price_gold21 * 87.48)
    const onChangeHandler = e => {
        setZakat({ ...zakat, [e.target.name]: e.target.value })
    }
    const donate = () => {
        navigate("/cases")
    }

    return (
        <AnimatedPage >
            <section className={`${style.zakat}`} >
                <Container>
                    <h1 className={`${style.zakatTitle}`}>{t("احسب زكاتك مع مؤسسة اترك أثرا")}</h1>
                    <p className={`${style.zakatPara}`}>{t("كيف تحسب زكاتك؟ حاسبة الزكاة على موقع مؤسسة اترك أثرا، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة المال أو المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وكما يمكنك أيضاً من حساب قيمة زكاة الذهب من خلال إدخال مقدار الذهب وبالتالي تتعرف على قيمة الزكاة الواجبة عليها. وتقوم مؤسسة اترك أثرا بصرف زكاة المال الخاصة بك في مصارف الزكاة الشرعية. * يرجى التواصل مع جهة أو دار فتوى شرعية حتى تتحقق من شروط وضوابط الزكاة الواجبة.")}</p>
                    <Row className={`${style.zakatRow}`}>
                        <Col lg={4} md={12} xs={12} className={`${style.zakaCol}`} data-aos="fade-up">
                            <div className={`${style.zaka}`}>
                                <h4 className={`${style.zakatValue}`}> {t("قيمة الزكاة")}</h4>
                                <hr />
                                <div >
                                {zakat.money ?
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{zakat.money <= (zakat.price_gold21 * 87.48) ? "0" : ((zakat.money * 2.5) / 100)} {t("ج")}</p>
                                        <p>  {t("زكاة المال")}</p>
                                    </div>
                                    :
                                    
                                    <div className={`${style.zakatValue__body}`}>
                                    
                                        <p>  0 </p>
                                        <p> {t("زكاة المال")}</p>
                                    </div>
                                  }
                                      {zakat.gold21 || zakat.gold24?
                                        <div className={`${style.zakatValue__body}`}>
                                        
                                        <p>{((zakat.gold21 * zakat.price_gold21 * 2.5) / 100) + ((zakat.gold24 * zakat.price_gold24 * 2.5) / 100) || ((zakat.gold21 * zakat.price_gold21 * 2.5) / 100) || ((zakat.gold24 * zakat.price_gold24 * 2.5) / 100)} {t("ج")}</p>
                                            <p>{t("زكاة الدهب")}</p>
                                        </div>
                                        :
                                        <div className={`${style.zakatValue__body}`}>
                                        
                                            <p> 0 </p>
                                            <p>{t("زكاة الدهب")}</p>
                                        </div>
                                      }
                                  
                                    <hr />
                                    {zakat.gold21 || zakat.gold24 || zakat.money ?
                                    <div className={`${style.zakatValue__body}`}>
                                         <p>{zakat.money <= (zakat.price_gold21 * 87.48) ? ((zakat.gold21 * zakat.price_gold21 * 2.5) / 100) + ((zakat.gold24 * zakat.price_gold24 * 2.5) / 100) : ((zakat.money * 2.5) / 100) + ((zakat.gold21 * zakat.price_gold21 * 2.5) / 100) + ((zakat.gold24 * zakat.price_gold24 * 2.5) / 100)} {t("ج")}</p>
                                    </div>
                                    :
                                    <div className={`${style.zakatValue__body}`}>
                                        <p> 0 </p>
                                        <p className={`${style.zakatValue__total}`}>{t("إجمالي مبلغ الزكاة")}</p>
                                    </div>
                                    }

                                </div>
                                <Button className={`${style.zakatValue__btn}`} onClick={donate}> {t("تبرع الآن")}</Button>
                            </div>
                        </Col>
                        <Col lg={8} md={12} xs={12} data-aos="fade-up">
                            <div className={`${style.zakatValue__carts}`}>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>  {t("زكاة المال")}</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label className={`${style.label}`}> {t("قيمة المال الذي أملكه")}</label>
                                            <input required="" type="number" min="1" name="money" className={`${style.input}`} placeholder={t("القيمة هنا")} value={zakat.money}
                                                onChange={onChangeHandler} />  {zakat.money <= (zakat.price_gold21 * 87.48) ? <p className={`${style.err}`}> {t("  لحساب زكاة المال")} {t("يجب ادخال مبلغ اكبر من  ")}{much}</p> : ""}
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
                                            <input required="" min="1" type="number" className={`${style.input} ${style.dahab}`} placeholder={t("القيمة هنا")} name="gold21" value={zakat.gold21} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>{t("قيمة الذهب اليوم")}</p>
                                            <p> {zakat.price_gold21}  {t("جنيه مصري")}</p>
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>  {t("وحدة القياس")}</p>
                                            <p>  {t("الجرام")}</p>
                                        </div>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label className={`${style.label}`}>  {t("وزن الذهب الذي تملكه من عيار 24")}</label>
                                            <input required="" min="1" type="number" className={`${style.input} ${style.dahab}`} placeholder={t("القيمة هنا")} name="gold24" value={zakat.gold24} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p> {t("قيمة الذهب اليوم")}</p>
                                            <p> {zakat.price_gold24} {t("جنيه مصري")}</p>
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
        </AnimatedPage>
    )
}
