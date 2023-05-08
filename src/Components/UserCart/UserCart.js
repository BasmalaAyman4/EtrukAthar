import React from 'react'
import './../Card/Card.css'
import styles from './../Card/Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function UserCart(props) {
    const { t } = useTranslation()
    return (
        <>

            <div className={`${styles.card} ${props.id}`}>
                <div className={`${styles.cardFig}`}>
                    <img src={props.photo} alt="" className={`${styles.figImg}`} />
                    <div className={`${styles.cardLink}`}>
                        <Link to={`/case-user-details/${props.id}`} className={`${styles.cardDonate}`}>للمزيد من التفاصيل </Link>
                    </div>
                </div>
                <div className={`${styles.cardContent}`}>
                    <h3 class={`${styles.cardContentTitle}`}>{props.title}</h3>
                    <p className={`${styles.cardContentPara}`}> {props.para}</p>
                    <div className={`${styles.all}`}>
                        <div className={`${styles.bar}`}><ProgressBar now={props.progress} className={`${styles.prog}`} label={`${props.progress}%`} />
                            {/* <span className={`${styles.b}`}>{props.progress} %</span> */}
                        </div>
                        <div className={`${styles.don}`}>
                            {props.donationType === "2" ? 
                            <div className="">عدد المطوعين :  {props.numOfDonates} </div>
                            : 
                            null 
                            }
                            <div className="">العدد المطلوب :{props.totalPrice}  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}