import React, { useState, useEffect } from 'react'
import style from "./CharitiesView.module.css"
import img1 from "../../assets/images/0.png"
import img2 from "../../assets/images/1.jpg"
import img3 from "../../assets/images/3.jfif"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jfif"
import img6 from "../../assets/images/6.jpeg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import AnimatedPage from '../Global/AnimatedPage'
export default function CharitiesView() {
    const { t } = useTranslation()
    const [dataCarity, setdataCarity] = useState([]);
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/charity/index?lang=${currentLanguageCode}`)
            .then(response => {
                setdataCarity(response.data.charities)
            }
            ).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    return (
        <AnimatedPage >
            <section className={`${style.charitiesView}`}>
                <div className={`${style.charitiesLanding}`}>
                    <div className={`${style.charityBody}`}>
                        <h1 className={`${style.charityTitle}`}>{t("نحن منظمة خيرية عالمية")}</h1>
                        <p className={`${style.charityPara}`}>{t("نحن نستجيب للمساعدات الطارئة عند الحاجة وندعم العائلات التي فقدت منازلها بسبب النزاع.")}</p>

                        <Link to="/sign-up" className={`${style.charitybtn}`}>{t("انضم إلينا")}</Link>
                    </div>
                </div>
                <Container>
                    <div className={`${style.charitiesName} `}>
                        <Row>
                            {dataCarity && dataCarity.map(carities =>
                                <Col lg="3" className={`${style.colCharity}`}>
                                    <Link to={`/charity-details/${carities.id}`}>
                                        <div  >
                                            <div className={`${style.imgView}`}>
                                                <img src={carities.image} alt="" className={`${style.imgee}`} />
                                            </div>
                                            <p className={`${style.imgPara}`}>{carities.name}</p>
                                        </div>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                    </div>
                </Container>
            </section>
        </AnimatedPage>
    )
}
