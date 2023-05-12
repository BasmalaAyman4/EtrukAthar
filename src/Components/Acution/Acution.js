import React, { useEffect, useRef, useState } from 'react'
import style from "./Acution.module.css"
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import acutionImg from "../../assets/images/section-border.png"
import one from "../../assets/images/details2.jpeg"
import two from "../../assets/images/details3.jpeg"
import { AiFillEye, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AcutionCard from '../AcutionCard/AcutionCard'
export default function Acution() {
    const { t } = useTranslation()
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('May 30 , 2023 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
    return (
        <>
            <section className={`${style.acutions}`}>
                <HeaderTitle title={t("المزادات")} para={t("المبلغ المجموع للمزادات")} price='1.037.976.07$' />
                <div className={`${style.acution}`}>
                    <div className={`${style.acutionBody}`}>
                        <h2 className={`${style.acutionBody__title}`}>اخر المزادات المضافة</h2>
                        <img alt="" src={acutionImg} className={`${style.acutionBody__img}`} />
                    </div>
                    <Container>
                        <div className={`${style.AcutionCards}`}>
                            <AcutionCard />
                            <div className={`${style.card}`}>
                                <div className={`${style.image}`}>
                                    <div className={`${style.flipCard}`}>
                                        <div className={`${style.flipCard__inner}`}>
                                            <div className={`${style.flipCard__front}`}>
                                                <img src={one} alt="" />
                                            </div>
                                            <div className={`${style.flipCard__back}`}>
                                                <img src={two} alt="" />
                                            </div>
                                        </div>
                                        <div className={`${style.acutionIcons}`}>
                                            <div className={`${style.icons}`}>
                                                <a href=""><AiFillEye className={`${style.icon}`} /></a>
                                                <a href=""><AiOutlineSearch className={`${style.icon}`} /></a>
                                                <a href=""><AiOutlineHeart className={`${style.icon}`} /></a>
                                            </div>
                                        </div>
                                        <div className={`${style.acutionCountdown}`}>
                                            <div className={`${style.countdown}`}>
                                                <div>
                                                    <p>{timerDays}</p>
                                                    <span>Days</span>
                                                </div>
                                                <span className={`${style.countdown__dot}`}> : </span>
                                                <div>
                                                    <p>{timerHours}</p>
                                                    <span>Hours</span>
                                                </div>
                                                <span className={`${style.countdown__dot}`}> : </span>
                                                <div>
                                                    <p>{timerMinutes}</p>
                                                    <span>Minutes</span>
                                                </div>
                                                <span className={`${style.countdown__dot}`}> : </span>
                                                <div>
                                                    <p>{timerSeconds}</p>
                                                    <span>Seconds</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.cardBody}`}>
                                    <h4 className={`${style.card__title}`}>Orange Fiat 500</h4>
                                    <p className={`${style.card__acution}`}>Current Bid: $500,000.00</p>
                                </div>
                            </div>
                            <AcutionCard />
                        </div>
                    </Container>
                </div>
            </section>

        </>
    )
}
