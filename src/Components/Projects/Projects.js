import React from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.css';
import CardJson from "./.././../Card.json";
export default function Projects() {
    const { t } = useTranslation()
    const [data, setData] = React.useState(CardJson);
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
                                    <div class="radio-item">
                                        <label className='label_radio' for="vanilla">
                                            <input type="radio" id="vanilla" name="flavor" value="vanilla" />
                                            <span> حالات طبية  </span>
                                        </label>
                                    </div>

                                    <div class="radio-item">
                                        <label className='label_radio' for="chocolate">
                                            <input type="radio" id="chocolate" name="flavor" value="chocolate" />
                                            <span className='label-radio__content'>حالات انسانية</span>
                                        </label>
                                    </div>

                                    <div class="radio-item">
                                        <label className='label_radio' for="strawberry">
                                            <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                            <span>كفالة يتيم </span>
                                        </label>
                                    </div>
                                    <div class="radio-item">
                                        <label className='label_radio' for="strawberry">
                                            <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                            <span>التعليم </span>
                                        </label>
                                    </div>
                                    <div class="radio-item">
                                        <label className='label_radio' for="strawberry">
                                            <input type="radio" id="strawberry" name="flavor" value="strawberry" />
                                            <span>الغارمين </span>
                                        </label>
                                    </div>

                                </div>
                                <div class="form-group mt-5">
                                    <h4 className='side-filter__item-header-title pb-3'>{t("انواع التبرع")}</h4>

                                    <input class="form-group_checklist" type="checkbox" id="html" />
                                    <label class="form-group_checklist_label" for="html">HTML</label>
                                </div>
                                <div class="form-group">
                                    <input class="form-group_checklist" type="checkbox" id="css" />
                                    <label class="form-group_checklist_label" for="css">CSS</label>
                                </div>
                                <div class="form-group">
                                    <input class="form-group_checklist" type="checkbox" id="javascript" />
                                    <label class="form-group_checklist_label" for="javascript">Javascript</label>
                                </div>


                            </fieldset>
                        </div>
                        <div className='col-lg-10 col-md-12 col-sm-12'>
                            <div className={`${styles.projects__body}`}>
                                {data &&
                                    data.map(({ id, title, para, progress, totalPrice, numOfDonates }) => (
                                        <Card id={id} title={title} para={para} progress={progress} totalPrice={totalPrice} numOfDonates={numOfDonates} />
                                    ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
