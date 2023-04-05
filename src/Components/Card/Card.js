import React from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';
import Figure from 'react-bootstrap/Figure';
import CardJson from "./.././../Card.json"
import photo from "./../../assets/images/pro1.jpg";
export default function Card() {
    const { t } = useTranslation()
    const [data, setData] = React.useState(CardJson);
    return (
        <>
            {data &&
                data.map(({ id, title, para, progress, totalPrice, numOfDonates }) => (
                    <div className={`${styles.card} ${id}`}>
                        <Figure className={`${styles.cardFig}`}>
                            <Figure.Image src={photo} alt="" className={`${styles.figImg}`} />
                            <div className={`${styles.cardLink}`}>
                                <a href="/card-details" className={`${styles.cardDonate}`}>للمزيد من التفاصيل </a>
                            </div>
                        </Figure>
                        <div className={`${styles.cardContent}`}>
                            <h3 class={`${styles.cardContentTitle}`}>{title}</h3>
                            <p className={`${styles.cardContentPara}`}> {para}</p>
                            <div className={`${styles.all}`}>
                                <div className={`${styles.bar}`}><ProgressBar now={progress} className={`${styles.prog}`} />
                                    <span className={`${styles.b}`}>{progress} %</span>
                                </div>
                                <div className={`${styles.don}`}>
                                    <div className="">عدد التبرعات :  {numOfDonates} </div>
                                    <div className="">المبلغ :{totalPrice}  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}
