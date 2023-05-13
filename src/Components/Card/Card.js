import React, { useEffect, useState } from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Skeleton from 'react-loading-skeleton'

export default function Card(props) {
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [IsLoading,setIsLoading] = useState(false)
    useEffect(()=>{
      setIsLoading(true)
      setTimeout(()=>{
        setIsLoading(false)
      },1000)
    },[])
  
    return (
        <>
            <div className={`${styles.card} ${props.id} `}>
               {!IsLoading?
                    <div className={`${styles.cardFig}`}>
                    
                        <img src={props.photo} alt="" className={`${styles.figImg}`} />
                    
                        <div className={`${styles.cardLink}`}>
                            <Link to={`/card-details/${props.id}`} className={`${styles.cardDonate}`}>{t("للمزيد من التفاصيل ")} </Link>
                        </div>
                    </div>
                    :
                    <Skeleton className='skelecton_image'  count={1} />
                } 
                <div className={`${styles.cardContent}`}>
         
                <>
                   {!IsLoading?  <h3 className={`${styles.cardContentTitle}`}>{props.title}</h3> : <Skeleton  className={`skeleton-title`} /> }
                      {!IsLoading? 
                       <p className={`${styles.cardContentPara}`}> {props.para}</p> 
                         : 
                        <Skeleton  className={`skeleton-para`} /> 
                      }
                    <div className={`${styles.all}`}>
                    {!IsLoading? 
                        <div className={`${styles.bar}`}><ProgressBar now={props.progress} className={`${styles.prog}`} />
                            <span  style={currentLanguageCode === 'ar' ? {  right :  `calc(${props.progress}% - 20px)`} :{  left :  `calc(${props.progress}% - 20px)`} } className={`${styles.b}`}>{props.progress} %</span>
                        </div>
                        :
                        <Skeleton  className='skeleton-prog' /> 
                    }
                       {!IsLoading? 
                        <div className={`${styles.don}`}>
                            {props.donationType === "1" ? 
                            <div className=""> {t("تم جمع المبلغ")} :  {props.numOfDonates} </div>
                            : 
                            null 
                            }
                            {props.donationType === "2" ? 
                            <div className=""> {t("عدد المطوعين")}:  {props.numOfDonates} </div>
                            : 
                            null 
                            }
                            {props.donationType === "3" ? 
                            <div className="">{t("عدد الكارتين")}:  {props.numOfDonates} </div>
                            : 
                            null  
                            }
                            {props.donationType === "4" ? 
                            <div className=""> {t("عدد الافراد")}: {props.numOfDonates} </div>
                            : 
                            null 
                            }
                              {props.donationType === "5" ? 
                            <div className=""> {t("عدد الاثاث")}: {props.numOfDonates} </div>
                            : 
                            null 
                            }
                            <div className=""> {t("المطلوب")}: {props.totalPrice}  </div>
                        </div>
                        : 
                        <Skeleton  className={`skeleton-don`}/> 
                    }
                      
                    </div>
                    </>
                
                </div>
            </div>
        </>
    )
}