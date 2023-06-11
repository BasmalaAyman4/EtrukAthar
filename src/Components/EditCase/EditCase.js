import React from 'react'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '../../Components/Projects/Projects.module.css'
import { ToastContainer, toast } from 'react-toastify';
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
import { Button } from 'react-bootstrap';
import '../../Components/Projects/Projects.css'
import plus from "./../../assets/icons/+.svg"
import minus from "./../../assets/icons/mi.svg"
import axios from 'axios';
import { BsQuestionCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const EditCase = ({ show, setShow }) => {
    const updateId = useParams()
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [token, setToken] = useState(localStorage.getItem("token"))
    const handleClose = () => setShow(false);


    const [formData, setFormData] = useState({

        descriptionEn: '',
        descriptionAr: '',
        statusCase: '',
        file: ''
    })
    console.log(formData.statusCase, "ss")
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/update/${updateId.id}`)
            .then((response) => {
                console.log(response)
                setFormData({
                    descriptionEn: response.data.case.description_en,
                    descriptionAr: response.data.case.description_ar,
                    statusCase: response.data.case.status,
                    file: response.data.case.file,
                })
                let arr = []
                response.data?.case?.caseimage.map(i => { arr.push(i?.image) })
                setImage(arr)
            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])

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
        console.log(formData)
    }

    let previewUploadFile = (e) => {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        setFormData(prevValue => {
            return {
                ...prevValue,
                file: file
            }
        })
    }
    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const addNewCase = new FormData();
    addNewCase.append("description_ar", formData.descriptionAr);
    addNewCase.append("description_en", formData.descriptionEn);
    if (fileImage) {
        [...fileImage].forEach((item, index) => {
            addNewCase.append("images[]", item);
        })
    }
    addNewCase.append("status", formData.statusCase);

    if (formData.file) {
        addNewCase.append("file", formData.file);
    }
    const onSubmitHandler = (e) => {
        console.log(formData.donationTypeId)
        console.log(formData)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post(`https://otrok.invoacdmy.com/api/user/case/update/${updateId.id}?lang=${currentLanguageCode}`, addNewCase, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
            }
        }, [currentLanguageCode])
            .then(response => {
                toast.success(response.data.message)
                console.log(response)
            }
            ).catch((err) => { toast.error(err.response.data.message) })

    }
    function deleteFile(e) {
        e.preventDefault()
        setImage([])
    }




    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {t("لتعديل حالة يرجي ملئ البيانات")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {!token ? <p className={`${styles.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${styles.link}`}> تسجل دخول</a></p> :
                        <Form onSubmit={onSubmitHandler}>
                            <div className='text-center'>
                                <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                                    addFileInput.current = e
                                }} id="input-file" multiple name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />

                                {
                                    imageUrl.length === 0 ?
                                        <>
                                            <div ref={addFile} onClick={() => { handleLogo() }}>
                                                <img className={`${styles.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                            </div>

                                        </>
                                        :

                                        <div className='case_images'>
                                            {imageUrl.length > 0 &&
                                                imageUrl.map((item, index) => {
                                                    return (
                                                        <div ref={addFile} onClick={() => { handleLogo() }} key={item}>
                                                            <img className={`${styles.img}`} ref={imageContentRef} src={item} alt="" />

                                                        </div>
                                                    );
                                                })}
                                            <button className='btn' type="button" onClick={(e) => deleteFile(e)}>
                                                {t("حذف الصور")}
                                            </button>
                                        </div>
                                }
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control as="textarea" rows="3" name="descriptionAr" className={`${styles.textArea}`} placeholder={t("نبذه مختصره عن الحاله بالعربية")} onChange={onChangeHandler} value={formData.descriptionAr} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control as="textarea" rows="3" name="descriptionEn" className={`${styles.textArea}`} placeholder={t("نبذه مختصره عن الحاله بالانجليزية")} onChange={onChangeHandler} value={formData.descriptionEn} />
                            </Form.Group>
                            <Form.Group className={`${styles["questionMark__container"]} mb-3`} controlId="" >
                                <Form.Control
                                    name="file"
                                    className={`${styles.input}`}
                                    placeholder={t("الملف الملحق")}
                                    type='file'
                                    ref={(e) => { addFileInput.current = e }}
                                    onChange={(e) => { previewUploadFile(e) }}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <select
                                    className="input select"
                                    name="statusCase"
                                    onChange={onChangeHandler}
                                    value={formData.statusCase}
                                >
                                    <option value=''>{t("الحالة")}</option>
                                    <option value='published'> {t("نشر")}</option>
                                </select>
                            </Form.Group>
                            <Button type="submit" className={styles.signup__btn} >
                                {t("تعديل")}
                            </Button>
                        </Form>
                    }
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default EditCase