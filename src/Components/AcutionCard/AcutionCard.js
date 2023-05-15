import React, { useEffect, useRef, useState } from 'react'
import style from "./AcutionCard.module.css"
import { Link } from 'react-router-dom'
import one from "../../assets/images/details2.jpeg"
import two from "../../assets/images/details3.jpeg"
import { AiFillEye, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import moment from 'moment';
import axios from 'axios';
export default function AcutionCard() {

    const [dataAcution, setDataAcution] = useState([])
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/index?lang=ar`)
            .then((response) => {
                setDataAcution(response.data.cases)
            }).catch((err) => { console.log(err) })
    }, [])
    const timeAndDate = []
    dataAcution && dataAcution.map(acutionCard =>
        timeAndDate.push(new Date(moment(acutionCard?.end_date).format('LL') + " " + acutionCard?.end_time).getTime() - new Date().getTime())
    )
    const [timeArr, setTimeArr] = useState([])
    let interval = useRef();
    const startTimer = () => {
        interval = setInterval(() => {
            const d = timeAndDate.map(x => Math.floor(x / (1000 * 60 * 60 * 24)));
            const h = timeAndDate.map(x => Math.floor((x % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
            const m = timeAndDate.map(x => Math.floor((x % (1000 * 60 * 60) / (1000 * 60))));
            const s = timeAndDate.map(x => Math.floor((x % (1000 * 60)) / 1000));
            let time = d.map((day, index_value) => {
                return {
                    day: day,
                    hour: h[index_value],
                    min: m[index_value],
                    sec: s[index_value],
                };
            });
            setTimeArr(time)
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

            <div className={`${style.AcutionCards}`}>
                {timeArr && timeArr.map((time, index) =>
                    <>
                        {dataAcution && dataAcution.map(acutionCard => (
                            <Link to={`acution-details/${acutionCard.id}`}>
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
                                                    <a href="/"><AiFillEye className={`${style.icon}`} /></a>
                                                    <a href="/"><AiOutlineSearch className={`${style.icon}`} /></a>
                                                    <a href="/"><AiOutlineHeart className={`${style.icon}`} /></a>
                                                </div>
                                            </div>
                                            <div className={`${style.acutionCountdown}`}>
                                                <div className={`${style.countdown}`}>
                                                    <>
                                                        <div>
                                                            <p>{time?.day}</p>
                                                            <span>Days</span>
                                                        </div>
                                                        <span className={`${style.countdown__dot}`}> : </span>
                                                        <div>
                                                            <p>{time?.hour}</p>
                                                            <span>Hours</span>
                                                        </div>
                                                        <span className={`${style.countdown__dot}`}> : </span>
                                                        <div>
                                                            <p>{time?.min}</p>
                                                            <span>Minutes</span>
                                                        </div>
                                                        <span className={`${style.countdown__dot}`}> : </span>
                                                        <div>
                                                            <p>{time?.sec}</p>
                                                            <span>Seconds</span>
                                                        </div>
                                                    </>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h4 className={`${style.card__title}`}>{acutionCard.name}</h4>
                                        <p className={`${style.card__acution}`}>{acutionCard.description}</p>
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </>
                )}
                <div>

                </div>
            </div>
        </>
    )
}