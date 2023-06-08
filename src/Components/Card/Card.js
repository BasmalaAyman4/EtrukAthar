import React, { useEffect, useState } from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Skeleton from 'react-loading-skeleton'
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
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
                    
                        <img src={props.photo? props.photo:imgNull} alt="" className={`${styles.figImg}`} />
                    
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
                            <div className='d-flex flex  flex-column'>
                               <div className=""> {t("تم جمع المبلغ")} :  </div>
                               <span>  {props.numOfDonates +''+ t("ج")} </span>  
                            </div>
                            : 
                            null 
                            }
                            {props.donationType === "2" ? 
                            <div className='d-flex flex  flex-column'>
                                <div className=""> {t("عدد المطوعين")} : 
                                </div>
                                <span>{props.numOfDonates} </span>
                             </div>
                            : 
                            null 
                            }
                            {props.donationType === "3" ? 
                             <div className='d-flex flex  flex-column'>
                                <div className="">{t("عدد الكارتين")}: </div>
                                <span>{props.numOfDonates} </span>
                             </div>
                            : 
                            null  
                            }
                            {props.donationType === "4" ? 
                             <div className='d-flex flex  flex-column'>
                                <div className=""> {t("عدد الافراد")} : 
                                </div>
                                <span>{props.numOfDonates} </span>
                             </div>
                          
                            : 
                            null 
                            }
                              {props.donationType === "5" ? 
                               <div className='d-flex flex  flex-column'>
                                  <div className=""> {t("عدد الاثاث")} : 
                                  </div>
                                  <span>{props.numOfDonates}</span>
                                </div>
                            : 
                            null 
                            }
                              <div className='d-flex flex  flex-column'>
                                <div className=""> {t("المطلوب")}:  </div>
                                <span> { props.totalPrice}  </span>
                              </div>
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