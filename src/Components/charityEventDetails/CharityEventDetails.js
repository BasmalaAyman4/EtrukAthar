import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./CharityEventDetails.module.css"
import imge from "../../assets/images/b.jpg"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next'

export default function CharityEventDetails() {
    const { t } = useTranslation()
    const [eventDetails, setEventDetails] = useState({})
    const eventsId = useParams()
    const [token, setToken] = useState(localStorage.getItem("token"))
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/event/show/${eventsId.id}?lang=ar`)
            .then((response) => {
                setEventDetails(response.data.event)
            }).catch((err) => { console.log(err) })


    }, [])
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
        <>
            <Container>
                <Row className={`${style.row}`}>
                    <Col>
                        <img alt="" src={imge} className={`${style.imge}`} />
                    </Col>
                    <Col>
                        <div className={`${style.rowBody}`}>
                            <h1 className={`${style.rowTitle}`}> world</h1>
                            <h1 className={`${style.rowTitle} ${style.rowskew}`}> orphan </h1>
                            <h1 className={`${style.rowTitle}`}> day</h1>
                            <p className={`${style.rowPara}`}>World Refugee Day is an international day designated by the United nations to honour refugees around the globe. It falls each year on June 20 and celebrates the strength and courage of people who have been forced to flee their home country to escape confict or persecution.</p>
                            <p className={`${style.rowPara}`}>It shines a light on the rights, needs and dreams of refugees, helping to mobilize political will and resources so refugees can not only survive but also thrive.</p>
                            <h3 className={`${style.refugee}`}>#{eventDetails.name_en}</h3>
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
                                    <p className={`${style.memberPara}`}><span>3.109.258</span> {t("منضم بالفعل")}</p>
                                </div>
                            </div>
                            <button className={`${style.btn}`} onClick={onSubmitHandler}> {t("انضم للحملة")}</button>
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}
