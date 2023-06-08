import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import style from "./EditProfile.module.css";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCart from '../UserCart/UserCart';
import imgNull from '../../assets/images/remove.photos-removed-background.png'
export default function EditProfile() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [dataCases, setDataCases] = useState([]);
    const [imageCases, setImageCases] = useState([]);
    const [dataDonation, setDataDonation] = useState([]);
    const { t } = useTranslation()
    const [active, setActive] = useState("edit")
    const [formData, setFormData] = useState({
        img: '',
        nameEn: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        age: '',

    })
    const showActive = (view) => {
        setActive(view)
    }
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/profile/show`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                setFormData({
                    nameEn: response.data.user.name_en,
                    email: response.data.user.email,
                    address: "",
                    phone: response.data.user.phone,
                    gender: response.data.user.gender,
                })
            }).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/profile/cases`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                setDataCases(response.data.cases)
                setImageCases(response.data?.cases?.caseimage)
                console.log(response.data?.cases, "hhhhh")
            }
            ).catch((err) => { console.log(err) })

        axios.get(`https://otrok.invoacdmy.com/api/user/profile/donations`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                setDataDonation(response.data.donations)
                console.log(response.data.donations, "khk")
            }
            ).catch((err) => { console.log(err) })

    }, [])
    function handleLogo() {
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
    }
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
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

    const storeProfile = new FormData();
    storeProfile.append("name_en", formData.nameEn);
    storeProfile.append("email", formData.email);
    storeProfile.append("address", formData.address);
    storeProfile.append("phone", formData.phone);
    storeProfile.append("image", formData.img);
    storeProfile.append("gender", formData.gender);
    const onSubmitHandler = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/profile/edit", storeProfile, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)

            }
            ).catch((err) => { toast.error(err.response.data.message) })

    }
    const onChangeHandlerPhone = data => {
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <>
            <HeaderTitle title={(" تعديل الحساب")} />
            {/* <section className={style.logForm}>

                <div className={style.login}>
                    <p className={style.loginPara}>{t("تعديل الحساب")}</p>
                    <div >
                        <Form >
                            <div className={`${style.im} text-center`}>
                                <input className={`${style.fileImg}  input-file-js`} ref={(e) => {
                                    addFileInput.current = e
                                }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                                {
                                    imageUrl == null ?
                                        <>
                                            <div ref={addFile} onClick={() => { handleLogo() }}>
                                                <img className={`${style.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                            </div>

                                        </>
                                        :
                                        <div ref={addFile} onClick={() => { handleLogo() }}>
                                            <img className={`${style.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                                        </div>
                                }
                            </div>


                            <div className={style.userName}>

                                <Form.Group className="mb-3" controlId="name" >
                                    <Form.Control name="nameEn" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={formData.nameEn} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder={t("البريد الإلكتروني")} onChange={onChangeHandler} value={formData.email} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gender">
                                    <Form.Control name="address" autoComplete="off" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={formData.address} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <div class={style.inputGroupp}>
                                        <PhoneInput
                                            defaultCountry="EG"
                                            international
                                            error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                            value={formData.phone}
                                            name="phone"
                                            onChange={onChangeHandlerPhone}
                                            className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gender">
                                    <select
                                        placeholder="State"
                                        className={`${style.input} select`}
                                        name="gender"
                                        value={formData.gender}
                                        onChange={onChangeHandler}
                                    >
                                        <option value=''>النوع</option>
                                        <option value='m'>ذكر</option>
                                        <option value='f'>انثي</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="age">
                                    <Form.Control name="age" autoComplete="off" className={`${style.input}`} placeholder={t("العمر")} onChange={onChangeHandler} value={formData.age} />
                                </Form.Group>
                            </div>
                            <Button className={style.signup__btn} type="submit" onClick={onSubmitHandler}>
                                {t("تعديل حساب")}
                            </Button>

                        </Form>
                    </div>
                </div>
                <Container>
                    <Row className={`${style.row}`}>
                        <Col sm={9} className={`${style.card}`}>
                            {dataCases && dataCases.map(caseCard =>
                                <UserCart id={caseCard.id} status={caseCard.status} reason_reject_ar={caseCard.reason_reject_ar} photo={caseCard?.caseimage[0]?.image} title={caseCard.name_ar} para={caseCard.description_ar} progress={((caseCard.paied_amount * 100) / caseCard.initial_amount)} totalPrice={caseCard.initial_amount} numOfDonates={caseCard.paied_amount} />
                            )}
                        </Col>
                        <Col className={`${style.case}`} sm={3}>:{t("الحالات التي تمت اضافتها بواسطتك")}   </Col>
                    </Row>
                    <Row className={`${style.row}`}>
                        <Col sm={9} className={`${style.card}`}>

                            {dataDonation && dataDonation.map(donationCard =>
                                <>
                                    <UserCart id={donationCard.id} photo={donationCard.image} title={donationCard.name} para={donationCard.description} progress={((donationCard.paied_amount * 100) / donationCard.initial_amount)} totalPrice={donationCard.initial_amount} numOfDonates={donationCard.paied_amount} />

                                </>
                            )}
                        </Col>
                        <Col className={`${style.case}`} sm={3}>: الحالات التي تمت التبرع بها بواسطتك    </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </section> */}

            <section>
                <Container>
                    <Row className={`justify-content-md-center`}>

                        <Col lg={9} className={`${style.formLine}`}>
                            <div className={`${active === "edit" ? style.edit__info__body : style.none}`}>
                                <Form>
                                    <Row>
                                        <Col lg={4}>
                                            <div className={`${style.im} text-center`}>
                                                <input className={`${style.fileImg}  input-file-js`} ref={(e) => {
                                                    addFileInput.current = e
                                                }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                                                {
                                                    imageUrl == null ?
                                                        <>
                                                            <div ref={addFile} onClick={() => { handleLogo() }}>
                                                                <img className={`${style.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                                            </div>
                                                        </>
                                                        :
                                                        <div ref={addFile} onClick={() => { handleLogo() }}>
                                                            <img className={`${style.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                                                        </div>
                                                }
                                            </div>
                                        </Col >
                                        <Col lg={8}>
                                            <Form.Group className="mb-3" controlId="name" >
                                                <Form.Label className={style.label}> {t("اسم المستخدم")}</Form.Label>
                                                <Form.Control name="nameEn" className={`${style.input}`} onChange={onChangeHandler} value={formData.nameEn} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label className={style.label}>{t("البريد الإلكتروني")}</Form.Label>
                                                <Form.Control name="email" autoComplete="off" className={`${style.input}`} onChange={onChangeHandler} value={formData.email} />
                                            </Form.Group>
                                            <Form.Group controlId="gender" className={`${style.g} mb-3`}>
                                                <Form.Label className={style.label}> {t("العنوان")}</Form.Label>
                                                <Form.Control name="address" autoComplete="off" className={`${style.input}`} onChange={onChangeHandler} value={formData.address} />

                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label className={style.label}> الهاتف</Form.Label>
                                                <div class={style.inputGroupp}>
                                                    <PhoneInput
                                                        defaultCountry="EG"
                                                        international
                                                        error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                                        value={formData.phone}
                                                        name="phone"
                                                        onChange={onChangeHandlerPhone}
                                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="gender">
                                                <Form.Label className={style.label}> النوع</Form.Label>
                                                <select
                                                    placeholder="State"
                                                    className={`${style.input} select`}
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={onChangeHandler}
                                                >
                                                    <option value=''>النوع</option>
                                                    <option value='m'>ذكر</option>
                                                    <option value='f'>انثي</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="age">
                                                <Form.Label className={style.label}> {t("العمر")} </Form.Label>
                                                <Form.Control name="age" autoComplete="off" className={`${style.input}`} onChange={onChangeHandler} value={formData.age} />
                                            </Form.Group>
                                            <Button className={style.signup__btn} type="submit" onClick={onSubmitHandler}>
                                                {t("حفظ التغيرات")}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className={`${active === "case" ? style.case__info__body : style.none}`}>
                                <Row>
                                    {dataCases && dataCases.map(caseCard =>
                                        <Col lg={4}>
                                            <UserCart id={caseCard.id} status={caseCard.status} reason_reject_ar={caseCard.reason_reject_ar} photo={caseCard?.caseimage[0]?.image} title={caseCard.name_ar} para={caseCard.description_ar} progress={((caseCard.paied_amount * 100) / caseCard.initial_amount)} totalPrice={caseCard.initial_amount} numOfDonates={caseCard.paied_amount} />
                                        </Col>
                                    )}
                                </Row>
                            </div>
                            <div className={`${active === "donate" ? style.donation__info__body : style.none}`}>
                                {dataDonation && dataDonation.map(donationCard =>
                                    <>
                                        <div className={`${style.donations}`}>
                                            <p className={`${style.donations__date}`}>{donationCard.date_to_send}</p>
                                            <p className={`${style.donations__para}`}>{donationCard.amount}</p>
                                            <p className={`${style.donations__price}`}> {t("المبلغ المتبرع به")}</p>
                                        </div>

                                    </>
                                )}
                            </div>

                        </Col>
                        <Col lg={3}>
                            <div className={`${style.user}`}>
                                <Link to='' className={`${active === "edit" ? style.style__link : style.view__link}`} onClick={() => { showActive("edit") }}> {t("تعديل الحساب")}</Link>
                                <Link to='' className={`${active === "case" ? style.style__link : style.view__link}`} onClick={() => { showActive("case") }}> {t("حالاتك")}</Link>
                                <Link to='' className={`${active === "donate" ? style.style__link : style.view__link}`} onClick={() => { showActive("donate") }}> {t("تبرعاتك")}</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
