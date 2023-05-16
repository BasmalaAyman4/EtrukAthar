import React, { useEffect, useRef, useState } from 'react'
import style from "./AcutionCard.module.css"
import { Link } from 'react-router-dom'
import one from "../../assets/images/details2.jpeg"
import two from "../../assets/images/details3.jpeg"
import { AiFillEye, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import moment from 'moment';
import axios from 'axios';
export default function AcutionCard() {

    const [dataAcution, setDataAcution] = useState([])
    const [dataImage, setDataImage] = useState([])
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/mazad/index?lang=ar`)
            .then((response) => {
                setDataAcution(response.data.cases)
                console.log(response.data.cases.mazadimage)
            }).catch((err) => { console.log(err) })
    }, [])


    return (
        <>

            <div className={`${style.AcutionCards}`}>


                <>
                    {dataAcution && dataAcution.map(acutionCard => (
                        <Link to={`acution-details/${acutionCard.id}`}>
                            <div className={`${style.card}`}>
                                <div className={`${style.image}`}>
                                    <div className={`${style.flipCard}`}>
                                        <div className={`${style.flipCard__inner}`}>
                                            <div className={`${style.flipCard__front}`}>
                                                <img src={acutionCard.mazadimage[0].image} alt="" />
                                            </div>
                                            <div className={`${style.flipCard__back}`}>
                                                <img src={acutionCard.mazadimage[1]?.image} alt="" />
                                            </div>
                                        </div>
                                        <div className={`${style.acutionEnded}`}>
                                            <div >
                                                {((new Date(moment(acutionCard.end_date).format('LL') + " " + acutionCard.end_time).getTime()) - (new Date().getTime())) < 0
                                                    ?
                                                    <p className={`${style.ended}`}>Acution Ended</p>
                                                    :
                                                    ""
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`${style.cardBody}`}>
                                    <h4 className={`${style.card__title}`}>{acutionCard.name}</h4>
                                    <p className={`${style.card__acution}`}> current Baid : {acutionCard.current_price}</p>
                                </div>
                            </div>

                        </Link>
                    ))}
                </>

                <div>

                </div>
            </div>
        </>
    )
}