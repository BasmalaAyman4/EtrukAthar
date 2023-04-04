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

                <div className="container-fluid">

                    <p className={`${styles.donate__para}`}>{t("نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب")}</p>
                    <div className='row'>
                    <div className='col-lg-2 col-md-12 col-sm-12'>
                    <fieldset>
                        <h4 className='side-filter__item-header-title'> categories </h4>
                        <div class="radio-item-container">
                            <div class="radio-item">
                                <label className='label_radio' for="vanilla">
                                    <input type="radio" id="vanilla" name="flavor" value="vanilla" />
                                    <span>هاي  </span>
                                </label>
                            </div>

                            <div class="radio-item">
                                <label className='label_radio' for="chocolate">
                                    <input type="radio" id="chocolate" name="flavor" value="chocolate" />
                                    <span className='label-radio__content'>Chocolate</span>
                                 </label>
                            </div>

                            <div class="radio-item">
                                <label className='label_radio' for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry </span>
                                </label>
                            </div>
                            <div class="radio-item">
                                <label className='label_radio' for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry </span>
                                </label>
                            </div>
                            <div class="radio-item">
                                <label className='label_radio' for="strawberry">
                                    <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                    <span>Strawberry </span>
                                </label>
                            </div>
                          
                        </div>
                        <div class="form-group mt-5">
                        <h4 className='side-filter__item-header-title pb-3'>donation types</h4>
                        
                            <input class="form-group_checklist" type="checkbox" id="html" />
                            <label class="form-group_checklist_label" for="html">HTML</label>
                            </div>
                            <div class="form-group">
                            <input class="form-group_checklist" type="checkbox" id="css" />
                            <label  class="form-group_checklist_label" for="css">CSS</label>
                            </div>
                            <div class="form-group">
                            <input class="form-group_checklist" type="checkbox" id="javascript" />
                            <label  class="form-group_checklist_label" for="javascript">Javascript</label>
                            </div>
  
    
                  </fieldset>
                    </div>
                    <div className='col-lg-10 col-md-12 col-sm-12'>
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
