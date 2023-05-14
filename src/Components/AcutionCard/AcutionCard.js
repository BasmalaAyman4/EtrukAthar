import React, { useEffect, useRef, useState } from 'react'
import style from "./AcutionCard.module.css"
import { Link } from 'react-router-dom'
import one from "../../assets/images/details2.jpeg"
import two from "../../assets/images/details3.jpeg"
import { AiFillEye, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import moment from 'moment';
import axios from 'axios';
export default function AcutionCard() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [dataAcution, setDataAcution] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
        price: '',
    })
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/index?lang=ar`)
            .then((response) => {
                setDataAcution({
                    name: response.data.cases.name,
                    description: response.data.cases.description,
                    date: response.data.cases.end_date,
                    time: response.data.cases.end_time,
                    price: response.data.cases.current_price,
                })
                console.log(response.data.cases.id)
            }).catch((err) => { console.log(err) })

    }, [])

    let interval = useRef();
    const f = `${dataAcution.time}`
    const d = `${dataAcution.date}`;
    const momentt = moment(d).format('LL')
    const final = momentt + " " + f

    const startTimer = () => {
        const countdownDate = new Date(final).getTime();
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
            <div>
                {dataAcution && dataAcution.map(acutionCard =>
                    /*   <Link to='/acution-details'> */
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
                            <h4 className={`${style.card__title}`}>{acutionCard.name}</h4>
                            <p className={`${style.card__acution}`}>{acutionCard.price}</p>
                        </div>
                    </div>
                    /*   </Link> */
                )}
                <div>

                </div>
            </div>
        </>
    )
}
