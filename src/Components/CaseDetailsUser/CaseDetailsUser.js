

import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import style from './../ProjectsDetails/ProjectsDetails.module.css'
import './../ProjectsDetails/projectDetails.css'
import { FaCcPaypal, FaCcMastercard, FaWhatsapp, FaTwitter, FaFacebook, FaTelegram, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
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
import 'react-phone-number-input/style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import EditCase from '../EditCase/EditCase';
import Cookies from 'js-cookie'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton } from 'react-share';
export default function CaseDetailsUser() {
    const [formData, setFormData] = useState({})
    const [image, setImage] = useState([]);
    const casesId = useParams()
    const { t } = useTranslation()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/${casesId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setFormData(response.data.case)
                setImage(response.data.case.caseimage)
            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    return (
        <>

            <Container className="test-center">
                <Row dir='' className='mt-5 '>
                    <Col sm={12}   dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} >

                        <div className={`${style.cardDetails__body}`}>

                            <h3 className={`${style.cardDetails__title}`}>{formData.name}</h3>
                            <p className={`${style.cardDetails__para}`}>{t("مشروع رقم")} {formData.id}</p>
                            <hr />
                        </div>
                        <div className={`${style.collect}`}>
                            <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t('ج')}</bold> {t("من اصل")} {formData.initial_amount}</p>
                            <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                        </div>
                        <div className={`${style.cardDetails__icon}`}>
                            <Row>
                                <Col md={3}  >
                                    <WhatsappShareButton
                                        className={`${style.icon__social} ${style.icon__social1}`}
                                        url={`https://etruk-athra.invoacdmy.com/userCase/${formData.id}`}
                                    >
                                        <FaWhatsapp className={`${style.i}`} />
                                        <span> {t("واتساب")}</span>
                                    </WhatsappShareButton>
                                </Col>
                                <Col md={3}  >
                                    <TelegramShareButton
                                        className={`${style.icon__social} ${style.icon__social2}`}
                                        url={`https://etruk-athra.invoacdmy.com/userCase/${formData.id}`}
                                    >
                                        <FaTelegram className={`${style.i}`} />
                                        <span> {t("تيليجرام")}</span>
                                    </TelegramShareButton>
                                </Col>
                                <Col md={3}  >
                                    <FacebookShareButton
                                        className={`${style.icon__social} ${style.icon__social3}`}
                                        url={`https://etruk-athra.invoacdmy.com/userCase/${formData.id}`}
                                    >
                                        <FaFacebook className={`${style.i}`} />
                                        <span> {t("فيسبوك")}</span>
                                    </FacebookShareButton>
                                </Col>
                                <Col md={3} >
                                    <TwitterShareButton
                                        className={`${style.icon__social} ${style.icon__social4}`}
                                        url={`https://etruk-athra.invoacdmy.com/userCase/${formData.id}`}
                                    >
                                        <FaTwitter className={`${style.i}`} />
                                        <span> {t("تويتر")}</span>
                                    </TwitterShareButton>
                                </Col>

                            </Row>
                            {
                                formData.status === "rejected" ? <p className={`${style.rej}`}>{t("الحالة مرفوضة")}</p> :
                                    <button onClick={handleShow} className={`${style.cardDetails__btn}`} >
                                        {t("تعديل الحالة")}
                                    </button>
                            }

                            <Link to={formData.file}>{t("الملف التعريفي الخاص بالحالة و وصفها")}</Link>
                        </div>
                        <EditCase show={show} onHide={handleClose} setShow={setShow} />
                        <div >
                            <p className={`${style.details__para} ${style.desc__para}`}>{formData.description}</p>
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
                            {!image.length ?

                                <SwiperSlide>
                                    <img src={imgNull} alt='' />
                                </SwiperSlide>

                                :
                                <>
                                    {image && image.map((imgSrc, index) => (<SwiperSlide><img src={imgSrc.image} key={index} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>))}
                                </>
                            }
                        </Swiper>


                    </Col>

                </Row>
                <ToastContainer />
            </Container >

        </>
    )
}
