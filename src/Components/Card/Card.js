import React from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';
export default function Card(props) {
    const { t } = useTranslation()
     console.log(props.numOfDonates)
    return (
        <>

            <div className={`${styles.card} ${props.id}`}>
                <div className={`${styles.cardFig}`}>
                    <img src={props.photo} alt="" className={`${styles.figImg}`} />
                    <div className={`${styles.cardLink}`}>
                        <a href="/card-details" className={`${styles.cardDonate}`}>للمزيد من التفاصيل </a>
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
                            <div className="">عدد التبرعات :  {props.numOfDonates} </div>
                            <div className="">المبلغ :{props.totalPrice}  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}