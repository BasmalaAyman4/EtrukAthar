import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import img1 from './../../../assets/icons/donation.svg'
import img2 from './../../../assets/icons/volunteer.svg'
import img3 from './../../../assets/icons/whattheysay.svg'
import styles from './HomeBrief.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const HomeBrief = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  const { t } = useTranslation()
  return (
    <section className={`${styles["home-brief"]} `} id='brief' data-aos="fade-up">
      <div className='container'>
        <div className='row '>
          <div className='col-lg-4 col-sm-12 mt-5 mb-2'>
            <div className={`${styles["home-brief__part"]} center`}>
              <Link class="" to="">
                <img className={`${styles["home-brief__img"]} `} src={img1} alt="" />
              </Link>
              <h4 className={`${styles["home-brief__title"]}`}>{t("التبرعات الواردة")}</h4>
              <p className={`${styles["home-brief__pragraph"]}`} >{t("حرصاً منّا على تزويد جميع متبرعينا بجميع المعلومات حول أرصدة التبرعات الواردة وتفاصيلها نشارككم كل أرصدة التبرعات عبر ملف الشفافية")}</p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 mt-5 mb-2'>
            <div className={`${styles["home-brief__part"]} center`}>
              <Link class="" to="/askForVoluntary">
                <img className={`${styles["home-brief__img"]} `} src={img2} alt="" />
              </Link>
              <h4 className={`${styles["home-brief__title"]}`}>{t("تطوع معنا")}</h4>
              <p className={`${styles["home-brief__pragraph"]}`} >{t("نؤمن بقيمة مبادرات التطوع ودورها في تغيير الحال على أرض الواقع، كما نؤمن بطاقات شبابنا ونفتح لهم الباب لمد يد العون لغيرهم نؤمن")}</p>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 mt-5 mb-5'>
            <div className={`${styles["home-brief__part"]} center`}>
              <Link class="" to="">
                <img className={`${styles["home-brief__img"]} pb-4`} src={img3} alt="" />
              </Link>
              <h4 className={`${styles["home-brief__title"]}`}> {t("قالوا عنا")}</h4>
              <p className={`${styles["home-brief__pragraph"]}`} >{t("نظراً لوجودنا على أرض الواقع وتركنا أثراً واضحاً بفضل تبرعاتكم، نشارككم ما قالته عنا وسائل الإعلام المحلية والعالمية")}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomeBrief