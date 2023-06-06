import React, { useState, useEffect } from 'react'
import styles from "./HomeCounting.module.css"
import { useSpring, animated } from 'react-spring'

import { useTranslation } from 'react-i18next';
import axios from 'axios'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => (+n).toFixed())}</animated.div>
}
const HomeCounting = () => {
    const [moneyDonate, setMoneyDonate] = useState('')
    const [countCases, setCountCases] = useState('')
    const [countEvent, setCountEvent] = useState('')
    const [countCharity, setCountCharity] = useState('')
    useEffect(() => {
        axios.get("https://otrok.invoacdmy.com/api/user/donation/money")
            .then((response) => {
                setMoneyDonate(response.data.sum)

            }).catch((err) => { console.log(err) })
        axios.get("https://otrok.invoacdmy.com/api/user/case/index?lang=en")
            .then((response) => {
                setCountCases(response.data.count)

            }).catch((err) => { console.log(err) })
        axios.get("https://otrok.invoacdmy.com/api/user/event/index?lang=ar")
            .then((response) => {
                setCountEvent(response.data.count)

            }).catch((err) => { console.log(err) })
        axios.get("https://otrok.invoacdmy.com/api/user/charity/index?lang=ar")
            .then((response) => {
                setCountCharity(response.data.count)

            }).catch((err) => { console.log(err) })
    }, [])
    console.log(typeof (n), "l")

    const { t } = useTranslation()
    return (
        <section className={`${styles["home-counting"]}  `}>
            <div className={`${styles["home-counting__container"]}  `}>
                <div className={`${styles["home-counting__content"]} `}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <big className={`${styles["home-counting__plus"]} `}>+</big>
                                    <h3 className={`${styles["home-counting__number"]} `}>

                                        <Number n={countCases} />

                                    </h3>

                                </div>
                                <p className={`${styles["home-counting__pragraph"]} `} >{t("حالات تم إنجازها")}</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <big className={`${styles["home-counting__plus"]} `}>+</big>
                                    <h3 className={`${styles["home-counting__number"]} `}>

                                        <Number n={moneyDonate} />

                                    </h3>

                                </div>
                                <p className={`${styles["home-counting__pragraph"]} `} > {t(" مال تم جميعه")}</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <big className={`${styles["home-counting__plus"]} `}>+</big>
                                    <h3 className={`${styles["home-counting__number"]} `}>

                                        <Number n={countEvent} />

                                    </h3>

                                </div>
                                <p className={`${styles["home-counting__pragraph"]} `} >
                                    {t("مناسبات تم تغطيتها")}
                                </p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <big className={`${styles["home-counting__plus"]} `}>+</big>
                                    <h3 className={`${styles["home-counting__number"]} `}>

                                        <Number n={countCharity} />

                                    </h3>

                                </div>
                                <p className={`${styles["home-counting__pragraph"]} `} >
                                    {t("جمعيات تتوافر لدينا ")}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCounting