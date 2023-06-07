import React, { useEffect, useRef, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from "./AcutionDetails.module.css"
import one from "../../assets/images/one.jpg"
import two from "../../assets/images/two.jpg"
import three from "../../assets/images/thee.jpg"
import four from "../../assets/images/four.jpg"
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import "./acution.css";
import { CiLocationOn } from "react-icons/ci";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../DataAcutionHistory";
import AcutionCard from '../AcutionCard/AcutionCard';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import AnimatedPage from "../Global/AnimatedPage";
export default function AcutionDetails() {
    const mazadId = useParams()
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [count, setCount] = useState(0);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [active, setActive] = useState("description")
    const [mazadDetails, setMazadDetails] = useState({})
    const [mazadImage, setMazadUmage] = useState([])
    const [mazadHistory, setMazadHistory] = useState({})
    const [vendorName, setVendorName] = useState('')
    const [vendorEmail, setVedorEmail] = useState('')
    const [moreFromVendor, setMoreFromVendor] = useState([])
    const [increment, setIncrement] = useState(0)
    const [timeOver, setTimeOver] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const showActive = (view) => {
        setActive(view)
    }


    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/show/${mazadId.id}`)
            .then((response) => {
                setMazadDetails(response.data.mazad)
                setCount(Number(response.data.mazad.current_price))
                setIncrement(Number(response.data.mazad.mazad_amount))
                setMazadUmage(response.data.mazad.mazadimage)
                setVendorName(response.data.the_owner_name)
                setVedorEmail(response.data.the_owner_email)
                console.log(response.data.mazad, "kk")

            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/history/${mazadId.id}`)
            .then((response) => {
                setMazadHistory(response.data.history)
            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/othermazad/${mazadId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setMoreFromVendor(response.data.others)
            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])

    const date = moment(mazadDetails.end_date).format('LL')
    const none = (new Date(moment(mazadDetails.end_date).format('LL') + " " + mazadDetails.end_time).getTime()) - (new Date().getTime());
    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date(moment(mazadDetails.end_date).format('LL') + " " + mazadDetails.end_time).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance === 0) {

                setTimeOver(true)
                clearInterval(interval.current)
            } else {
                setTimeOver(false)
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }


    function handleStatus() {

        const timeStatus = new FormData();
        timeStatus.append("status", 'finished');
        axios.post(`https://otrok.invoacdmy.com/api/dashboard/mazad/update/${mazadId.id}`, timeStatus, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {

        }
        ).catch((err) => { toast.error(err.response.data.message) })
    }
    if (timeOver === true) {
        handleStatus()
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const handleReload = async () => {
        await delay(7000);
        window.location.reload();
    }
    const addBid = new FormData();
    addBid.append("vendor_paid", count);
    const incrementBid = () => {

        const toastId = toast.loading("...")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        console.log(count)
        axios.post(`https://otrok.invoacdmy.com/api/user/mazad/increment/${mazadId.id}`, addBid, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success('تمت العملية بنجاح')
                handleReload()
                console.log(response.data.vendor_paid)

            }
            ).catch((err) => console.log(err.response.data.message))

    }


    return (
        <AnimatedPage >
            <section className={`${style.acutionDetails}`}>
                <Container>
                    <div className={`${style.acutionDetails__body}`}>
                        <h5 className={`${style.acutionDetails__title}`}><Link to="/acution" className={`${style.acution}`}>{t("المزادات")}</Link> / {mazadDetails.name_ar}</h5>
                        <h2 className={`${style.acution__title}`}>{mazadDetails.name_ar}</h2>
                    </div>
                    <Row className={`${style.acution__desc}`}>
                        <Col className={`${style.images}`}>

                            <Carousel autoPlay interval="1000" transitionTime="1000" >
                                {mazadImage && mazadImage.map((imgSrc, index) => (
                                    <div>
                                        <img src={imgSrc.image} className={`${style.image}`} key={index} />
                                    </div>
                                ))}

                            </Carousel>

                        </Col>
                        <Col>
                            <div className={`${style.desc__body}`}>
                                <p className={`${style.desc__para}`}>{mazadDetails.description_ar}</p>
                                <h3 className={`${style.desc__paid}`}>{t("الدفع الحالي")} : <span className={`${style.desc__price}`}>${mazadDetails.current_price} </span></h3>
                            </div>
                            <div className={`${style.acutionTime}`}>
                                {none < 0 ? <p className={`${style.n}`} > {t("انتهى المزاد")}</p> : <p className={`${style.acutionTime__para}`}> {t("الوقت المتبقي")} : </p>}
                                {none < 0 ?
                                    ""
                                    :

                                    <div className={`${style.countdown}`} >
                                        <div className={`${style.countdownTime}`}>
                                            <p>{timerDays}</p>
                                            <span> {t("ايام")}</span>
                                        </div>
                                        <div className={`${style.countdownTime}`}>
                                            <p>{timerHours}</p>
                                            <span> {t("ساعات")}</span>
                                        </div>
                                        <div className={`${style.countdownTime}`}>
                                            <p>{timerMinutes}</p>
                                            <span> {t("دقائق")}</span>
                                        </div>
                                        <div className={`${style.countdownTime}`}>
                                            <p>{timerSeconds}</p>
                                            <span> {t("ثواني")}</span>
                                        </div>
                                    </div>
                                }

                                <p className={`${style.acutionTime__para}`}> {date} {mazadDetails.end_time}</p>
                                <div className={`${style.bid}`} >

                                    <div className={`${style.price}`} >
                                        <button onClick={() => setCount(count + increment)} className={`${style.increment__btn}`} >+</button>
                                        <input value={count} className={`${style.count}`} />
                                        <button className={`${style.decrement__btn}`}>-</button>
                                    </div>

                                    {((new Date(moment(mazadDetails.end_date).format('LL') + " " + mazadDetails.end_time).getTime()) - (new Date().getTime())) < 0
                                        ?
                                        ""
                                        :

                                        <button className={`${style.bid__btn}`} onClick={incrementBid}>{t("عطاء")}</button>
                                    }



                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${style.acution__info}`}>
                        <Link to='' className={`${active === "description" ? style.style__link : style.view__link}`} onClick={() => { showActive("description") }}>  {t("وصف")}</Link>
                        <Link to='' className={`${active === "history" ? style.style__link : style.view__link}`} onClick={() => { showActive("history") }}> {t("تاريخ المزاد")}</Link>
                        <Link to='' className={`${active === "info" ? style.style__link : style.view__link}`} onClick={() => { showActive("info") }}> {t("معلومات البائع")}</Link>
                        <Link to='' className={`${active === "vendor" ? style.style__link : style.view__link}`} onClick={() => { showActive("vendor") }}> {t("المزيد من البائع")}</Link>
                    </div>
                    <div className={`${active === "description" ? style.acution__info__body : style.none}`}>
                        <p className={`${style.acution__info__para}`}>{mazadDetails.description_ar}</p>
                    </div>
                    <div className={`${active === "history" ? style.acution__info__bodyy : style.none}`}>
                        <DataGrid
                            rows={mazadHistory}
                            columns={userColumns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick
                            getRowId={(row) => row.id}
                        />
                    </div>
                    <div className={`${active === "info" ? style.acution__info__body : style.none}`}>
                        <p className={`${style.info__para}`}> <AiOutlineUser className={`${style.info__icon}`} />{t("البائع")} : <span>{vendorName}</span> </p>
                        <p className={`${style.info__para}`}> <CiLocationOn className={`${style.info__icon}`} /> {t("البريد الالكتروني")} : <span> {vendorEmail}</span> </p>
                    </div>
                    <div className={`${active === "vendor" ? style.vendor__body : style.none}`}>
                        {moreFromVendor && moreFromVendor.map(acutionCard => (
                            <Link to={`acution-details/${acutionCard.id}`}>
                                <Col className={`${style.card}`}  >
                                    <div className={`${style.image}`}>
                                        <div className={`${style.flipCard}`}>
                                            <div className={`${style.flipCard__inner}`}>
                                                <div className={`${style.flipCard__front}`}>
                                                    <img src={acutionCard.mazadimage[0]?.image} alt="" />
                                                </div>
                                                <div className={`${style.flipCard__back}`}>
                                                    <img src={acutionCard.mazadimage[1]?.image} alt="" />
                                                </div>
                                            </div>
                                            <div className={`${style.acutionEnded}`}>
                                                <div >
                                                    {((new Date(moment(acutionCard.end_date).format('LL') + " " + acutionCard.end_time).getTime()) - (new Date().getTime())) < 0
                                                        ?
                                                        <p className={`${style.ended}`}> {t("انتهى المزاد")}</p>
                                                        :
                                                        ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h4 className={`${style.card__title}`}>{acutionCard.name}</h4>
                                        <p className={`${style.card__acution}`}> {t("الدفع الحالي")} : {acutionCard.current_price}</p>
                                    </div>
                                </Col>
                            </Link>
                        ))}

                    </div>

                </Container>
                <ToastContainer />
            </section>
        </AnimatedPage>
    )
}
