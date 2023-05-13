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
        console.log(ImagesArray);
        setImage([...imageUrl, ...ImagesArray]);
        setFormData(prevValue => {
            return {
                ...prevValue,
                'img': files
            }
        })
        console.log(images, 'images')
        console.log(formData)
    }
    function deleteFile(e) {
        e.preventDefault()
        setImage([])
    }

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const [formError, setFormError] = useState({})
    const onSubmitHandler = (e) => {

        const toastId = toast.loading("please wait ... ")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()


    }
    return (
        <>
            <section className={`${style.acutions}`}>
                <HeaderTitle
                    title={t("المزادات")}
                    para={t("المبلغ المجموع للمزادات")}
                    price='1.037.976.07$' />

                <div className={`${style.acution}`}>
                    <div className={`${style.acutionBody}`}>
                        <Link variant="primary" onClick={handleShow} className={`${style.modalAcution}`}>اضافة حالة للمزاد</Link>
                        <Modal size="lg" show={show} onHide={handleClose} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    لاضافة حالة يرجي ملئ البيانات
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                {!token ? <p className={`${style.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${style.link}`}> تسجل دخول</a></p> :
                                    <Form onSubmit={onSubmitHandler}>
                                        <div className='text-center'>
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
                                            <Form.Control name="titleAr" className={`${style.input}`} placeholder="    اسم الحالة بالعربية" onChange={onChangeHandler} value={formData.titleAr} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control name="titleEn" className={`${style.input}`} placeholder="    اسم الحالة بالانجيزية" onChange={onChangeHandler} value={formData.titleEn} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control as="textarea" rows="3" name="descriptionAr" className={`${style.textArea}`} placeholder="نبذه مختصره عن الحاله بالعربية" onChange={onChangeHandler} value={formData.descriptionAr} />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Control as="textarea" rows="3" name="descriptionEn" className={`${style.textArea}`} placeholder="نبذه مختصره عن الحاله بالانجليزية" onChange={onChangeHandler} value={formData.descriptionEn} />
                                        </Form.Group>
                                        <Button type="submit" className={style.signup__btn} >
                                            اضافة الان
                                        </Button>
                                    </Form>
                                }
                            </Modal.Body>
                        </Modal>
                        <h2 className={`${style.acutionBody__title}`}>اخر المزادات المضافة</h2>
                        <img alt="" src={acutionImg} className={`${style.acutionBody__img}`} />
                    </div>
                    <Container>
                        <div className={`${style.AcutionCards}`}>
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />
                            <AcutionCard
                                title="Orange Fiat 500"
                                bid="Current Bid: $500,000.00" />


                        </div>
                    </Container>
                </div>
            </section>

        </>
    )
}
