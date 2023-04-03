import React from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { Container } from 'react-bootstrap'
import pro1 from './../../assets/images/pro1.jpg'
import pro2 from './../../assets/images/pro2.jpeg'
import pro3 from './../../assets/images/pro3.jpg'
import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()
    return (
        <>
            <section className={`${styles.projects}`}>
                <HeaderTitle title={t("المشاريع")} para={t("المبلغ المجموع للمشاريع")} price='1.037.976.07$' />
                <Link to='' className={`${styles.donate__link}`}>{t("تبرع فوري لصندوق المشاريع")}</Link>

                <div className="container">

                    <p className={`${styles.donate__para}`}>{t("نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب")}</p>
                    <div className='row'>
                    <div className='col-lg-3'>
                    <fieldset>
                        <legend> جميع الحالات </legend>
                        <div class="radio-item-container">
                            <div class="radio-item">
                                <label for="vanilla">
                                    <input type="radio" id="vanilla" name="flavor" value="vanilla" />
                                    <span>هاي <span class="icon">💃</span> </span>
                                </label>
                            </div>

                            <div class="radio-item">
                                <label for="chocolate">
                                    <input type="radio" id="chocolate" name="flavor" value="chocolate" />
                                    <span className='label-radio__content'>Chocolate </span> <span class="icon">🍫</span></label>
                            </div>

                            <div class="radio-item">
                                <label for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry <span class="icon">🍓</span></span></label>
                            </div>
                            <div class="radio-item">
                                <label for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry <span class="icon">🍓</span></span></label>
                            </div>
                            <div class="radio-item">
                                <label for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry <span class="icon">🍓</span></span></label>
                            </div>
                        </div>
                  </fieldset>
                    </div>
                    <div className='col-lg-9'>
                    <div className={`${styles.projects__body}`}>
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...'
                            price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                    </div>
                    </div>
      
                    </div>
                </div>

            </section>
        </>
    )
}
