

import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import style from './../ProjectsDetails/ProjectsDetails.module.css'
import './../ProjectsDetails/projectDetails.css'
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import moment from 'moment'
import EditCase from '../EditCase/EditCase';
export default function CaseDetailsUser() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [formData, setFormData] = useState({})
    const casesId = useParams()
    const [priceShow, setPriceshow] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function clickPrice(price) {
        setPriceshow("")
        setPriceshow(price)
    }
    const [donateData, setDonateData] = useState({
        name: '',
        email: '',
        numbercard: '',
        namecard: '',
        cvc: '',
        phone: '',
        address: '',
        city: '',
        city: '',
        expiry: '',
        helpDescription: '',
        food: '',
        dateSend: '',
        amoutDescriptipn: '$',
        amount: ''
    })
    const date = moment(donateData.dateSend).format()
    console.log(date, "date")
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/${casesId.id}?lang=ar`)
            .then((response) => {
                setFormData(response.data.case)
            }).catch((err) => { console.log(err) })
    }, [])
    const storeDonate = new FormData();
    storeDonate.append("name", donateData.name);
    storeDonate.append("email", donateData.email);
    storeDonate.append("phone", donateData.phone);
    storeDonate.append("address", donateData.address);
    storeDonate.append("city", donateData.city);
    storeDonate.append("date_to_send", date);
    storeDonate.append("description", donateData.helpDescription);
    storeDonate.append("amount_description", donateData.food);
    storeDonate.append("amount_financial", priceShow);
    storeDonate.append("amount", donateData.amount);
    storeDonate.append("amount_description", donateData.amoutDescriptipn);
    storeDonate.append("casee_id", casesId.id);
    storeDonate.append("donationtype_id", formData.donationtype_id);
    const onSubmitHandlerFinancial = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/donation/financial/user", storeDonate, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/donation/financial/guest", storeDonate, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
    }
    const onSubmitHandlerVolunteer = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/donation/volunteering/user", storeDonate, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/donation/volunteering/guest", storeDonate, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
    }
    const onSubmitHandlerFood = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/donation/food/user", storeDonate, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/donation/food/guest", storeDonate, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
    }
    const onSubmitHandlerClothes = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/donation/clothes/user", storeDonate, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/donation/clothes/guest", storeDonate, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
    }
    const onSubmitHandlerFurniture = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/donation/furniture/user", storeDonate, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/donation/furniture/guest", storeDonate, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
    }
    const onChangeHandler = e => {
        setDonateData({ ...donateData, [e.target.name]: e.target.value })
    }
    const onChangeHandlerPhone = data => {
        setDonateData({ ...donateData, phone: data })
    }
    const { t } = useTranslation()
    /*     const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        let newDate = `${year}-${day}-${month}`;
        return newDate;
    };
    formatDate(donateData.expiry) */
    return (
        <>

            <Container>
                <Row dir='' className='mt-5 '>
                    <Col sm={12} xl={10} dir='rtl' >

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
                            <button onClick={handleShow} className={`${style.cardDetails__btn}`} >
                                تعديل الحاله
                            </button>
                        </div>
                        <EditCase show={show} onHide={handleClose} setShow={setShow} />
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
                  
                </Row>
                <ToastContainer />
            </Container >

        </>
    )
}
