import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../EventDetails/EventDetails.module.css'
import imge from "../../assets/images/b.jpg"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import Modal from 'react-bootstrap/Modal';
import AnimatedPage from '../Global/AnimatedPage';
export default function CharityEventDetails() {
    const { t } = useTranslation()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [eventDetails, setEventDetails] = useState({})
    const [eventJoin, setEventJoin] = useState('')
    const eventsId = useParams()
    const [token, setToken] = useState(localStorage.getItem("token"))
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/event/show/${eventsId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setEventDetails(response.data.event)
                setEventJoin(response.data.count_volunteers)
            }).catch((err) => { console.log(err) })


    }, [currentLanguageCode])
    const onSubmitHandler = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()

        axios.get(`https://otrok.invoacdmy.com/api/user/event/join/${eventsId.id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error("يجب تسجيل الدخول اولا") })

    }
    return (
        <AnimatedPage >
            <Container>
                <Row className={`${style.row}`}>
                    <Col>
                        <img alt="" src={eventDetails.image} className={`${style.imge}`} />
                    </Col>
                    <Col>
                        <div className={`${style.rowBody}`}>

                            <h1 className={`${style.rowTitle} ${style.rowskew}`}> {eventDetails.name} </h1>

                            <p className={`${style.rowPara}`}>{eventDetails.description} </p>

                            <div className={`${style.join}`}>
                                <div className={`${style.socialIcon}`}>
                                    <p> :{t("شارك")}  </p>
                                    <div>
                                        <Link to='' className='me-3 text-reset '>
                                            <FaFacebook className={`${style.facebook}`} />
                                        </Link>
                                        <Link to='' className='me-3 text-reset '>
                                            <FaWhatsapp className={`${style.whatsapp}`} />
                                        </Link>
                                        <Link to='' className='me-3 text-reset '>
                                            <FaTwitter className={`${style.twitter}`} />
                                        </Link>
                                        <Link to='' className='me-3 text-reset'>
                                            <FaInstagram className={`${style.instagram}`} />
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${style.member}`}>
                                    <p className={`${style.memberPara}`}><span>{eventJoin}</span> {t("منضم بالفعل")}</p>
                                </div>
                            </div>

                            {!token ?
                                <>
                                    <button variant="primary" onClick={handleShow} className={`${style.btn}`}> {t("انضم للحملة")}</button>
                                    <Modal size="lg" show={show} onHide={handleClose} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                {t("للانضمام الي الحدث الان")}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <p className={`${style.para}`}> {t("يجب تسجيل للانضمام الي المناسبه ")} <a href='/login' className={`${style.link}`}>{t("تسجيل دخول")}</a></p>

                                        </Modal.Body>
                                    </Modal>
                                </>
                                :
                                <button className={`${style.btn}`} onClick={onSubmitHandler}> {t("انضم للحمله الان")}</button>
                            }
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </AnimatedPage>
    )
}
