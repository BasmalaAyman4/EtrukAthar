import React, { useState, useEffect } from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Container } from 'react-bootstrap'
import style from "./DonorWall.module.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedPage from "../Global/AnimatedPage";
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function DonorWall() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [moneyDonate, setMoneyDonate] = useState('')
    const [dataDonation, setDataDonation] = useState([]);
    useEffect(() => {

        axios.get("https://otrok.invoacdmy.com/api/user/donation/money")
            .then((response) => {
                setMoneyDonate(response.data.sum)

            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/donation/index/financial`, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                setDataDonation(response.data.donations)
                console.log(response.data.donations, "khk")
            }
            ).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    return (
        <>
            <section data-aos="fade-up">
                <HeaderTitle title={t("ملف الشفافيه")} para={t("المبلغ المجموع لملف الشفافيه")} price={moneyDonate ? moneyDonate : 0} />
                <Container>
                    <AnimatedPage >
                        <Row className={`${style.donation__info__body}`}
                            intial={{ opacity: 0 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}

                        >
                            {dataDonation && dataDonation.map(donationCard =>
                                <Col lg={4}>
                                    <div className={`${style.donations}`}>
                                        <p className={`${style.donations__date}`}>{donationCard.date_to_send}</p>
                                        <p className={`${style.donations__para}`}>{donationCard.amount}</p>
                                        <p className={`${style.donations__price}`}> {t("المبلغ المتبرع به")}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </AnimatedPage>
                </Container>
            </section>
        </>
    )
}
