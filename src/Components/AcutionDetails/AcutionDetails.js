import React, { useEffect, useRef, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from "./AcutionDetails.module.css"
import one from "../../assets/images/one.jpg"
import two from "../../assets/images/two.jpg"
import three from "../../assets/images/thee.jpg"
import four from "../../assets/images/four.jpg"
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./acution.css";
import { CiLocationOn } from "react-icons/ci";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../DataAcutionHistory";
import AcutionCard from '../AcutionCard/AcutionCard';
export default function AcutionDetails() {
    const [count, setCount] = useState(0);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [active, setActive] = useState("description")
    const showActive = (view) => {
        setActive(view)

    }
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
    const incrementCount = () => {
        setCount(count + 5);
    }
    const decrementCount = () => {
        setCount(count - 5);
    }
    const rows = [
        { id: 1, date: 'May 9, 2023 9:28 am', bid: '$500', user: 'admin' },
        { id: 2, date: 'May 8, 2023 9:28 am', bid: '$500', user: 'admin' },
        { id: 3, date: 'May 7, 2023 9:28 am', bid: '$500', user: 'admin' },
        { id: 4, date: 'May 6, 2023 9:28 am', bid: '$500', user: 'admin' },


    ];
    return (
        <>
            <section className={`${style.acutionDetails}`}>
                <Container>
                    <div className={`${style.acutionDetails__body}`}>
                        <h5 className={`${style.acutionDetails__title}`}><Link to="/acution" className={`${style.acution}`}>Acutions</Link> / Orange Fiat 500</h5>
                        <h2>Orange Fiat 500</h2>
                        <p className={`${style.acutionDetails__para}`}> <AiFillEye /> 1.586 Views</p>
                    </div>
                    <Row className={`${style.acution__desc}`}>
                        <Col className={`${style.images}`}>

                            <Carousel autoPlay interval="1000" transitionTime="1000" >
                                <div>
                                    <img src={one} className={`${style.image}`} />
                                </div>
                                <div>
                                    <img src={two} className={`${style.image}`} />
                                </div>
                                <div>
                                    <img src={three} className={`${style.image}`} />
                                </div>
                                <div>
                                    <img src={four} className={`${style.image}`} />
                                </div>
                            </Carousel>

                        </Col>
                        <Col>
                            <div className={`${style.desc__body}`}>
                                <p className={`${style.desc__para}`}>Samsung Galaxy S9 smartphone was launched in March 2018. The phone comes with a 5.80-inch touchscreen display with a resolution of 1440 pixels by 2960 pixels at a PPI of 568 pixels per inch. Samsung Galaxy S9 price in India starts from Rs. 51,990.</p>
                                <h3 className={`${style.desc__paid}`}>Current bid: <span className={`${style.desc__price}`}>$150,000,000,004.00 </span></h3>
                            </div>
                            <div className={`${style.acutionTime}`}>
                                <p className={`${style.acutionTime__para}`}>Item condition: Used</p>
                                <p className={`${style.acutionTime__para}`}>Time Left: </p>
                                <div className={`${style.countdown}`}>
                                    <div className={`${style.countdownTime}`}>
                                        <p>{timerDays}</p>
                                        <span>Days</span>
                                    </div>
                                    <div className={`${style.countdownTime}`}>
                                        <p>{timerHours}</p>
                                        <span>Hours</span>
                                    </div>
                                    <div className={`${style.countdownTime}`}>
                                        <p>{timerMinutes}</p>
                                        <span>Minutes</span>
                                    </div>
                                    <div className={`${style.countdownTime}`}>
                                        <p>{timerSeconds}</p>
                                        <span>Seconds</span>
                                    </div>
                                </div>
                                <p className={`${style.acutionTime__para}`}>Acution ends: May 30,2023 12:00 am</p>
                                <div className={`${style.bid}`} >
                                    <div className={`${style.price}`} >
                                        <button onClick={incrementCount} className={`${style.increment__btn}`} >+</button>
                                        {count}
                                        <button onClick={decrementCount} className={`${style.decrement__btn}`}>-</button>
                                    </div>
                                    <Link to="" className={`${style.bid__btn}`}>BID</Link>
                                    <AiFillEye className={`${style.bid__icon}`} />
                                    <AiOutlineHeart className={`${style.bid__icon}`} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${style.acution__info}`}>
                        <Link to='' className={`${active === "description" ? style.style__link : style.view__link}`} onClick={() => { showActive("description") }}> DESCRIPTION</Link>
                        <Link to='' className={`${active === "history" ? style.style__link : style.view__link}`} onClick={() => { showActive("history") }}>AUCTION HISTORY</Link>
                        <Link to='' className={`${active === "info" ? style.style__link : style.view__link}`} onClick={() => { showActive("info") }}>VENDOR INFO</Link>
                        <Link to='' className={`${active === "vendor" ? style.style__link : style.view__link}`} onClick={() => { showActive("vendor") }}>MORE FROM VENDOR</Link>
                    </div>
                    <div className={`${active === "description" ? style.acution__info__body : style.none}`}>
                        <p className={`${style.acution__info__para}`}>Going forward knowledge is power or we need to button up our approach old boys club. Please use “solutionise” instead of solution ideas! 🙂 draw a line in the sand, for take five, punch the tree, and come back in here with a clear head. Out of scope data-point work flows , nor critical mass, and time to open the kimono yet move the needle.</p>
                        <p className={`${style.acution__info__para}`}>You better eat a reality sandwich before you walk back in that boardroom fire up your browser, so come up with something buzzworthy, for it’s about managing expectations yet baseline into the weeds. Gain traction product management breakout fastworks we just need to put these last issues to bed, or table the discussion </p>
                    </div>
                    <div className={`${active === "history" ? style.acution__info__body : style.none}`}>
                        <DataGrid

                            rows={rows}
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
                        />
                    </div>
                    <div className={`${active === "info" ? style.acution__info__body : style.none}`}>
                        <p className={`${style.info__para}`}> <AiOutlineUser className={`${style.info__icon}`} /> Vendor : <span>Basmala</span> </p>
                        <p className={`${style.info__para}`}> <CiLocationOn className={`${style.info__icon}`} /> Address: <span> Helwan</span> </p>
                    </div>
                    <div className={`${active === "vendor" ? style.vendor__body : style.none}`}>
                        <AcutionCard />
                        <AcutionCard />
                        <AcutionCard />
                    </div>
                </Container>
            </section>
        </>
    )
}
