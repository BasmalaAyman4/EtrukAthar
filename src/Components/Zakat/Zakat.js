import React, { useState } from 'react'
import style from "./Zakat.module.css"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Zakat() {
    const [zakat, setZakat] = useState({
        money: '',
        dahab: '',
        building: ''

    });
    /*     const [zakat, setZakat] = useState({
            money: '',
            gold21: '',
            gold24: '',
            zakaMoney: ''
    
        });
        const storeZakat = new FormData();
        storeZakat.append("money", zakat.money);
        storeZakat.append("price_gold21", zakat.gold21);
        storeZakat.append("price_gold24", zakat.gold24);
        useEffect(() => {
            axios.post("https://otrok.invoacdmy.com/api/user/zakat/calculate", storeZakat, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    setZakat({
                        money: response.data.money,
                        zakaMoney: response.data.zakat_money
                    })
                }
                ).catch((err) => { console.log(err.response.data.message) })
    
        }, [])
        console.log(zakat) */
    const onChangeHandler = e => {

        setZakat({ ...zakat, [e.target.name]: e.target.value })

    }
    return (
        <>
            <section className={`${style.zakat}`}>
                <Container>
                    <h1 className={`${style.zakatTitle}`}>احسب زكاتك مع مؤسسة اترك اثر</h1>
                    <p className={`${style.zakatPara}`}>كيف تحسب زكاتك؟ حاسبة الزكاة على موقع مؤسسة مصر الخير، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة المال أو المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وكما يمكنك أيضاً من حساب قيمة زكاة الذهب من خلال إدخال مقدار الذهب وبالتالي تتعرف على قيمة الزكاة الواجبة عليها. ويمكنك حساب الزكاة للممتلكات الخاصة بك أو الأسهم أو السندات بكتابة قيمة السهم أو السند، وبعد ذلك يظهر لك قيمة الزكاة الخاصة بها. وتقوم مؤسسة مصر الخير بصرف زكاة المال الخاصة بك في مصارف الزكاة الشرعية. * يرجى التواصل مع جهة أو دار فتوى شرعية حتى تتحقق من شروط وضوابط الزكاة الواجبة</p>
                    <Row className={`${style.zakatRow}`}>
                        <Col lg={4} md={12} xs={12} className={`${style.zakaCol}`}>
                            <div className={`${style.zaka}`}>
                                <h4 className={`${style.zakatValue}`}>قيمة الزكاة</h4>
                                <hr />
                                <div >
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{zakat.money / 40} ج.م</p>
                                        <p>زكاة المال</p>
                                    </div>
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{(zakat.building * 2.5) / 100} ج.م</p>
                                        <p>زكاة الاصول و الممتلكات</p>
                                    </div>
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{(zakat.dahab * 2635 * 2.5) / 100} ج.م</p>
                                        <p>زكاة الذهب</p>
                                    </div>
                                    <hr />
                                    <div className={`${style.zakatValue__body}`}>
                                        <p>{(zakat.money / 40) + ((zakat.dahab * 2635 * 2.5) / 100) + ((zakat.building * 2.5) / 100)} ج.م</p>
                                        <p>اجمالي مبلغ الزكاة</p>
                                    </div>
                                </div>
                                <button className={`${style.zakatValue__btn}`}>تبرع الان</button>
                            </div>
                        </Col>
                        <Col lg={8} md={12} xs={12}>
                            <div className={`${style.zakatValue__carts}`}>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>زكاة المال</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label>قيمة المال الذي املكة</label>
                                            <input required="" type="text" name="money" className={`${style.input}`} placeholder='القيمة هنا' value={zakat.money}
                                                onChange={onChangeHandler} /> {/* {zakat.money >= 20 ? <p>jsdnkj</p> : ""} */}
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>العملة</p>
                                            <p>جنية مصري</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>زكاة الاصول و الممتلكات</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label>قيمة الاسهم التي امتلكها في السوق</label>
                                            <input required="" type="text" className={`${style.input}`} placeholder='القيمة هنا' name="building" value={zakat.building} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>العملة</p>
                                            <p>جنية مصري</p>
                                        </div>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label>قيمة السندات التي امتلكها في السوق</label>
                                            <input required="" type="text" className={`${style.input}`} placeholder='القيمة هنا' name="building" value={zakat.building} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>العملة</p>
                                            <p>جنية مصري</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.zakat__cart}`}>
                                    <div className={`${style.zakatHeader__cart}`}>
                                        <p>زكاة الذهب</p>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label> وزن الذهب الذي تملكة من عيار 21</label>
                                            <input required="" type="text" className={`${style.input} ${style.dahab}`} placeholder='القيمة هنا' name="dahab" value={zakat.dahab} onChange={onChangeHandler} />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>قيمة الذهب اليوم</p>
                                            <p> 2635 جنية مصري</p>
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>وحدة القياس</p>
                                            <p> الجرام</p>
                                        </div>
                                    </div>
                                    <div className={`${style.zakatBody__cart}`}>
                                        <div className={`${style.group}`}>
                                            <label> وزن الذهب الذي تملكة من عيار 24</label>
                                            <input required="" type="text" className={`${style.input} ${style.dahab}`} placeholder='القيمة هنا' />
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>قيمة الذهب اليوم</p>
                                            <p> 2635 جنية مصري</p>
                                        </div>
                                        <div className={`${style.zakatMoney__cart}`}>
                                            <p>وحدة القياس</p>
                                            <p> الجرام</p>
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
