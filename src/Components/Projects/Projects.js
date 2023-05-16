import React, { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.css';
import CardCase from './../Card/Card'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

import { ToastContainer } from "react-toastify";
import Cookies from 'js-cookie'

import AddCase from '../AddCase/AddCase'
import Loading from '../Loading/Loading'

export default function Projects() {
    const { t } = useTranslation()
    const [dataCases, setDataCases] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const [dataType, setDataType] = useState([]);
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [donationtypeId, setDonationId] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState('')

    const handleFilterCategoryType = (e) => {
        setCategoryId(e.target.value)
    }
    const handleFilterDonationType = (e) => {
        setDonationId(e.target.value)
    }
    console.log(dataType, "jjj")

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios.get(`https://otrok.invoacdmy.com/api/user/category/index?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCategories(response.data.Categories)
                    setIsLoading(false)
                }
                ).catch((err) => { console.log(err) })
            axios.get(`http://otrok.invoacdmy.com/api/user/donation//donation/types?lang=ar`)
                .then(response => {
                    setDataType(response.data.Donationtypes)
                    console.log(response.data.Donationtypes, "jjj")
                    setIsLoading(false)
                }
                ).catch((err) => { console.log(err) })
            axios.get(`https://otrok.invoacdmy.com/api/user/case/index?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCases(response.data.cases)
                    setIsLoading(false)
                }
                ).catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })
        }, 500)
    }, [currentLanguageCode])


    useEffect(() => {
        setIsLoading(true)

        if (categoryId !== '' && donationtypeId === '') {
            axios.get(`https://otrok.invoacdmy.com/api/user/case/category/${categoryId}?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCases(response.data.cases)
                    setIsLoading(false)
                }
                ).catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })

        }
        if (categoryId === '' && donationtypeId !== '') {
            axios.get(`https://otrok.invoacdmy.com/api/user/case/donation/${donationtypeId}?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCases(response.data.cases)
                    setIsLoading(false)
                }
                ).catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                })
        }
        if (categoryId !== '' && donationtypeId !== '') {
            axios.get(`https://otrok.invoacdmy.com/api/user/case/category/donation/${categoryId}/${donationtypeId}?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCases(response.data.cases)
                    setIsLoading(false)

                }
                ).catch((err) => {

                    console.log(err)
                    setIsLoading(false)
                })
        }
        if (categoryId === '' && donationtypeId === '') {
            axios.get(`https://otrok.invoacdmy.com/api/user/case/index?lang=${currentLanguageCode}`)
                .then(response => {
                    setDataCases(response.data.cases)
                    setIsLoading(false)

                }
                ).catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                }
                )
        }
    }, [currentLanguageCode, donationtypeId, categoryId])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>
            <section className={`${styles.projects} mb-5 pb-5`}>

                <HeaderTitle title={t("الحالات")} para={t("المبلغ المجموع للحالات")} price='1.037.976.07$' />
                <Button onClick={handleShow} className={`${styles.donate__link}`}>
                    {t(" اضافة حالة لصندوق الحالات")}
                </Button>
                <div>

                </div>
                <AddCase show={show} onHide={handleClose} setShow={setShow} />
                <div className="container mb-5">
                    <p className={`${styles.donate__para}`}>{t("نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب")}</p>
                    <div className={`${styles.projects_dir} row mb-5 pb-5`}>
                        <div className='col-lg-2 col-md-12 col-sm-12 category'>
                            <fieldset className={`${styles.category}`}>
                                <h4 className='side-filter__item-header-title'> {t("فئات")} </h4>
                                <div className="radio-item-container">
                                    <div className="radio-item">
                                        <label className='label_radio' for=''>
                                            <input type="radio" id='' name="caseCategory" value='' onChange={handleFilterCategoryType} />
                                            <span> {t("جميع الحالات")} </span>
                                        </label>
                                    </div>
                                    {dataCategories && dataCategories.map(category =>
                                        <div className="radio-item">
                                            <label className='label_radio' for={category.id}>
                                                <input type="radio" id={category.id} name="caseCategory" value={category.id} onChange={handleFilterCategoryType} />
                                                <span> {category.name} </span>
                                            </label>
                                        </div>
                                    )}

                                </div>
                                <h4 className='side-filter__item-header-title pb-3'>{t("انواع التبرع")}</h4>
                                <div className="radio-item">
                                    <label className='label_radio' for=''>
                                        <input type="radio" id='' name="caseTypeId" value='' onChange={handleFilterDonationType} />
                                        <span> {t("جميع الأنواع")} </span>
                                    </label>
                                </div>
                                {currentLanguageCode === 'ar' ?
                                    <>
                                        {dataType && dataType.map(type => (
                                            <div className="radio-item">
                                                <label className='label_radio' for={type.name}>
                                                    <input type="radio" name="caseTypeId" id={type.name} value={type.id} onChange={handleFilterDonationType} />
                                                    <span> {type.name} </span>
                                                </label>
                                            </div>

                                        ))}
                                    </>
                                    :
                                    <>
                                        {dataType && dataType.map(type => (
                                            <div className="radio-item">
                                                <label className='label_radio' for={type.name}>
                                                    <input type="radio" name="caseTypeId" id={type.name} value={type.id} onChange={handleFilterDonationType} />
                                                    <span> {type.name} </span>
                                                </label>
                                            </div>

                                        ))}
                                    </>
                                }
                            </fieldset>
                        </div>

                        <div className='col-lg-10 col-md-12 col-sm-12 mb-5'>
                            <div className='row mt-5'>
                                {dataCases && dataCases.map(caseCard =>
                                    <div className='col-lg-4' key={caseCard?.id}>

                                        <CardCase
                                            id={caseCard?.id}
                                            donationType={caseCard?.donationtype_id}
                                            photo={caseCard?.caseimage[0]?.image}
                                            title={caseCard?.name}
                                            para={caseCard?.description}
                                            progress={((caseCard?.paied_amount * 100) / caseCard?.initial_amount)}
                                            totalPrice={caseCard?.initial_amount} numOfDonates={caseCard?.paied_amount} />

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}