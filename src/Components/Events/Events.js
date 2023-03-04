import React, { useState } from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import style from './Events.module.css'
import { BsListUl, BsCalendarEvent } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Link } from 'react-router-dom';
import EventCard from './../EventCard/EventCard'
import { Calendar } from 'antd';
import './event.css'
export default function Events() {
    const { t } = useTranslation()
    const [active, setActive] = useState(true)
    const showActive = (view) => {
        view === "list" ? setActive(true) : setActive(false)
    }
    return (
        <>
            <section className={`${style.events}`}>
                <HeaderTitle title={t("المناسبات")} para={t("المبلغ المجموع للمناسبات")} price='10.763.00$' />
                <Container>
                    <p className={`${style.events__para}`}>سعينا إلى جعل أي فرحة لكم مضاعفة بأجر لا يقدر بثمن</p>
                    <div className={`${style.eventsStyle}`}>
                        <div className={`${style.search}`}>
                            <select className={`${style.formSelect}`}>
                                <option>All Categories</option>
                                <option>Nightstand</option>
                                <option>&nbsp;&nbsp;&nbsp;coffer</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cradle</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dresser</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trundle bed</option>
                                <option>&nbsp;&nbsp;&nbsp;Commode</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cathedra</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confidante</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sideboard</option>
                                <option>&nbsp;&nbsp;&nbsp;Modern antique</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;curule chair</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;faldstool</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vargueno</option>
                            </select>
                            <input className={`${style.searchbox}`} type="text" name="serach" placeholder="Search Events..." />
                            <a className={`${style.search__link}`} href="/">SEARCH</a>
                        </div>
                        <div className={`${style.events__view}`}>
                            <a href='#' className={`${active ? style.style__link : style.view__link}`} onClick={() => { showActive("list") }}><BsListUl /> List View</a>
                            <a href='#' className={`${active ? style.calender__link : style.style__link}`} onClick={() => { showActive("calender") }}><BsCalendarEvent /> Calender</a>
                        </div>
                    </div>
                    <div className={`${style.events__body}`}>
                        <div className={`${active ? style.upcomingEvent : style.none}`}>
                            <h2 className={`${style.upcomingEvent__title}`}><RxCounterClockwiseClock /> الاحداث القادمة</h2>
                            <EventCard month='Feb' day='28' title='إنشائنا لقرية الحياة، والتي أنهت معاناة أكثر من مئتي عائلة مهجّرة ' time='3:00 PM - 4:00 PM EST' />
                            <EventCard month='Mar' day='2' title='تقديم المساعدة لطلاب الجامعات الذين يعيشون بعيداً عن ذويهم ' time='5:30 PM - 7:30 PM EST' />
                            <EventCard month='Mar' day='10' title='أشد ما يمكن أن يُشعر المهجّر بالعجز عدم وجود مصدر دخل يُعينه.' time='12:15 PM - 1:00 PM EST' />
                            <EventCard month='Mar' day='14' title='قلة العمل وإرتفاع الأسعار أدى لعدم القدرة على تأمين غذاء متكامل' time='1:00 PM - 2:00 PM EDT' />
                            <EventCard month='Feb' day='28' title='إنشائنا لقرية الحياة، والتي أنهت معاناة أكثر من مئتي عائلة مهجّرة ' time='3:00 PM - 4:00 PM EST' />
                            <EventCard month='Mar' day='2' title='تقديم المساعدة لطلاب الجامعات الذين يعيشون بعيداً عن ذويهم ' time='5:30 PM - 7:30 PM EST' />
                            <EventCard month='Mar' day='10' title='أشد ما يمكن أن يُشعر المهجّر بالعجز عدم وجود مصدر دخل يُعينه.' time='12:15 PM - 1:00 PM EST' />
                            <EventCard month='Mar' day='14' title='قلة العمل وإرتفاع الأسعار أدى لعدم القدرة على تأمين غذاء متكامل' time='1:00 PM - 2:00 PM EDT' />
                        </div>
                        <div className={`${active ? style.none : style.upcomingEvent}`}>
                            <h2 className={`${style.upcomingEvent__title}`}><BsCalendarEvent /> تقويم الاحداث</h2>
                            <Calendar
                                className={`${style.CalendarStyle}`}
                                dateCellRender={(date) => {
                                    if (new Date(date).getDate() === 28 && new Date(date).getMonth() === 1) {
                                        return <p className={`${style.hint}`}> انشاء قرية الحياه </p>
                                    }
                                    if (new Date(date).getDate() === 2 && new Date(date).getMonth() === 2) {
                                        return <p className={`${style.hint}`}>  تقديم المساعدة </p>
                                    }
                                    if (new Date(date).getDate() === 10 && new Date(date).getMonth() === 2) {
                                        return <p className={`${style.hint}`}> مصادر دخل   </p>
                                    }
                                    if (new Date(date).getDate() === 14 && new Date(date).getMonth() === 2) {
                                        return <p className={`${style.hint}`}> غذاء متكامل   </p>
                                    }

                                }} />
                        </div>

                        <div className={`${style.otherEvent}`}>
                            <div className={`${style.annualEvents}`}>
                                <h2 className={`${style.annualEvents__title}`} >الاحداث السنوية</h2>
                                <Link to='#' className={`${style.annualEvents__link}`}>حمله البذور و العقائق</Link>
                                <Link to='#' className={`${style.annualEvents__link}`}>حمله اعاله الاطفال </Link>
                            </div>
                            <div className={`${style.annualEvents} ${style.otherEvents}`}>
                                <h2 className={`${style.annualEvents__title}`} >مناسبات اخري</h2>
                                <p className={`${style.annualEvents__para}`}> الكارثة كبيرة و حجم الضرر مهول و كما قال النبي محمد (ﷺ) " المؤمن للمؤمن كالبنيان يشد بعضه بعضاً ".</p>
                                <p className={`${style.annualEvents__para}`}>عملنا على توزيع المواد الغذاية و المدافئ ومواد التدفئة والوجبات السريعة و الفواكه على العوائل المتضررة جراء الزلزال</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

        </>
    )
}
