import React from 'react'
import { Autoplay, Pagination, Navigation ,EffectFade} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeHeader.module.css"
import "swiper/css";
import img1 from "./../../../assets/images/header3.jpg"
import img2 from "./../../../assets/images/header2.jpeg"
import img3 from "./../../../assets/images/header4.jpeg"

const HomeHeader = () => {
  return (
    <>
    <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        effect={"fade"}
        navigation={true}
        modules={[EffectFade,Autoplay, Navigation]}
        className="mySwiper">
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className={`${styles.swiperHeader}`}><img src={img3} alt="" /></SwiperSlide>
      </Swiper>
      </>
  )
}

export default HomeHeader