import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./WhoWeAre.module.css"
import img1 from './../../../assets/images/who-we-are1.jpg'
import img2 from './../../../assets/images/who-we-are2.jpg'
import img3 from './../../../assets/images/who-we-are3.jpg'
import { useTranslation } from 'react-i18next'
import { Player } from 'video-react';
import etruk from "./../../../assets/videos/Vid 20230406221832.mp4"
import img4 from "./../../../assets/images/9eed201930ce4a42bdddf8e2adcede32.jpg"
import { useSpring, animated, config } from 'react-spring';
import styled from "styled-components";
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const calc2 = (x, y) => [-(y - window.innerHeight / 4) / 40, (x - window.innerWidth / 4) / 40, 1]
const trans2 = (x, y, s) => `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const calc3 = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans3 = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const StyledDiv = styled(animated.div)`
width: 100%;`;
const StyledDivTwo = styled(animated.div)`
height:500px`;
const StyledDivThree = styled(animated.div)`
height:600px`;

const WhoWeAre = () => {
    const { t } = useTranslation()
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    const [props3, set3] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    return (
        <>
            <section className={`${styles['who-we-are']} mt-5 mb-5`}>

                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-4 col-sm-12'>
                            <div className={`${styles["who-we-are__info"]} `}>
                                <h3 className={`${styles["who-we-are__info_h3_black"]} `}>
                                    {t("مجموعة ")}
                                </h3>
                                <h3 className={`${styles["who-we-are__info_h3_orange"]} `}>
                                    {t(" اترك أثراً ")}
                                </h3>
                                <p className={`${styles["who-we-are__info_p"]} mt-5`}>
                                    {t(". مجموعة   اترك اثرا ، مجموعة شبابية تعنى برفع سوية المجتمع والعمل التطوعي")}
                                </p>
                                <p className={`${styles["who-we-are__info_p"]} mb-5`}>
                                    {t(".أسست عام 2020 في مصر ومرخصة سنة 2023 كـ شركة غير ربحية ، وكجمعية خيرية في سويسرا 2023 ، وتوسعت أنشطة عملها ل تركيا و الداخل السوري")}
                                </p>
                                <Link to="" className={`${styles["who-we-are__info_btn"]} `} >{t("التعريف بالمجموعة")}</Link>
                            </div>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <div className='row'>
                                <div className=' col-lg-4 col-sm-12 mb-5'>
                                    <StyledDiv className={`${styles["who-we-are__img-container"]}`}
                                        onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                        style={{
                                            transform: props.xys.interpolate(trans)
                                        }}
                                    >
                                        <img src={img1} className={`${styles['who-we-are__img']}`} alt="" />
                                        <div className={`${styles['who-we-are__img-info']}`}>
                                            <h4 className={`${styles['who-we-are__img-info-h2']}`}>{t("ابتسم")}</h4>
                                        </div>
                                    </StyledDiv>
                                </div>
                                <div className='col-lg-4 col-sm-12 '>
                                    <StyledDivThree className={`${styles["who-we-are__img-container_modify"]}`}
                                        onMouseMove={({ clientX: x, clientY: y }) => (set3({ xys: calc3(x, y) }))}
                                        onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                                        style={{
                                            transform: props3.xys.interpolate(trans3)
                                        }}
                                    >
                                        <img src={img2} className={`${styles['who-we-are__img']}`} alt="" />
                                        <div className={`${styles['who-we-are__img-info_modify']}`}>
                                            <h4 className={`${styles['who-we-are__img-info-h2-modify']} `}>{t("شارك")}</h4>
                                        </div>
                                    </StyledDivThree>
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <StyledDivTwo className={`${styles["who-we-are__img-container"]}`}
                                        onMouseMove={({ clientX: x, clientY: y }) => (set2({ xys: calc2(x, y) }))}
                                        onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                                        style={{
                                            transform: props2.xys.interpolate(trans2)
                                        }}
                                    >
                                        <img src={img3} className={`${styles['who-we-are__img']}`} alt="" />
                                        <div className={`${styles['who-we-are__img-info']}`}>
                                            <h4 className={`${styles['who-we-are__img-info-h2']}`}>{t("ساعد")}</h4>
                                        </div>
                                    </StyledDivTwo>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles[`v`]}`}><Player src={etruk} className={`${styles[`video`]}`} poster={img4} autoPlay={false} /></div>
                </div>

            </section>
        </>
    )
}

export default WhoWeAre