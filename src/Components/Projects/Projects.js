import React, { useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import './Projects.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import CardJson from '../../Data/Card.json'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.css';
import CardCase from './../Card/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();
    const [dataCases, setDataCases] = useState([]);
    const [dataTypes, setDataTypes] = useState([]);
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('token'))

    }, [token])
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result)
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null)
        }
    }, [image])
    useEffect(() => {

        axios.get("http://otrok.invoacdmy.com/api/dashboard/donationtype/index")
            .then(response => {
                setDataTypes(response.data.Donationtypes)
            }

            ).catch((err) => { console.log(err) })

        axios.get("http://otrok.invoacdmy.com/api/dashboard/category/index")
            .then(response => {
                setDataCases(response.data.Categories)
            }

            ).catch((err) => { console.log(err) })

    }, [])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    لاضافة حالة يرجي ملئ البيانات
                </Modal.Title>
            </Modal.Header>
            <Modal.Body dir='rtl'>
                {!token ? <p className={`${styles.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${styles.link}`}> تسجل دخول</a></p> :
                    <Form>
                        <div className={`${styles.logo}`}>
                            {preview ? (<img src={preview} alt='' onClick={() => { setImage(null) }} className={`${styles.img}`} />) :
                                (<button onClick={(event) => { event.preventDefault(); fileInputRef.current.click() }} className={`${styles.button}`}> اضافه صوره للحالة </button>)}
                            <input className={`${styles.fileImg}`} type='file' ref={fileInputRef} accept="image/*"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    if (file) {
                                        setImage(file)
                                    } else {
                                        setImage(null)
                                    }
                                }} />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Control name="userName" className={`${styles.input}`} placeholder=" عنوان للحالة" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Control as="textarea" rows="3" name="help" className={`${styles.textArea}`} placeholder="نبذة مختصرة عن الحالة" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Control name="money" className={`${styles.input}`} placeholder=" المبلغ المراد تجميعة " required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <select
                                placeholder="State"
                                className={`${styles.input} select`}
                                name="category"
                            >
                                <option className={styles.option}>نوع الحالة</option>
                                {dataCases && dataCases.map(category =>
                                    <option className={styles.option}>{category.name_ar}</option>
                                )}
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <select
                                placeholder="State"
                                className={`${styles.input} select`}
                                name="donation"
                            >
                                <option className={styles.option}> نوع التبرع</option>
                                {dataTypes && dataTypes.map(type =>
                                    <option className={styles.option}>{type.name_ar}</option>
                                )}
                            </select>
                        </Form.Group>
                        <Button type="submit" className={styles.signup__btn} >
                            اضافة الان
                        </Button>
                    </Form>
                }
            </Modal.Body>
        </Modal>
    );
}
export default function Projects() {
    const { t } = useTranslation()
    const [dataCases, setDataCases] = useState([]);
    const [dataTypes, setDataTypes] = useState([]);
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false)
    useEffect(() => {

        axios.get("http://otrok.invoacdmy.com/api/dashboard/donationtype/index")
            .then(response => {
                setDataTypes(response.data.Donationtypes)
            }

            ).catch((err) => { console.log(err) })

        axios.get("http://otrok.invoacdmy.com/api/dashboard/category/index")
            .then(response => {
                setDataCases(response.data.Categories)
            }

            ).catch((err) => { console.log(err) })

        axios.get("http://otrok.invoacdmy.com/api/dashboard/case/index")
            .then(response => {
                setData(response.data.cases)
            }

            ).catch((err) => { console.log(err) })


    }, [])
    return (
        <>
            <section className={`${styles.projects}`}>
                <HeaderTitle title={t("الحالات")} para={t("المبلغ المجموع للحالات")} price='1.037.976.07$' />
                <Button onClick={() => setModalShow(true)} className={`${styles.donate__link}`}>
                    {t(" اضافة حالة لصندوق الحالات")}
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

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
                                                <input type="radio" id={category.id} name="flavor" value={category.name_ar} />
                                                <span> {category.name_ar} </span>
                                            </label>
                                        </div>
                                    )}

                                </div>
                                <h4 className='side-filter__item-header-title pb-3'>{t("انواع التبرع")}</h4>

                                {dataTypes && dataTypes.map(type => (
                                    <div class="form-group ">
                                        <input class="form-group_checklist" type="checkbox" id={type.name_ar} />
                                        <label class="form-group_checklist_label" for={type.name_ar}>{type.name_ar}</label>
                                    </div>
                                ))}



                            </fieldset>
                        </div>
                        <div className='col-lg-10 col-md-12 col-sm-12'>
                            <div className={`${styles.projects__body}`}>
                                {data && data.map(casesCard =>
                                    <CardCase id={casesCard.id} photo={casesCard.image} title={casesCard.name_ar} para={casesCard.description_ar} progress={((casesCard.paied_amount * 100) / casesCard.initial_amount)} totalPrice={casesCard.initial_amount} numOfDonates={casesCard.paied_amount} />
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
