import React, { useState } from 'react'
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
export default function ProjectsDetails() {

    const [priceShow, setPriceshow] = useState("");
    function clickPrice(price) {
        setPriceshow("")
        setPriceshow(price)
        console.log(priceShow);
    }
    return (
        <>

            <Container>
                <div className={style.cardDetails}>
                    <aside dir='rtl' className={`${style.aside}`}>
                        <button className={`${style.cardDetails__btn}`}>تبرع الان عبر البطاقة البنكية</button>
                        <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcPaypal className={`${style.icon}`} /> للتبرع عبر Paypal</p></div>
                        <NumericInput value={priceShow ? priceShow : 20.00} className={`${style.price__input}`} /><BiDollar className={`${style.price__icon}`} />
                        <div className={`${style.price__choose}`}>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(10.00) }}>10.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(25.00) }}>25.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(50.00) }}>50.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(100.00) }}>100.00$</button>
                        </div>
                        <div className={`${style.price__checkbox}`}>
                            <label><input type="checkbox" /><span className={`${style.price__para}`}>تغطيه رسوم المعاملات 1.29$</span></label>
                        </div>
                        <button className={`${style.price__btn}`}> تبرع عبر paypal</button>
                        <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcMastercard className={`${style.icon}`} />  وسائل التبرع ألاخري </p></div>
                        <button className={`${style.cardDetails__btn}`}>وسائل الدفع الأخري</button>
                    </aside>
                    <section dir='rtl' className={`${style.cardDetails__info}`}>
                        <div className={`${style.cardDetails__body}`}>
                            <h3 className={`${style.cardDetails__title}`}>دفء الحياة 11</h3>
                            <p className={`${style.cardDetails__para}`}>مشروع رقم 45</p>
                            <hr />
                        </div>
                        <div className={`${style.collect}`}>
                            <p className={`${style.collect__para}`}>تم جمع <bold className={`${style.bold}`}>42.512$</bold> من اصل 50.000$ </p>
                            <ProgressBar now={88} className={`${style.progress} `} />
                        </div>
                        <div className={`${style.cardDetails__icon}`}>

                            <button className={`${style.icon__social} ${style.icon__social1}`}>
                                <FaWhatsapp className={`${style.i}`} />
                                <span>Whatsapp</span>
                            </button>

                            <button className={`${style.icon__social} ${style.icon__social2}`}>
                                <FaTelegram className={`${style.i}`} />
                                <span>Telegram</span>
                            </button>

                            <button className={`${style.icon__social} ${style.icon__social3}`}>
                                <FaFacebook className={`${style.i}`} />
                                <span>Facebook</span>
                            </button>
                            <button className={`${style.icon__social} ${style.icon__social4}`}>
                                <FaTwitter className={`${style.i}`} />
                                <span>Twitter</span>
                            </button>
                        </div>
                        <Player className={`${style.video}`} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={img1} />
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}>  تبرعك هو أملهم و نجاحهم, فكن عونا لهم </p></div>
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
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}>  <FaNewspaper className={`${style.icon__new}`} /> أخبار المشروع </p></div>
                        <div className={`${style.projectNews}`}>
                            <p className={`${style.paypal__para}`}>2022-12-01</p>
                            <p className={`${style.paypal__para}`}>قمنا بإطلاق حملتنا التبرعية - دفء الحياة 11 - وكلنا أمل أنكم ستكونون بجانب من يحتاج لدعمكم.</p>
                        </div>
                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}>  <FaProjectDiagram className={`${style.icon__new}`} />  مشاريع ذات صلة </p></div>
                        <div className={`${style.newProject}`}>
                            <div className={`${style.newProject__img}`}><img alt='' src={new1} className={`${style.newImg}`} /></div>
                            <div className={`${style.newProject__body}`}>
                                <h3 className={`${style.newProject__title}`}>قرية بسمة أمل</h3>
                                <p className={`${style.collect__para}`}>تم جمع <bold className={`${style.bold}`}>42.512$</bold> من اصل 50.000$ </p>
                                <ProgressBar now={10} className={`${style.progress} ${style.progress__new} `} />
                                <Button className={`${style.newProject__btn}`}>ادعم المشروع</Button>
                            </div>
                        </div>
                    </section>

                </div>
            </Container>
        </>
    )
}
