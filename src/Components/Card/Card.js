import React from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Figure from 'react-bootstrap/Figure';
export default function Card(props) {
    const { t } = useTranslation()
    return (
        <>
            <div className={`${styles.card}`}>
                <Figure className={`${styles.cardFig}`}>
                    <Figure.Image src={`${props.img}`} alt="" className={`${styles.figImg}`} />
                    <div className={`${styles.cardLink}`}>
                        <a href="/card-details" className={`${styles.cardDonate}`}>للمزيد من التفاصيل </a>
                    </div>
                </Figure>
                <div className={`${styles.cardContent}`}>
                    <h3 class={`${styles.cardContentTitle}`}>{props.title}</h3>
                    <p className={`${styles.cardContentPara}`}> {props.para}</p>
                    <div className={`${styles.all}`}>
                        <div className={`${styles.bar}`}><ProgressBar now={`${props.prog}`} className={`${styles.prog}`} />
                            <span className={`${styles.b}`}>{`${props.prog}`} %</span>
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