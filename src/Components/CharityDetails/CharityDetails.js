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

import Cookies from 'js-cookie'
import CardCase from './../Card/Card'
import HeaderTitleCharity from "../HeaderTitleCharity/HeaderTitleCharity"
import AnimatedPage from '../Global/AnimatedPage';
import { useTranslation } from 'react-i18next';
export default function CharityDetails() {
    const { t } = useTranslation()
    const carityId = useParams()
    const [carityData, setCarityData] = useState({})
    const [categoryData, setCategoryData] = useState([])
    const [caseData, setCaseData] = useState([])
    const [eventData, setEventData] = useState([])
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/charity/show/${carityId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setCarityData(response.data.charity)

            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/category/index?lang=${currentLanguageCode}`)
            .then(response => {
                setCategoryData(response.data.Categories)
            }
            ).catch((err) => { console.log(err) })
        axios.get(`https://otrok.invoacdmy.com/api/user/charity/cases/${carityId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setCaseData(response.data.cases)
                console.log(response.data.cases.caseimage, "jjjj")
            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/charity/events/${carityId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setEventData(response.data.result)
            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    console.log(categoryData)
    return (
        <AnimatedPage >
            <HeaderTitleCharity title={t("كل عمل صالح هو عمل خيري")} para={t(" التبرع للفقراء من اجل حياتهم الافضل صحة")} />
            <section>


                <Container>
                    <Row className={`${style.about}`}>
                        <Col><img src={carityData.image} alt="" className={`${style.imgAbout}`} /></Col>
                        <Col>
                            <h2 className={`${style.aboutusTitle}`}>{carityData.name}</h2>
                            <div>
                                <h1 className={`${style.aboutTitle}`}> {t("نحن نعمل من أجل الفقراء لمنحهم حياة سعيدة.")}</h1>
                                <p className={`${style.aboutPara}`}></p>
                                <h2 className={`${style.aboutTake}`}>{t(":نأخذ أنواعًا مختلفة من التبرعات")}</h2>
                                <div className={`${style.checkList}`}>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label> {t("التبرع بالطعام")} </label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label>{t("التبرع بالمال")}</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label> {t("التبرع بالملابس")}</label>
                                    </div>
                                    <div>
                                        <input checked="checked" class={`${style.check}`} type="checkbox" />
                                        <label> {t("التبرع بالأثاث")}</label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${style.causes}`}>
                        <h2 className={`${style.globalCauses}`}> {t("القضايا العالمية")}</h2>
                        <h1 className={`${style.causesTitle}`}>{t("انشر الحب بالتبرع")} </h1>
                        <p className={`${style.causesPara}`}> {t("فيما يلي بعض الفئات التي يعمل بها القطاع بانتظام")}</p>
                    </div>
                    <div className={`${style.donation}`}>
                        {categoryData && categoryData.map(category =>
                            <Link>
                                <div className={`${style.donationType}`}>
                                    <img src={category.image} alt="" />
                                    <p>{category.name}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={`${style.causes}`}>
                        <h2 className={`${style.globalCauses}`}>{t("معظم الحالات العاجلة")}</h2>
                        <h1 className={`${style.causesTitle}`}> {t("مشاريع مستمره")} </h1>
                        <p className={`${style.causesPara}`}>{t("بعض المشاريع الجارية العاجلة التي تحتاج إلى استكمال")}</p>
                    </div>
                    <div className={`${style.project}`}>
                        {caseData && caseData.map(caseCard =>
                            <Link to={`charityCase-details/${caseCard.id}`}>
                                <CardCase
                                    id={caseCard?.id}
                                    donationType={caseCard?.donationtype_id}
                                    photo={caseCard?.caseimage[0]?.image}
                                    title={caseCard?.name}
                                    para={caseCard?.description}
                                    progress={((caseCard?.paied_amount * 100) / caseCard?.initial_amount).toFixed(0)}
                                    totalPrice={caseCard?.initial_amount} numOfDonates={caseCard?.paied_amount} />


                            </Link>
                        )}
                    </div>
                </Container>
                <div className={`${style.secTwo}`}>
                    <Container>
                        <div className={`${style.causesEvent}`}>
                            <h2 className={`${style.globalCausesEvent}`}>{t("مدونتنا")}</h2>
                            <h1 className={`${style.causesTitleEvent}`}>{t("الأخبار والسعادة")}</h1>
                            <p className={`${style.causesParaEvent}`}>{t("بعض الأحداث الجارية العاجلة التي تحتاج إلى إكمال")}</p>
                        </div>
                        <div className={`${style.project}`}>
                            {eventData && eventData.map(eventCard =>
                                <Link to={`charityEvent-details/${eventCard.id}`}>
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
                                                <p className={`${style.infoPara}`}>{eventCard.description}</p>
                                            </a>

                                        </div>
                                        <div className={`${style.evBtn}`}>
                                            <Link to={`charityEvent-details/${eventCard.id}`} className={`${style.caseBtn}`}>{t("للمزيد من التفاصيل ")} </Link>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </Container>
                </div>

            </section>
        </AnimatedPage>
    )
}
