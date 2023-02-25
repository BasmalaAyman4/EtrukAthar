import React from 'react'
import { Pagination } from 'swiper'
import styles from './RoundomCases.module.css'
import  './RoundomCases.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import pro1 from './../../../assets/images/pro1.jpg'
import Card from '../../Card/Card';

const RoundomCases = () => {
  return (
    <section className={`mt-5 ${styles["roundom-cases"]}`}>
        <div className='container'>
        <Swiper
         spaceBetween={30}
          autoHeight={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
      
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}

        className="mySwiper"
      >
        <SwiperSlide>
            <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>
        <SwiperSlide>
           <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>

        <SwiperSlide>
            <Card title='دفء الحياة 11 '
                  para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                  price='42,512$'
                  totalPrice='جمعت من 50,000$'
                  numOfDonates='44'
                  prog='80'
                  img={pro1} 
            />
        </SwiperSlide>
       
      </Swiper>
      </div>
    </section>
  )
}

export default RoundomCases