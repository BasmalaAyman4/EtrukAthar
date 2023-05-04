import React, { useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.css';
import CardCase from './../Card/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import Cookies from 'js-cookie'
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
export default function Projects() {
    const { t } = useTranslation()
    const [dataCases, setDataCases] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const [dataType, setDataType] = useState([]);
    const [filterLink, setfilterLink] = useState('')
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const handleFilterCategoryType = (e) => {
        console.log(e.target.value, "category")
        e.target.value === '' ?
            setfilterLink(`https://otrok.invoacdmy.com/api/user/case/index?lang=${currentLanguageCode}`)
            :
            setfilterLink(`https://otrok.invoacdmy.com/api/user/case/category/${e.target.value}?lang=${currentLanguageCode}`)
    }
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/category/index?lang=${currentLanguageCode}`)
            .then(response => {
                setDataCategories(response.data.Categories)
            }
            ).catch((err) => { console.log(err) })
        axios.get(`https://otrok.invoacdmy.com/api/dashboard/donationtype/index`)
            .then(response => {
                setDataType(response.data.Donationtypes)
            }
            ).catch((err) => { console.log(err) })
        axios.get(`https://otrok.invoacdmy.com/api/user/case/index?lang=${currentLanguageCode}`)
            .then(response => {
                setDataCases(response.data.cases)
            }
            ).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    useEffect(() => {
        axios.get(filterLink)
            .then(response => {
                setDataCases(response.data.cases)
                console.log(response.data.cases, 'cases')
            }
            ).catch((err) => { console.log(err) })
    }, [currentLanguageCode, filterLink])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [active, setActive] = useState('')
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [formData, setFormData] = useState({
        titleAr: '',
        titleEn: '',
        img: '',
        descriptionEn: '',
        descriptionAr: '',
        totalPrice: '',
        paiedAmount: '',
        caseTypeId: '',
        donationTypeId: '',
    })
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
    function handleLogo() {
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
    }
    const [imageUrl, setImage] = useState(null)
    let previewUploadImage = (e) => {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let preViewLink = URL.createObjectURL(file);
        setImage(preViewLink)
        setFormData(prevValue => {
            return {
                ...prevValue,
                'img': file
            }
        })
    }
    const [formError, setFormError] = useState({})
    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData, "form")
        console.log(formData.paiedAmount)
    }
    function errorAddCase() {
        let err = {}

        if (formData.title === '') {
            err.title = 'عنوان الحالة مطلوب';
        }
        if (formData.img === '') {
            err.img = "يرجي اختيار صوره للحالة";
        }
        if (formData.description === '') {
            err.description = "نبذه مختصره عن الحالة مطلوبه";
        }
        if (formData.totalPrice === '') {
            err.totalPrice = "المبلغ المراد تجميعه مطلوب"
        }
        if (formData.paiedAmount === '') {
            err.paiedAmount = "المبلغ الذي تم تجميعه مطلوب"
        }
        if (formData.caseType === '') {
            err.caseType = "يرجي اختيار نوع الحالة"
        }
        if (formData.donationType === '') {
            err.donationType = ' يرجي اختيار نوع التبرع';
        }
        setFormError({ ...err })
    }
    const addNewCase = new FormData();
    addNewCase.append("name_ar", formData.titleAr);
    addNewCase.append("name_en", formData.titleEn);
    addNewCase.append("description_ar", formData.descriptionAr);
    addNewCase.append("description_en", formData.descriptionEn);
    addNewCase.append("initial_amount", formData.totalPrice);
    addNewCase.append("paied_amount", formData.paiedAmount);
    addNewCase.append("image", formData.img);
    addNewCase.append("donationtype_id", formData.donationTypeId);
    addNewCase.append("category_id", formData.caseTypeId);
    const onSubmitHandler = (e) => {
        console.log(formData.donationTypeId)
        console.log(formData)
        console.log(token)
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        errorAddCase()
        axios.post("https://otrok.invoacdmy.com/api/user/case/store", addNewCase, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
                console.log(response)
            }
            ).catch((err) => { toast.error(err.response.data.message) })

    }
    const donationAmount = (e) => {
        const donAmount = e.target.value;
        setActive(donAmount)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <section className={`${styles.projects}`}>

                <HeaderTitle title={t("الحالات")} para={t("المبلغ المجموع للحالات")} price='1.037.976.07$' />
                <Button onClick={handleShow} className={`${styles.donate__link}`}>
                    {t(" اضافة حالة لصندوق الحالات")}
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            لاضافة حالة يرجي ملئ البيانات
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body dir='rtl'>
                        {!token ? <p className={`${styles.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${styles.link}`}> تسجل دخول</a></p> :
                            <Form onSubmit={onSubmitHandler}>
                                <div>
                                    <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                                        addFileInput.current = e
                                    }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                                    {
                                        imageUrl == null ?
                                            <>
                                                <div ref={addFile} onClick={() => { handleLogo() }}>
                                                    <img className={`${styles.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                                </div>
                                                {/* {errors.Logo && <span className="error-message ">{errors.Logo}</span>} */}
                                            </>
                                            :
                                            <div ref={addFile} onClick={() => { handleLogo() }}>
                                                <img className={`${styles.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                                            </div>
                                    }
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control name="titleAr" className={`${styles.input}`} placeholder="    عنوان للحالة بالعربية" onChange={onChangeHandler} value={formData.titleAr} />
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.title}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control name="titleEn" className={`${styles.input}`} placeholder="    عنوان للحالة بالانجيزية" onChange={onChangeHandler} value={formData.titleEn} />
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.title}
                                    </Form.Text>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control as="textarea" rows="3" name="descriptionEn" className={`${styles.textArea}`} placeholder="بالانجليزيه نبذة مختصرة عن الحالة" onChange={onChangeHandler} value={formData.descriptionEn} />
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.description}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control as="textarea" rows="3" name="descriptionAr" className={`${styles.textArea}`} placeholder=" عربي نبذة مختصرة عن الحالة" onChange={onChangeHandler} value={formData.descriptionAr} />
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.description}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <select
                                        placeholder="State"
                                        className={`${styles.input} select`}
                                        name="caseTypeId"
                                        onChange={onChangeHandler}
                                        value={formData.caseTypeId}
                                    >
                                        <option className={styles.option}>نوع الحالة</option>
                                        {dataCategories && dataCategories.map(category =>
                                            <option className={styles.option} value={category.id} key={category.id}>{category.name}</option>
                                        )}
                                    </select>
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.caseType}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <select
                                        placeholder="State"
                                        className={`${styles.input} select`}
                                        name="donationTypeId"
                                        onChange={donationAmount}
                                        value={formData.donationTypeId}
                                    >
                                        <option className={styles.option}> نوع التبرع</option>
                                        {dataType && dataType.map(type =>
                                            <option className={styles.option} value={type.id} key={type.id} >{type.name_ar}</option>
                                        )}
                                    </select>
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.donationType}
                                    </Form.Text>
                                </Form.Group>
                                {
                                    active === "5" && (
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <select
                                                placeholder="furniture"
                                                className={`${styles.input} select`}
                                                name="donationTypeId"
                                            >
                                                <option className={styles.option}> نوع الاثاث</option>
                                                <option className={styles.option}> كؤاسي</option>
                                                <option className={styles.option}> تلاجات  </option>
                                                <option className={styles.option}> تلفزيونات</option>
                                                <option className={styles.option}>بوتجازات</option>
                                            </select>
                                        </Form.Group>
                                    )
                                }
                                {
                                    active === "4" && (
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <select
                                                placeholder="furniture"
                                                className={`${styles.input} select`}
                                                name="donationTypeId"
                                            >
                                                <option className={styles.option}> نوع الملابس</option>
                                                <option className={styles.option}> فساتين</option>
                                                <option className={styles.option}> بناطيل  </option>
                                                <option className={styles.option}> جواكت</option>
                                                <option className={styles.option}>طرح</option>
                                            </select>
                                        </Form.Group>
                                    )
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control name="totalPrice" type='number' className={`${styles.input}`} placeholder=" العدد المراد تجميعة " onChange={onChangeHandler} value={formData.totalPrice} />
                                    <Form.Text className={`${styles.msErr}`}>
                                        {formError.totalPrice}
                                    </Form.Text>
                                </Form.Group>
                                <Button type="submit" className={styles.signup__btn} onClick={handleClose} >
                                    اضافة الان
                                </Button>
                            </Form>
                        }
                    </Modal.Body>
                </Modal>
                <div className="container">
                    <p className={`${styles.donate__para}`}>{t("نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب")}</p>
                    <div className={`${styles.projects_dir} row`}>
                        <div className='col-lg-2 col-md-12 col-sm-12 category'>
                            <fieldset className={`${styles.category}`}>
                                <h4 className='side-filter__item-header-title'> {t("انواع الحالات")} </h4>
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

                                {dataType && dataType.map(type => (
                                    <div className="form-group ">
                                        <input className="form-group_checklist" type="checkbox" id={type.name_ar} value={type.id} />
                                        <label className="form-group_checklist_label" for={type.name_ar} value={type.id}>{type.name_ar}</label>
                                    </div>
                                ))}

                            </fieldset>
                        </div>
                        <div className='col-lg-10 col-md-12 col-sm-12'>
                            <div className={`${styles.projects__body}`}>
                                {dataCases && dataCases.map(caseCard =>
                                    <CardCase id={caseCard.id} photo={caseCard.image} title={caseCard.name} para={caseCard.description} progress={((caseCard.paied_amount * 100) / caseCard.initial_amount)} totalPrice={caseCard.initial_amount} numOfDonates={caseCard.paied_amount} />
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