import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./WhoWeAre.module.css"
import img1 from './../../../assets/images/who-we-are1.jpg'
import img2 from './../../../assets/images/who-we-are2.jpg'
import img3 from './../../../assets/images/who-we-are3.jpg'
import { useTranslation } from 'react-i18next'
const WhoWeAre = () => {
    const { t } = useTranslation()
  return (
    <section className={`${styles['who-we-are']} mt-5 mb-5`}>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-4 col-sm-12'>
                    <div className={`${styles["who-we-are__info"]} `}>
                            <h3  className={`${styles["who-we-are__info_h3_black"]} `}>
                                {t( "مجموعة ")}
                            </h3>
                            <h3  className={`${styles["who-we-are__info_h3_orange"]} `}>
                                {t( " اترك أثراً ")}
                            </h3>
                            <p className={`${styles["who-we-are__info_p"]} mt-5`}>
                            {t(". مجموعة هذه حياتي التطوعية ، مجموعة شبابية تعنى برفع سوية المجتمع والعمل التطوعي")}
                            </p>
                            <p className={`${styles["who-we-are__info_p"]} mb-5`}>  
                             {t(".أسست عام 2020 في مصر ومرخصة سنة 2023 كـ شركة غير ربحية ، وكجمعية خيرية في سويسرا 2023 ، وتوسعت أنشطة عملها ل تركيا و الداخل السوري")}
                            </p>
                            <Link to="" className={`${styles["who-we-are__info_btn"]} ` } >{t( "التعريف بالمجموعة")}</Link>
                        </div>
                </div>
                <div className='col-lg-8 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-12 mb-5'>
                            <div className={`${styles["who-we-are__img-container"]}`}>
                                    <img src={img1} className={`${styles['who-we-are__img']}`} alt="" />
                                <div className={`${styles['who-we-are__img-info']}`}>
                                     <h4 className={`${styles['who-we-are__img-info-h2']}`}>{t("ابتسم")}</h4>
                                </div>
                            </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 '>
                                <div className={`${styles["who-we-are__img-container_modify"]}`}>
                                
                                        <img src={img2} className={`${styles['who-we-are__img']}`} alt="" />
                                    
                                    <div className={`${styles['who-we-are__img-info_modify']}`}>
                                        <h4 className={`${styles['who-we-are__img-info-h2-modify']} `}>{t("شارك")}</h4>
                                    </div>
                            
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12'>
                                <div className={`${styles["who-we-are__img-container"]}`}>
                                
                                        <img src={img3} className={`${styles['who-we-are__img']}`} alt="" />
                                    
                                    <div className={`${styles['who-we-are__img-info']}`}>
                                        <h4 className={`${styles['who-we-are__img-info-h2']}`}>{t("ساعد")}</h4>
                                    </div>
                            
                                </div>
                            </div>
                    </div>
                </div>
              

            </div>

        </div>

    </section>
  )
}

export default WhoWeAre