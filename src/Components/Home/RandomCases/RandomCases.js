import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import styles from './RandomCases.module.css'
import './RandomCases.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from '../../Card/Card';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const RandomCases = () => {

  const [randomCases, setRandomCases] = useState([])
  const currentLanguageCode = Cookies.get('i18next') || 'en'
  const { t } = useTranslation()
  useEffect(() => {
    axios.get(`https://otrok.invoacdmy.com/api/user/case/last?lang=${currentLanguageCode}`)
      .then(response => {
        setRandomCases(response.data.cases)
      }
      ).catch((err) => { console.log(err) })

  }, [currentLanguageCode])


  return (
    <section className={` ${styles["roundom-cases"]}`}>
      <div className='container '>
      <h3 className={`${styles["roundom-cases__title"]} text-center `}>{t("اخر الحالات المضافه")}</h3>
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
          {randomCases && randomCases.map(item => (
            randomCases.length > 0 ?
            <SwiperSlide className='mt-5'>
              <Card id={item.id}
               className= 'mt-5'
                donationType={item.donationtype_id}
                photo={item.caseimage[0]?.image}
                title={item.name}
                para={item.description}
                progress={((item.paied_amount * 100) / item.initial_amount).toFixed(0)}
                totalPrice={item.initial_amount} numOfDonates={item.paied_amount}
              />
            </SwiperSlide>
            :
            <div className='mt-5'>
            <div className='d-flex'>
                <h5 className='m-auto' >{t("لا توجد حالات متاحه")}</h5>
            </div>
        </div>
          ))}

        </Swiper>
      </div>
    </section>
  )
}

export default RandomCases