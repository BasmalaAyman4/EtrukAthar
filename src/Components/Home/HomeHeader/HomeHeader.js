import React from 'react'
import { Autoplay, Pagination, Navigation ,EffectFade} from "swiper";
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
        navigation={true}
        modules={[EffectFade,Autoplay, Navigation]}
        className= {`mySwiper ${styles['swiper-style']}`}>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img1} className={styles.blur} alt="" /></SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img2} className={styles.blur}  alt="" /></SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img3} className={styles.blur}  alt="" /></SwiperSlide>
      </Swiper>
      <div className={`${styles['home-header__info']} text-center`}>
         <div className='container'>
          <h2>{t}</h2>
          <p className='mb-3'>فإنه يحدث أثراً</p>
           <div className='row'>
           <div className={`col-lg-6 col-sm-12 mb-5  ${styles['text-algin-style_white-btn']} `}>
                <Link to="" className={`${styles["home-header__btn_white"]} ` }>ملف الشفافية</Link>
             </div>
             <div className={`col-lg-6 col-sm-12 ${styles['text-algin-style_btn']}`}>
                <Link to="" className={`${styles["home-header__btn"]} ` } >التبرع الفوري</Link>
             </div>
            
           </div>
           </div>
      </div>
    </div>
  )
}

export default HomeHeader