import React from 'react'
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
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function CharityDetails() {
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
                            <h2 className={`${style.aboutusTitle}`}>About Us</h2>
                            <div>
                                <h1 className={`${style.aboutTitle}`}>We work for poor people to give them a happy life</h1>
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
                        <div className={`${style.card}`}>
                            <div className={`${style.header}`}>
                                <div className={`${style.image}`}>
                                    <img src={don} alt="" />
                                    <span className={`${style.tag}`}>Top Education</span>
                                </div>
                            </div>
                            <div className={`${style.info}`}>
                                <a href="#" class="block">
                                    <h4 className={`${style.title}`}>Ensure child education in local area </h4>
                                </a>
                                <ProgressBar now="50" className={`${style.prog}`} label="50%" />
                            </div>
                            <div className={`${style.money}`}>
                                <div>
                                    <p>Goal</p>
                                    <p className={`${style.moneyTitle}`}>$70.000</p><hr className={`${style.line}`} />

                                </div>
                                <div>
                                    <p>Raised</p>
                                    <p className={`${style.moneyTitle}`}>$35.000 </p><hr className={`${style.line}`} />
                                </div>
                                <div>
                                    <p>Remain</p>
                                    <p className={`${style.moneyTitle}`}>$35.000</p>
                                </div>
                            </div>
                            <button className={`${style.caseBtn}`}>View Details</button>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`${style.header}`}>
                                <div className={`${style.image}`}>
                                    <img src={don} alt="" />
                                    <span className={`${style.tag}`}>Relief Food</span>
                                </div>
                            </div>
                            <div className={`${style.info}`}>
                                <a href="#" class="block">
                                    <h4 className={`${style.title}`}>Ensure child education in local area </h4>
                                </a>
                                <ProgressBar now="50" className={`${style.prog}`} label="50%" />
                            </div>
                            <div className={`${style.money}`}>
                                <div>
                                    <p>Goal</p>
                                    <p className={`${style.moneyTitle}`}>$70.000</p><hr className={`${style.line}`} />

                                </div>
                                <div>
                                    <p>Raised</p>
                                    <p className={`${style.moneyTitle}`}>$35.000 </p><hr className={`${style.line}`} />
                                </div>
                                <div>
                                    <p>Remain</p>
                                    <p className={`${style.moneyTitle}`}>$35.000</p>
                                </div>
                            </div>
                            <button className={`${style.caseBtn}`}>View Details</button>
                        </div>
                        <div className={`${style.card}`}>
                            <div className={`${style.header}`}>
                                <div className={`${style.image}`}>
                                    <img src={don} alt="" />
                                    <span className={`${style.tag}`}>Orphan Support</span>
                                </div>
                            </div>
                            <div className={`${style.info}`}>
                                <a href="#" class="block">
                                    <h4 className={`${style.title}`}>Ensure child education in local area </h4>
                                </a>
                                <ProgressBar now="50" className={`${style.prog}`} label="50%" />
                            </div>
                            <div className={`${style.money}`}>
                                <div>
                                    <p>Goal</p>
                                    <p className={`${style.moneyTitle}`}>$70.000</p><hr className={`${style.line}`} />

                                </div>
                                <div>
                                    <p>Raised</p>
                                    <p className={`${style.moneyTitle}`}>$35.000 </p><hr className={`${style.line}`} />
                                </div>
                                <div>
                                    <p>Remain</p>
                                    <p className={`${style.moneyTitle}`}>$35.000</p>
                                </div>
                            </div>
                            <button className={`${style.caseBtn}`}>View Details</button>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}
