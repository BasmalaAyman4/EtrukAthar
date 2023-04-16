import React, { useState } from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { Link } from 'react-router-dom'
import CardJson from '../../Data/Card.json'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.css';
import cases from './../../Data/filterByCases.json'
import types from "./../../Data/filterByDonationType.json"
import { Card } from 'react-bootstrap'
import CardCase from './../Card/Card'
export default function Projects() {
    const { t } = useTranslation()
    const [dataCases, setDataCases] = useState(cases);
    const [dataTypes, setDataTypes] = useState(types);
<<<<<<< HEAD
    const [data, setData] = React.useState(CardJson);
=======
    const [data, setData] = useState(CardJson);
>>>>>>> 4bc221611728ef64d6ae0685abcd297e54ff971c
    return (
        <>
            <section className={`${styles.projects}`}>
                <HeaderTitle title={t("الحالات")} para={t("المبلغ المجموع للحالات")} price='1.037.976.07$' />
                <Link to='' className={`${styles.donate__link}`}>{t("تبرع فوري لصندوق الحالات")}</Link>

                <div className="container">

                    <p className={`${styles.donate__para}`}>{t("نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب")}</p>
                    <div className={`${styles.projects_dir} row`}>
                        <div className='col-lg-2 col-md-12 col-sm-12 category'>
                            <fieldset className={`${styles.category}`}>
                                <h4 className='side-filter__item-header-title'> {t("انواع الحالات")} </h4>
                                <div class="radio-item-container">
                                    {dataCases && dataCases.map(category =>
                                        <div class="radio-item">
                                            <label className='label_radio' for={category.id}>
                                                <input type="radio" id={category.id} name="flavor" value={category.category_name} />
                                                <span> {category.category_name} </span>
                                            </label>
                                        </div>
                                    )}

                                </div>
                                <h4 className='side-filter__item-header-title pb-3'>{t("انواع التبرع")}</h4>
<<<<<<< HEAD
                                
                                {dataTypes&&dataTypes.map(type=>(
                                            <div class="form-group ">
                                            <input class="form-group_checklist" type="checkbox" id={type.id} />
                                            <label class="form-group_checklist_label" for={type.id}>{type.type_name}</label>
                                    </div>
                                ))}
                             
                            
    
=======
>>>>>>> 4bc221611728ef64d6ae0685abcd297e54ff971c

                                {dataTypes && dataTypes.map(type => (
                                    <div class="form-group ">
                                        <input class="form-group_checklist" type="checkbox" id={type.id} />
                                        <label class="form-group_checklist_label" for={type.id}>{type.type_name}</label>
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                        <div className='col-lg-10 col-md-12 col-sm-12'>
                            <div className={`${styles.projects__body}`}>
                                {data &&
                                    data.map(({ id, title, para, progress, totalPrice, numOfDonates }) => (
                                        <CardCase id={id} title={title} para={para} progress={progress} totalPrice={totalPrice} numOfDonates={numOfDonates} />
                                    ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
