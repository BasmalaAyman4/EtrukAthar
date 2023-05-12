import React from 'react'
import style from "./AcutionCard.module.css"
import { Link } from 'react-router-dom'
import one from "../../assets/images/details2.jpeg"
import two from "../../assets/images/details3.jpeg"
import { AiFillEye, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
export default function AcutionCard() {
    return (
        <>

            <Link to='/acution-details'>
                <div className={`${style.card}`}>
                    <div className={`${style.image}`}>
                        <div className={`${style.flipCard}`}>
                            <div className={`${style.flipCard__inner}`}>
                                <div className={`${style.flipCard__front}`}>
                                    <img src={one} alt="" />
                                </div>
                                <div className={`${style.flipCard__back}`}>
                                    <img src={two} alt="" />
                                </div>
                            </div>
                            <div className={`${style.acutionIcons}`}>
                                <div className={`${style.icons}`}>
                                    <a href=""><AiFillEye className={`${style.icon}`} /></a>
                                    <a href=""><AiOutlineSearch className={`${style.icon}`} /></a>
                                    <a href=""><AiOutlineHeart className={`${style.icon}`} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.cardBody}`}>
                        <h4 className={`${style.card__title}`}>Orange Fiat 500</h4>
                        <p className={`${style.card__acution}`}>Acution Ended</p>
                    </div>
                </div>
            </Link>

        </>
    )
}
