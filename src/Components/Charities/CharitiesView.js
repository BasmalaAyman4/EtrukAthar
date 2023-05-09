import React, { useState, useEffect } from 'react'
import style from "./CharitiesView.module.css"
import img1 from "../../assets/images/0.png"
import img2 from "../../assets/images/1.jpg"
import img3 from "../../assets/images/3.jfif"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jfif"
import img6 from "../../assets/images/6.jpeg"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function CharitiesView() {
    const [dataCarity, setdataCarity] = useState([]);
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    useEffect(() => {


        axios.get(`https://otrok.invoacdmy.com/api/user/charity/index`)
            .then(response => {
                setdataCarity(response.data.charities)
            }
            ).catch((err) => { console.log(err) })
    })
    return (
        <>
            <section className={`${style.charitiesView}`}>
                <div className={`${style.charitiesLanding}`}>
                    <div className={`${style.charityBody}`}>
                        <h1 className={`${style.charityTitle}`}>We are world wide charity organization</h1>
                        <p className={`${style.charityPara}`}>We are responding with emergency assistance where needed and supporting families who have lost their homes due to conflict.</p>
                        <p className={`${style.charityDisc}`}>We are responding with emergency assistance where needed and supporting families who</p>
                        <button className={`${style.charitybtn}`}>Join with us</button>
                    </div>
                </div>
                <Container>
                    <div className={`${style.charitiesName}`}>
                        {dataCarity && dataCarity.map(carities =>
                            <Link to={`/charity-details/${carities.id}`}>
                                <div >
                                    <div className={`${style.imgView}`}>
                                        <img src={carities.image} alt="" className={`${style.imgee}`} />
                                    </div>
                                    <p className={`${style.imgPara}`}>{carities.name}</p>
                                </div>
                            </Link>
                        )}
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img1} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>جمعية رسالة الخيرية</p>
                            </div>
                        </Link>
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img2} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>جمعية بداية الخيرية</p>
                            </div>
                        </Link>
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img3} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>جمعية قطرة الماء</p>
                            </div>
                        </Link>
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img4} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>جمعية مصر للخير</p>
                            </div>
                        </Link>
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img5} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>  مؤسسة اهل مصر</p>
                            </div>
                        </Link>
                        <Link to="/charity-details">
                            <div >
                                <div className={`${style.imgView}`}>
                                    <img src={img6} alt="" className={`${style.imgee}`} />
                                </div>
                                <p className={`${style.imgPara}`}>  مؤسسة مجدي يعقوب</p>
                            </div>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}
