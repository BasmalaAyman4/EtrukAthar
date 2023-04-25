import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import style from './ProjectsDetails.module.css'
import './projectDetails.css'
import { FaCcPaypal, FaCcMastercard, FaWhatsapp, FaTwitter, FaFacebook, FaTelegram, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import NumericInput from 'react-numeric-input';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Player } from 'video-react';
import img1 from './../../assets/images/Klf3HzC73lImq.jpg'
import details1 from './../../assets/images/details1.jpeg'
import details2 from './../../assets/images/details2.jpeg'
import details3 from './../../assets/images/details3.jpeg'
import new1 from './../../assets/images/3-copy-scaled.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import paypal from "./../../assets/images/paypal.jpeg"
import delivery from "./../../assets/images/delivery-boy.png"
import vodafon from "./../../assets/images/vodafonCash.jpg"
import Form from 'react-bootstrap/Form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function ProjectsDetails() {
    const [formData, setFormData] = useState({
        phone: ''
    })
    const casesId = useParams()
    console.log(casesId.id)
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/${casesId.id}?lang=ar`)
            .then((response) => {
                console.log(response.data.case)
                setFormData(response.data.case)
            }).catch((err) => { console.log(err) })

    }, [])
    const [priceShow, setPriceshow] = useState("");
    function clickPrice(price) {
        setPriceshow("")
        setPriceshow(price)
        console.log(priceShow);
    }
    const onChangeHandlerPhone = data => {
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }

    const { t } = useTranslation()
    return (
        <>

            <Container>
                <Row dir='rtl' className='mt-5'>
                    <Col sm={12} xl={8} dir='rtl' >

                        <div className={`${style.cardDetails__body}`}>
                            <h3 className={`${style.cardDetails__title}`}>{formData.name}</h3>
                            <p className={`${style.cardDetails__para}`}>{t("مشروع رقم")}</p>
                            <hr />
                        </div>
                        <div className={`${style.collect}`}>
                            <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>42.512$</bold> {t("من اصل")} 50$ </p>
                            <ProgressBar now={88} className={`${style.progress} `} />
                        </div>
                        <div className={`${style.cardDetails__icon}`}>
                            <Row>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social1}`}>
                                        <FaWhatsapp className={`${style.i}`} />
                                        <span>Whatsapp</span>
                                    </button>
                                </Col>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social2}`}>
                                        <FaTelegram className={`${style.i}`} />
                                        <span>Telegram</span>
                                    </button>
                                </Col>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social3}`}>
                                        <FaFacebook className={`${style.i}`} />
                                        <span>Facebook</span>
                                    </button>
                                </Col>
                                <Col md={3} >
                                    <button className={`${style.icon__social} ${style.icon__social4}`}>
                                        <FaTwitter className={`${style.i}`} />
                                        <span>Twitter</span>
                                    </button>
                                </Col>
                            </Row>
                        </div>

                        <Player className={`${style.video}`} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={img1} />
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}> {t(" تبرعك هو أملهم و نجاحهم, فكن عونا لهم ")}</p></div>
                        <div >
                            <p className={`${style.details__para}`}>لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام وسقوطها فوق رؤوسهم، فلا مأوى يحميهم من برد الشتاء، ولا جدار يُخفّف عنهم قسوته.</p>
                            <p className={`${style.details__para}`}>من أجل آلاف العوائل، المصابين، المرضى، الأيتام والأرامل، من أجل عجزهم وبكاء أطفالهم، نُطلق وككل عام حملة دفء 11 المخصصة للاجئين السوريين في الأردن و أهلنا المهجرين في الشمال السوري لتأمين الكسوة الشتوية ومستلزمات التدفئة من مدفأة وحطب وغيرها من مواد التدفئة ، ونُتيح لكم فرصة التبرع للمساهمة بتأمينها لأكبر عدد من العوائل.</p>
                            <p className={`${style.details__para}`}>حيث تبلغ قيمة اللباس الشتوي للطفل الواحد 20 $ و تزويد عائلة لمدة شهر بمواد التدفئة 110$ تشمل (مدفأة و نصف طن من الحطب و البيرين) .</p>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}

                        >
                            <SwiperSlide><img src={details1} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>
                            <SwiperSlide><img src={details2} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>
                            <SwiperSlide><img src={details3} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>

                        </Swiper>
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}>  <FaNewspaper className={`${style.icon__new}`} />{t(" أخبار المشروع")}</p></div>
                        <div className={`${style.projectNews}`}>
                            <p className={`${style.paypal__para}`}>2022-12-01</p>
                            <p className={`${style.paypal__para}`}>{t("قمنا بإطلاق حملتنا التبرعية - دفء الحياة 11 - وكلنا أمل أنكم ستكونون بجانب من يحتاج لدعمكم.")}</p>
                        </div>
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}>  <FaProjectDiagram className={`${style.icon__new}`} />  {t("مشاريع ذات صلة ")}</p></div>
                        <div className={`${style.newProject}`}>
                            <div className={`${style.newProject__img}`}><img alt='' src={new1} className={`${style.newImg}`} /></div>
                            <div className={`${style.newProject__body}`}>
                                <h3 className={`${style.newProject__title}`}>قرية بسمة أمل</h3>
                                <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>42.512$</bold> {t("من اصل")} 50$ </p>
                                <ProgressBar now={10} className={`${style.progress} ${style.progress__new} `} />
                                <Button className={`${style.newProject__btn}`}>{t("ادعم المشروع")}</Button>
                            </div>
                        </div>

                    </Col>
                    <Col sm={12} xl={4}>

                        <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تبرع الان   للحالات عبر موقعنا ")}
                            </button>
                            <NumericInput value={priceShow ? priceShow : 20.00} className={`${style.price__input}`} /><BiDollar className={`${style.price__icon}`} />
                            <div className={`${style.price__choose}`}>
                                <button className={`${style.price__btn}`} onClick={() => { clickPrice(10.00) }}>10.00$</button>
                                <button className={`${style.price__btn}`} onClick={() => { clickPrice(25.00) }}>25.00$</button>
                                <button className={`${style.price__btn}`} onClick={() => { clickPrice(50.00) }}>50.00$</button>
                                <button className={`${style.price__btn}`} onClick={() => { clickPrice(100.00) }}>100.00$</button>
                            </div>
                            <div className={`${style.price__checkbox}`}>
                                <label><input type="checkbox" /><span className={`${style.price__para}`}>{t("تغطيه رسوم المعاملات 1.29$")}
                                </span></label>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} required />
                                </Form.Group>
                                <PhoneInput
                                    defaultCountry="EG"
                                    international
                                    error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                    value={formData.phone}
                                    name="phone"
                                    onChange={onChangeHandlerPhone}
                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                    required />
                            </Form>
                            <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcMastercard className={`${style.icon}`} /> {t(" للتبرع من خلال البطاقة الائتمانية ")}</p></div>
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><img src={paypal} alt="" className={`${style.imgpay} pay`} /></Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control type='number' name="number" className={`${style.input}`} placeholder={t(" رقم البطاقه الائتمانيه")} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم البطاقة الائتمانية")} required />
                                            </Form.Group>
                                            <div className={`${style.cvc}`}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control type='date' name="expiry" className={`${style.input}`} placeholder={t(" expiration date")} required />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control name="cvc" type="number" className={`${style.input}`} placeholder={t("كود التحقق من البطاقة ")} required />
                                                </Form.Group>
                                            </div>
                                            <Button type="submit" className={style.signup__btn}>
                                                تبرع الان
                                            </Button>
                                        </Form>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><img src={vodafon} alt="" className={`${style.imgpay}`} /></Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <PhoneInput
                                                defaultCountry="EG"
                                                international
                                                error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                                value={formData.phone}
                                                name="phone"
                                                onChange={onChangeHandlerPhone}
                                                className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                                required />
                                            <Button type="submit" className={style.signup__btn}>
                                                تبرع الان
                                            </Button>
                                        </Form>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}>{t(" للتبرع من خلال مندوبنا ")}</p></div>
                            <Accordion >
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><img src={delivery} alt="" className={`${style.imgpay}`} /></Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("العنوان")} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control type='date' name="expiry" className={`${style.input}`} required />
                                                <Form.Text className={`${style.date}`}>
                                                    تحديد ميعاد التبرع لارسال المندوب
                                                </Form.Text>
                                            </Form.Group>
                                            <Button type="submit" className={style.signup__btn}>
                                                تبرع الان
                                            </Button>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </aside>
                        {/*  <aside dir='rtl' className={`${style.aside}`}>
                        <button className={`${style.cardDetails__btn}`}>
                            {t("تبرع الان   للحالات عبر موقعنا ")}
                        </button>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("العنوان")} required />
                            </Form.Group>
                            <PhoneInput
                                defaultCountry="EG"
                                international
                                error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                value={formData.phone}
                                name="phone"
                                onChange={onChangeHandlerPhone}
                                className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                required />
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <select
                                    placeholder="اختر"
                                    className={`${style.input} ${style.select}`}
                                    name="food"
                                >
                                    <option>كميه الطعام للتبرع</option>
                                    <option>كرتونة  طعام 15 كيلو</option>
                                    <option>كرتونة  طعام 9 كيلو</option>
                                </select>
                                <Form.Text className={`${style.date}`}>
                                    <p>مكونات كرتونة فرحة رمضان 15 كيلو (350ج)

                                        أرز(4 أكياس) – مكرونة (7 أكياس) – سكر(1 كيس) – فاصوليا (1 كيس) – لوبيا (1 كيس) –فول (3 أكياس) – بلح (2 أكياس) – ملح (2 كيس) – صلصة (1 علبة) – زيت (1 زجاجة) -  شاي (1 علبة ) – لحوم (1 كيلو)</p>
                                    <p>مكونات كرتونة فرحة رمضان 9 كيلو (250ج)

                                        أرز(3 أكياس) – مكرونة (4 أكياس) – سكر(1 أكياس) – فاصوليا أو لوبيا (1 كيس) – فول (2 أكياس) – بلح (1 كيس) – ملح (2 كيس) – زيت (1 زجاجة) -  شاي (1 علبة )</p>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='date' name="expiry" className={`${style.input}`} required />
                                <Form.Text className={`${style.date}`}>
                                    تحديد ميعاد التبرع لارسال المندوب
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" className={style.signup__btn}>
                                تبرع الان
                            </Button>
                        </Form>
                    </aside> */}
                        {/* <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تطوع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("العنوان")} required />
                                </Form.Group>
                                <PhoneInput
                                    defaultCountry="EG"
                                    international
                                    error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                    value={formData.phone}
                                    name="phone"
                                    onChange={onChangeHandlerPhone}
                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                    required />
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control as="textarea" rows="3" name="help" className={`${style.textArea}`} placeholder={t("بماذا يمكنك المساعدة")} />
                                </Form.Group>
                                <Button type="submit" className={style.signup__btn}>
                                    تطوع الان
                                </Button>
                            </Form>
                        </aside>*/}
                        {/*  <aside dir='rtl' className={`${style.aside}`}>
                        <button className={`${style.cardDetails__btn}`}>
                            {t("تبرع الان   للحالات عبر موقعنا ")}
                        </button>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("العنوان")} required />
                            </Form.Group>
                            <PhoneInput
                                defaultCountry="EG"
                                international
                                error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                value={formData.phone}
                                name="phone"
                                onChange={onChangeHandlerPhone}
                                className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                required />
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control as="textarea" rows="3" name="help" className={`${style.textArea}`} placeholder={t("  ذكر الملابس المراد التطوع بها")} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <select
                                    placeholder="اختر"
                                    className={`${style.input} ${style.select}`}
                                    name="clothes"
                                >
                                    <option> نوع الملابس</option>
                                    <option>  سيدات </option>
                                    <option>   رجال</option>
                                    <option>   اطفال</option>
                                    <option>   الكل</option>
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <select
                                    placeholder="اختر"
                                    className={`${style.input} ${style.select}`}
                                    name=" clothesType"
                                >
                                    <option>الملابس صيفي ام شتوي</option>
                                    <option>  صيفي </option>
                                    <option>   شتوي</option>
                                    <option>   الكل</option>
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type='date' name="expiry" className={`${style.input}`} required />
                                <Form.Text className={`${style.date}`}>
                                    تحديد ميعاد التبرع لارسال المندوب
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" className={style.signup__btn}>
                                تبرع الان
                            </Button>
                        </Form>
                    </aside> */}
                        {/*  <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تطوع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("العنوان")} required />
                                </Form.Group>
                                <PhoneInput
                                    defaultCountry="EG"
                                    international
                                    error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                    value={formData.phone}
                                    name="phone"
                                    onChange={onChangeHandlerPhone}
                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                    required />
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control as="textarea" rows="3" name="help" className={`${style.textArea}`} placeholder={t("  الاثاث المراد التبرع بها")} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='date' name="expiry" className={`${style.input}`} required />
                                    <Form.Text className={`${style.date}`}>
                                        تحديد ميعاد التبرع لارسال المندوب
                                    </Form.Text>
                                </Form.Group>
                                <Button type="submit" className={style.signup__btn}>
                                    تبرع الان
                                </Button>
                            </Form>
                        </aside> */}
                    </Col>


                </Row>
            </Container >

        </>
    )
}
