import React, { useEffect, useRef, useState } from 'react'
import style from "./AcutionCard.module.css"
import { Link } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import img from "./../../assets/images/eae946efbbf74117a65d488206a09b63.png"
export default function AcutionCard() {
    const { t } = useTranslation()
    const [dataAcution, setDataAcution] = useState([])
    const [dataImage, setDataImage] = useState([])
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/index?lang=${currentLanguageCode}`)
            .then((response) => {
                setDataAcution(response.data.auctions)
                console.log(response.data.auctions.mazadimage)
            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    return (
        <>
            <>
                {dataAcution && dataAcution.map(acutionCard => (
                    <Link to={`acution-details/${acutionCard.id}`}>
                        <Col className={`${style.card}`}  >
                            <div className={`${style.image}`}>
                                <div className={`${style.flipCard}`}>
                                    <div className={`${style.flipCard__inner}`}>
                                        <div className={`${style.flipCard__front}`}>
                                            <img src={acutionCard.mazadimage[0]?.image} alt=""

                                            />
                                        </div>
                                        <div className={`${style.flipCard__back}`}>
                                            <img src={acutionCard.mazadimage[1]?.image} alt="" />
                                        </div>
                                    </div>
                                    <div className={`${style.acutionEnded}`}>
                                        <div >
                                            {((new Date(moment(acutionCard.end_date).format('LL') + " " + acutionCard.end_time).getTime()) - (new Date().getTime())) < 0
                                                ?
                                                <p className={`${style.ended}`}> {t("انتهى المزاد")}</p>
                                                :
                                                ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.cardBody}`}>
                                <h4 className={`${style.card__title}`}>{acutionCard.name}</h4>
                                <p className={`${style.card__acution}`}> {t("الدفع الحالي")} : {acutionCard.current_price}</p>
                            </div>
                        </Col>
                    </Link>
                ))}
            </>

        </>
    )
}