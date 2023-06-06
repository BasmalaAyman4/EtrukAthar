import React, { useState, useEffect } from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Events.module.css'
import { BsListUl, BsCalendarEvent, BsGrid3X3 } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Link } from 'react-router-dom';
import EventCard from './../EventCard/EventCard'
import { Calendar } from 'antd';
import './event.css'
import moment from 'moment/moment'
import axios from 'axios'
export default function Events() {
    const { t } = useTranslation()
    const [event, setEvent] = useState([]);
    const [active, setActive] = useState(true)
    const showActive = (view) => {
        view === "list" ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/event/index`)
            .then(response => {
                setEvent(response.data.result)
            }
            ).catch((err) => { console.log(err) })

    });



    /*     const dateIn = moment("2023-03-02");
    
        const month = dateIn.format('M');
        const day = dateIn.format('D'); */

    return (
        <>
            <section className={`${style.events}`}>
                <HeaderTitle title={t(" المناسبات")} para={t("المبلغ المجموع للمناسبات")} price='10.763.00$' />
                <Container>
                    <p className={`${style.events__para}`}> {t("سعينا إلى جعل أي فرحة لكم مضاعفة بأجر لا يقدر بثمن")} </p>
                    <div className={`${style.eventsStyle}`}>
                        <div>
                        </div>
                        <div className={`${style.events__view}`}>
                            <Link to='' className={`${active ? style.style__link : style.view__link}`} onClick={() => { showActive("list") }}><BsListUl /> {t("عرض الاحداث")}</Link>
                            <Link to='' className={`${active ? style.calender__link : style.style__link}`} onClick={() => { showActive("calender") }}><BsGrid3X3 /> {t("عرض الاحداث")}</Link>
                        </div>
                    </div>
                    <Row>
                        {/* <div className={`${style.events__body}`}> */}
                        <Col lg="7">
                            <div className={`${active ? style.upcomingEvent : style.none}`}>
                                <h2 className={`${style.upcomingEvent__title}`}><RxCounterClockwiseClock /> {t("الاحداث القادمة")}</h2>
                                {event && event.map(eventCard =>
                                    <EventCard id={eventCard.id}
                                        month={moment(eventCard.start_date).format("MMM")}
                                        day={moment(eventCard.start_date).format("Do")}
                                        title={eventCard.name}
                                        para={eventCard.description}
                                        time={`(${moment(eventCard.start_time, ["HH:mm"]).format("hh:mm a")}) الي ( ${moment(eventCard.end_time, ["HH:mm"]).format("hh:mm a")} )`}
                                    />
                                )}
                            </div>
                            <div className={`${active ? style.none : style.upcomingEvent}`}>
                                <h2 className={`${style.upcomingEvent__title}`}><BsGrid3X3 />  {t("الاحداث القادمة")}</h2>
                                <Row>
                                    {event && event.map(eventCard =>
                                        <Link to={`/event-details/${eventCard.id}`}>
                                            <Col lg="6">
                                                <div className={`${style.card} ${style.event}`}>
                                                    <div className={`${style.header}`}>
                                                        <div className={`${style.image}`}>
                                                            <img src={eventCard.image} alt="" />
                                                            <span className={`${style.tag}`}>{eventCard.start_date}</span>
                                                        </div>
                                                    </div>
                                                    <div className={`${style.info}`}>
                                                        <a href="#" class="block">
                                                            <h4 className={`${style.title}`}>{eventCard.name}</h4>
                                                            <p>{eventCard.description}</p>
                                                        </a>

                                                    </div>

                                                    <button className={`${style.caseBtn}`}>Read More </button>
                                                </div>
                                            </Col>
                                        </Link>
                                    )}
                                </Row>
                            </div>
                        </Col>
                        <Col lg="5">
                            <div className={`${style.otherEvent}`}>
                                <div className={`${style.annualEvents}`}>
                                    <h2 className={`${style.annualEvents__title}`} >{t("الاحداث السنوية")}</h2>
                                    <Link to='#' className={`${style.annualEvents__link}`}>حمله البذور و العقائق</Link>
                                    <Link to='#' className={`${style.annualEvents__link}`}>حمله اعاله الاطفال </Link>
                                </div>
                                <div className={`${style.annualEvents} ${style.otherEvents}`}>
                                    <h2 className={`${style.annualEvents__title}`} >{t("مناسبات اخري")}</h2>
                                    <p className={`${style.annualEvents__para}`}> {t("الكارثة كبيرة و حجم الضرر مهول و كما قال النبي محمد (ﷺ)  المؤمن للمؤمن كالبنيان يشد بعضه بعضاً ")}</p>
                                    <p className={`${style.annualEvents__para}`}>{t("عملنا على توزيع المواد الغذاية و المدافئ ومواد التدفئة والوجبات السريعة و الفواكه على العوائل المتضررة جراء الزلزال")} </p>
                                </div>
                            </div>
                        </Col>
                        {/* </div> */}
                    </Row>
                </Container>
            </section >

        </>
    )
}
