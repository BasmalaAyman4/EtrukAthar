import React, { useState, useEffect } from 'react'
import style from "./CharityDetails.module.css"
import ch from "../../assets/images/charity.jpeg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import v from "../../assets/images/v.jpg"
import volunteer from "../../assets/images/volun.PNG"
import fun from "../../assets/images/fun.PNG"
import orphan from "../../assets/images/orphan.PNG"
import support from "../../assets/images/love.PNG"
import food from "../../assets/images/food.PNG"
import edu from "../../assets/images/edu.PNG"
import don from "../../assets/images/don2.jpg"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios'
export default function CharityDetails() {
    const carityId = useParams()
    const [carityData, setCarityData] = useState({})
    const [categoryData, setCategoryData] = useState([])
    const [caseData, setCaseData] = useState([])
    const [eventData, setEventData] = useState([])
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/charity/show/${carityId.id}`)
            .then((response) => {
                setCarityData(response.data.charity)

            }).catch((err) => { console.log(err) })

        axios.get(`http://otrok.invoacdmy.com/api/dashboard/category/index`)
            .then((response) => {
                setCategoryData(response.data.Categories)
            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/charity/cases/1`)
            .then((response) => {
                setCaseData(response.data.cases)
            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/charity/events/1?lang=ar`)
            .then((response) => {
                setEventData(response.data.result)
            }).catch((err) => { console.log(err) })
    }, [])
    console.log(categoryData)
    return (
        <>
            <section>
                <div  >
                    <img src={ch} alt="" className={`${style.ch}`} />
                </div>
                <Container>
                    <Row className={`${style.about}`}>
                        <Col><img src={v} alt="" className={`${style.imgAbout}`} /></Col>
                        <Col>
                            <h2 className={`${style.aboutusTitle}`}>{carityData.name} Us</h2>
                            <div>
                                <h1 className={`${style.aboutTitle}`}>{carityData.name} work for poor people to give them a happy life</h1>
                                <p className={`${style.aboutPara}`}>The SpreadLove non-profit organization and its board are work for the people who are struggling in their daily life activities.</p>
                                <h2 className={`${style.aboutTake}`}>We takes various donations:</h2>
                                <div className={`${style.checkList}`}>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Food Donation</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Toy Donation</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Money Donation</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Water Supply</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Dress Donation</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>Education Donation</label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${style.causes}`}>
                        <h2 className={`${style.globalCauses}`}>Global Causes</h2>
                        <h1 className={`${style.causesTitle}`}>Spread Love With Donation </h1>
                        <p className={`${style.causesPara}`}>Here are some of categories which sector we work regularly</p>
                    </div>
                    <div className={`${style.donation}`}>
                        {categoryData && categoryData.map(category =>
                            <Link>
                                <div className={`${style.donationType}`}>
                                    <img src={volunteer} alt="" />
                                    <p>{category.name_en}</p>
                                </div>
                            </Link>
                        )}
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={volunteer} alt="" />
                                <p>Volunteering</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={fun} alt="" />
                                <p>Relief Funding</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={edu} alt="" />
                                <p>Top Education</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={food} alt="" />
                                <p>Giving Food</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={support} alt="" />
                                <p>Medical Support</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={`${style.donationType}`}>
                                <img src={orphan} alt="" />
                                <p>Orphan Support</p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${style.causes}`}>
                        <h2 className={`${style.globalCauses}`}>Most Urgent</h2>
                        <h1 className={`${style.causesTitle}`}>Ongoing Project </h1>
                        <p className={`${style.causesPara}`}>Here are some urgnt ongoing project which need to complete very soon</p>
                    </div>
                    <div className={`${style.project}`}>
                        {caseData && caseData.map(caseCard =>
                            <div className={`${style.card}`}>
                                <div className={`${style.header}`}>
                                    <div className={`${style.image}`}>
                                        <img src={caseCard.image} alt="" />
                                        <span className={`${style.tag}`}>{caseCard.category.name_en}</span>
                                    </div>
                                </div>
                                <div className={`${style.info}`}>
                                    <a href="#" class="block">
                                        <h4 className={`${style.title}`}>{caseCard.name}</h4>
                                    </a>
                                    <ProgressBar now={((caseCard.paied_amount * 100) / caseCard.initial_amount)} className={`${style.prog}`} label={`${((caseCard.paied_amount * 100) / caseCard.initial_amount)}%`} />
                                </div>
                                <div className={`${style.money}`}>
                                    <div>
                                        <p>Goal</p>
                                        <p className={`${style.moneyTitle}`}>{caseCard.initial_amount}</p><hr className={`${style.line}`} />

                                    </div>
                                    <div>
                                        <p>Raised</p>
                                        <p className={`${style.moneyTitle}`}>{caseCard.paied_amount} </p><hr className={`${style.line}`} />
                                    </div>
                                    <div>
                                        <p>Remain</p>
                                        <p className={`${style.moneyTitle}`}>{caseCard.remaining_amount}</p>
                                    </div>
                                </div>
                                <button className={`${style.caseBtn}`}>View Details</button>
                            </div>
                        )}
                    </div>
                    <div className={`${style.causes}`}>
                        <h2 className={`${style.globalCauses}`}>Our Blog</h2>
                        <h1 className={`${style.causesTitle}`}>News and Happiness </h1>
                        <p className={`${style.causesPara}`}>Here are some urgnt ongoing project which need to complete very soon</p>
                    </div>
                    <div className={`${style.project}`}>
                        {eventData && eventData.map(eventCard =>
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
                                    </a>

                                </div>

                                <button className={`${style.caseBtn}`}>Read More </button>
                            </div>
                        )}
                    </div>
                </Container>
            </section>
        </>
    )
}
