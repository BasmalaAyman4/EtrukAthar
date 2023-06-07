import React, { useEffect, useState } from 'react'
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeHeader.module.css"
import "swiper/css";
import img1 from "./../../../assets/images/header2.jpeg"
import img2 from "./../../../assets/images/header3.jpeg"
import img3 from "./../../../assets/images/header4.jpeg"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeHeader = () => {

  const { t } = useTranslation()
  return (
    <div className='mb-5'>
      <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        effect={"fade"}
        modules={[EffectFade, Autoplay, Navigation]}
        className={`mySwiper ${styles['swiper-style']}`}>
        <SwiperSlide className={`${styles.swiperHeader}`}>
          <img src={img1} className={styles.blur} alt="" />
          <div className={`${styles['home-header__info']} text-center`}>
            <div className='container'>
              <h2>{t("اترك أثرا هو هدفنا")}</h2>
              <p className='mb-5'>{t(" فكن معنا لترك أثرا جميلا في العالم")}</p>
              <div className='row '>


              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img2} className={styles.blur} alt="" />   <div className={`${styles['home-header__info']} text-center`}>
          <div className='container'>
            <h2>{t("اترك أثرا هو هدفنا")}</h2>
            <p className='mb-5'>{t(" فكن معنا لترك أثرا جميلا في العالم")}</p>
            <div className='row '>


            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img3} className={styles.blur} alt="" />
          <div className={`${styles['home-header__info']} text-center`}>
            <div className='container'>
              <h2>{t("مهما كان تبرعك صغيراً")}</h2>
              <p className='mb-5'>{t("مهما كان تبرعك صغيراً")}</p>
              <div className='row '>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default HomeHeader