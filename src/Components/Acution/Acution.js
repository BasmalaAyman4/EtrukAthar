import React, { useEffect, useRef, useState } from 'react'
import style from "./Acution.module.css"
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import acutionImg from "../../assets/images/section-border.png"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AcutionCard from '../AcutionCard/AcutionCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
import { BsQuestionCircle } from "react-icons/bs";
export default function Acution() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [formData, setFormData] = useState({
        titleAr: '',
        titleEn: '',
        img: '',
        descriptionEn: '',
        descriptionAr: '',
        dateSend: '',
        timeSend: '',
        price: '',
        mazad: ''
    })
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
    function handleLogo() {
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
    }
    const [imageUrl, setImage] = useState([])
    const [fileImage, setFileImages] = useState()
    let images = [];
    let previewUploadImage = (e) => {
        let files = e.target.files
        setFileImages(e.target.files)

        if (!files) {
            return;
        }

        let ImagesArray = Object.entries(e.target.files).map((e) =>
            URL.createObjectURL(e[1])
        );
        // console.log(ImagesArray);
        setImage([...imageUrl, ...ImagesArray]);
        setFormData(prevValue => {
            return {
                ...prevValue,
                'img': files
            }
        })
        /*   console.log(images, 'images')
          console.log(formData) */
    }
    function deleteFile(e) {
        e.preventDefault()
        setImage([])
    }

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const addNewAcution = new FormData();
    if (fileImage) {

        [...fileImage].forEach((item, index) => {
            addNewAcution.append("images[]", item);

        })
    }
    addNewAcution.append("name_ar", formData.titleAr);
    addNewAcution.append("name_en", formData.titleEn);
    addNewAcution.append("description_en", formData.descriptionEn);
    addNewAcution.append("description_ar", formData.descriptionAr);
    addNewAcution.append("starting_price", formData.price);
    addNewAcution.append("mazad_amount", formData.mazad);
    addNewAcution.append("end_date", formData.dateSend);
    addNewAcution.append("end_time", formData.timeSend);
    const onSubmitHandler = (e) => {

        const toastId = toast.loading("please wait ... ")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/mazad/store", addNewAcution, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success('تم اضافه المزاد بنجاح .. رجاء الانتظار حتي التأكد من البيانات و يتم قبولها من قِبلنا ')
                /*   console.log(response) */
            }
            ).catch((err) => { toast.error(err.response.data.message) })

    }
    // console.log(formData.dateSend)
    /*    const input = "2020/08/19"
       const [year, month, day] = input.split('-')
       console.log(`${year}-${month}-${day}`) */
    return (
        <>
            <section className={`${style.acutions}`}>
                <HeaderTitle
                    title={t("المزادات")}
                    para={t("المبلغ المجموع للمزادات")}
                    price='1.037.976.07$' />

                <div className={`${style.acution}`}>
                    <div className={`${style.acutionBody}`}>
                        <Link variant="primary" onClick={handleShow} className={`${style.modalAcution}`}>{t("اضافة حالة للمزاد")}</Link>
                        <Modal size="lg" show={show} onHide={handleClose} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    {t("لاضافة حالة يرجي ملئ البيانات")}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                {!token ? <p className={`${style.para}`}> {t("يجب تسجيل دخول لاضافة حالة ")} <a href='/login' className={`${style.link}`}>{t("تسجيل دخول")}</a></p> :
                                    <Form onSubmit={onSubmitHandler}>
                                        <div className='text-center mb-3'>
                                            <input className={`${style.fileImg}  input-file-js`} ref={(e) => {
                                                addFileInput.current = e
                                            }} id="input-file" multiple name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />

                                            {
                                                imageUrl.length === 0 ?
                                                    <>
                                                        <div ref={addFile} onClick={() => { handleLogo() }}>
                                                            <img className={`${style.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                                        </div>

                                                    </>
                                                    :

                                                    <div className='case_images'>
                                                        {imageUrl.length > 0 &&
                                                            imageUrl.map((item, index) => {
                                                                return (
                                                                    <div ref={addFile} onClick={() => { handleLogo() }} key={item}>
                                                                        <img className={`${style.img}`} ref={imageContentRef} src={item} alt="" />

                                                                    </div>
                                                                );
                                                            })}
                                                        <button className='btn' type="button" onClick={(e) => deleteFile(e)}>
                                                            delete
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="titleAr" className={`${style.input}`} placeholder={t("اسم المزاد بالعربية")} onChange={onChangeHandler} value={formData.titleAr} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="titleEn" className={`${style.input}`} placeholder={t("اسم المزاد بالانجيزية")} onChange={onChangeHandler} value={formData.titleEn} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control as="textarea" rows="3" name="descriptionAr" className={`${style.textArea}`} placeholder={t("نبذه مختصره عن المزاد بالعربية")} onChange={onChangeHandler} value={formData.descriptionAr} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control as="textarea" rows="3" name="descriptionEn" className={`${style.textArea}`} placeholder={t("نبذه مختصره عن المزاد بالانجليزية")} onChange={onChangeHandler} value={formData.descriptionEn} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="price" className={`${style.input}`} placeholder={t("السعر الذي يبدأ به المزاد")} onChange={onChangeHandler} value={formData.price} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="mazad" className={`${style.input}`} placeholder={t("السعر الذي يزيد به المزاد")} onChange={onChangeHandler} value={formData.mazad} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={formData.dateSend} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="timeSend" className={`${style.input} ${style.question}`} onChange={onChangeHandler} value={formData.timeSend} placeholder="الوقت لانهاء المزاد  " />
                                            <p className={` ${style.questionMark}`}><BsQuestionCircle /></p>
                                            <p className={` ${style.questionMark__para}`}>{t("الوقت المشابهه لوقت الادخال 14:00:00")}</p>
                                        </Form.Group>
                                        <Button type="submit" className={style.signup__btn} >
                                            اضافة الان
                                        </Button>
                                    </Form>
                                }
                            </Modal.Body>
                        </Modal>
                        <h2 className={`${style.acutionBody__title}`}>{t("اخر المزادات المضافة")}</h2>
                        <img alt="" src={acutionImg} className={`${style.acutionBody__img}`} />
                    </div>
                    <Container>
                        <div className={`${style.AcutionCards}`}>
                            <AcutionCard />
                        </div>
                    </Container>
                </div>
                <ToastContainer />
            </section>

        </>
    )
}
