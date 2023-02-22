import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './../../../assets/icons/donation.svg'
import img2 from './../../../assets/icons/volunteer.svg'
import img3 from './../../../assets/icons/whattheysay.svg'
import styles from './HomeBrief.module.css'
const HomeBrief = () => {
  return (
    <section className={`${styles["home-brief"]} mt-5`}>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-4 col-sm-12'>
                    <div className='text-center'>
                        <Link class="" to="">
                            <img className={`${styles["home-brief__img"]} `} src={img1} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}>التبرعات الواردة</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >حرصاً منّا على تزويد جميع متبرعينا بجميع المعلومات حول أرصدة التبرعات الواردة وتفاصيلها نشارككم كل أرصدة التبرعات عبر ملف الشفافية</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-12 mb-5'>
                  <div className='text-center'> 
                        <Link class="" to="">
                            <img className={`${styles["home-brief__img"]} `} src={img2} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}> تطوع معنا</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >ؤمن بقيمة مبادرات التطوع ودورها في تغيير الحال على أرض الواقع، كما نؤمن بطاقات شبابنا ونفتح لهم الباب لمد يد العون لغيرهم</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-12 mb-5'>
                  <div className='text-center'>
                        <Link class="" to="">
                            <img className={`${styles["home-brief__img"]} pb-4`} src={img3} alt="" />
                        </Link>
                        <h4  className={`${styles["home-brief__title"]}`}> قالوا عنا</h4>
                        <p className={`${styles["home-brief__pragraph"]}`} >نظراً لوجودنا على أرض الواقع وتركنا أثراً واضحاً بفضل تبرعاتكم، نشارككم ما قالته عنا وسائل الإعلام المحلية والعالمية</p>
                    </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default HomeBrief