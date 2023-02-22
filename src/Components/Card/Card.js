import React from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Card(props) {
    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.cardDetails}`}>
                    <img src={`${props.img}`} className={`${styles.cardImg}`} alt='' />
                    <h3 className={`${styles.textTitle}`}>{props.title}</h3>
                    <p className={`${styles.textPara}`}>{props.para}</p>
                    <div className={`${styles.cardPrice}`}>
                        <ProgressBar now={`${props.prog}`} className={`${styles.prog} ${styles.progress}`} />
                        <div className={`${styles.allCollect}`}>
                            <div className={`${styles.priceCollect}`}>
                                <span>{props.price}</span>
                                <span> {props.totalPrice}</span>
                            </div>
                            <div className={`${styles.priceTitle}`}>
                                <span> {props.numOfDonates}</span>
                                <span>عدد التبرعات</span>
                            </div>
                        </div>

                    </div>
                </div>
                <button className={`${styles.cardButton}`}>للتبرع </button>
            </div>
        </>
    )
}
