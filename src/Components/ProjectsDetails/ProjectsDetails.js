import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import style from './ProjectsDetails.module.css'
import './projectDetails.css'
import '../../Components/Projects/Projects.css'
import { FaCcPaypal, FaCcMastercard, FaWhatsapp, FaTwitter, FaFacebook, FaTelegram, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import NumericInput from 'react-numeric-input';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgNull from '../../assets/images/eae946efbbf74117a65d488206a09b63.png'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import paypal from "./../../assets/images/paypal.jpeg"
import delivery from "./../../assets/images/delivery-boy.png"
import vodafon from "./../../assets/images/vodafonCash.jpg"
import Form from 'react-bootstrap/Form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import moment from 'moment'
import plus from "./../../assets/icons/+.svg"
import minus from "./../../assets/icons/mi.svg"
import Cookies from 'js-cookie'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton } from 'react-share';
export default function ProjectsDetails() {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [formData, setFormData] = useState([])
    const [image, setImage] = useState([]);
    const [items, setItems] = useState([])
    const [donationType, setDonationType] = useState()
    const casesId = useParams()
    const [queryParameters] = useSearchParams()
    const [priceShow, setPriceshow] = useState(10);
    const [disabled, setDisabled] = useState(false)
    const currentLanguageCode = Cookies.get('i18next') || 'en'

    const { t } = useTranslation()

    const [donateData, setDonateData] = useState({
        name: '',
        email: '',
        numbercard: '',
        namecard: '',
        phone: '',
        address: '',
        city: '',
        numberOfVoulenteers: '',
        helpDescription: '',
        food: '',
        dateSend: '',
        amoutDescriptipn: 'جنيه',
        numberOfCartons: '',
        numberOfPeople: '',
        method: '',
        money: ''
    })

    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/${casesId.id}?lang=${currentLanguageCode}`)
            .then((response) => {
                setFormData(response.data.case)
                setItems(response.data.items)
                setImage(response.data.case.caseimage)
                setDonationType(response.data.case.donationtype_id)
            }).catch((err) => { console.log(err) })
        if (queryParameters.get("status") === '1') {
            toast.success(t(" عملية التبرع تمت بنجاح"))
        }
    })



    const onChangeHandler = e => {
        setDonateData({ ...donateData, [e.target.name]: e.target.value })
        console.log(donateData)

    }
    function clickPrice(price) {
        setPriceshow(price)
        console.log(priceShow, 'fff')


    }
    function changePrice(e) {
        setDonateData({ ...donateData, money: e.target.value })
    }
    const onChangeHandlerPhone = data => {
        setDonateData({ ...donateData, phone: data })
    }
    const onChangePaymentMethod = e => {
        setDonateData({ ...donateData, method: e.target.value })
        console.log(donateData)

    }
    const handleChangeMoney = e => {
        setPriceshow(e.target.value)
    }
    const [formError, setFormError] = useState({})



    const [checkedEnKind, setCheckedEnKind] = useState([]);

    function handleCheckedKind(e) {
        var updatedEnList = [...checkedEnKind];

        if (e.target.checked) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            updatedEnList = [...checkedEnKind, e.target.value];
        } else {
            updatedEnList.splice(checkedEnKind.indexOf(e.target.value), 1);
        }
        setCheckedEnKind(updatedEnList);
    };
    const [dataFurniture, setDataFurniture] = useState([{
        itemId: "",
        amountItem: ""
    }])

    const addItem = () => {
        let newfield = {
            itemId: "",
            amountItem: ""

        }

        setDataFurniture([...dataFurniture, newfield])
    }

    const deleteItem = (index) => {
        let data = [...dataFurniture];
        data.splice(index, 1)
        setDataFurniture(data)
    }


    const [checkedEnSeasons, setCheckedEnSeasons] = useState([]);
    function handleCheckedSeasons(e) {
        var updatedEnList = [...checkedEnSeasons];

        if (e.target.checked) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            updatedEnList = [...checkedEnSeasons, e.target.value];
        } else {
            updatedEnList.splice(checkedEnSeasons.indexOf(e.target.value), 1);
        }
        setCheckedEnSeasons(updatedEnList);

    };

    const handleFormChange = (index, event) => {
        let data = [...dataFurniture];
        data[index][event.target.name] = event.target.value;
        setDataFurniture(data);
        console.log(dataFurniture, 'items')
    }


    const [arOptionValue, setArOptionValue] = useState()
    function handleFurnitureChange(index, event) {

        let data = [...dataFurniture];

        if (event.target.value === '') {
            data[index][event.target.name] = event.target.value;
            setDataFurniture(data);
            setArOptionValue('')
            data[index]["itemId"] = '';
            document.getElementById(`ar-${event.target.getAttribute('data-index')}`).value = ''
        } else {
            data[index][event.target.name] = event.target.value;
            console.log(dataFurniture)



        }

    }

    const storeDonate = new FormData();

    storeDonate.append("name", donateData.name);
    storeDonate.append("email", donateData.email);
    storeDonate.append("phone", donateData.phone);
    storeDonate.append("casee_id", casesId.id);
    storeDonate.append("donationtype_id", donationType);

    if (formData.donationtype_id === '2') {
        storeDonate.append("amount", donateData.numberOfVoulenteers);
        storeDonate.append("city", donateData.city);
        storeDonate.append("method", "representative");
    }
    if (formData.donationtype_id === '1') {
        storeDonate.append("method", donateData.method);
        storeDonate.append("amount_financial", priceShow);
        if (donateData.method === 'representative') {
            storeDonate.append("address", donateData.address);
            storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        }
    }
    if (donateData.address && formData.donationtype_id === '3') {
        storeDonate.append("amount", donateData.numberOfCartons);
        storeDonate.append("method", "representative");
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        storeDonate.append("amount_description", 'كرتونه');
        storeDonate.append("address", donateData.address);
        storeDonate.append("city", donateData.city);
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));

    }
    if (donateData.address && formData.donationtype_id === '4') {
        storeDonate.append("amount", donateData.numberOfPeople);
        storeDonate.append("method", "representative");
        storeDonate.append('amount_description', checkedEnKind.toString())
        storeDonate.append('description', checkedEnSeasons.toString())
        storeDonate.append("address", donateData.address);
        storeDonate.append("city", donateData.city);
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));

    }
    if (formData.donationtype_id === "5") {
        dataFurniture.map((item, index) => {
            storeDonate.append(`items[${index}][id]`, item.itemId);
            storeDonate.append(`items[${index}][amount]`, item.amountItem);

        })
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        storeDonate.append("method", "representative");
        storeDonate.append("address", donateData.address);
        storeDonate.append("city", donateData.city);
        if (donateData.helpDescription) {
            storeDonate.append("description", donateData.helpDescription);
        }
    }



    const onSubmitHandler = (e) => {
        setDisabled(true)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (localStorage.getItem("token")) {
            if (donateData.method === 'online_payment') {
                axios.post(`https://otrok.invoacdmy.com/api/user/donation/financial/user?lang=${currentLanguageCode}`, storeDonate, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }).then(response => {
                    setDisabled(false)
                    window.location.replace(response.data.payment_response.redirect_url);
                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                })
            } else {
                axios.post(`https://otrok.invoacdmy.com/api/user/donation/financial/user?lang=${currentLanguageCode}`, storeDonate, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }).then(response => {
                    toast.success(t(" عملية التبرع تمت بنجاح"))
                    setDisabled(false)
                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                }
                )
            }
        } else {
            if (donateData.method === 'online_payment') {
                axios.post(`https://otrok.invoacdmy.com/api/user/donation/financial/guest?lang=${currentLanguageCode}`, storeDonate, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(response => {
                    setDisabled(false)
                    window.location.replace(response.data.payment_response.redirect_url);

                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                })
            } else {
                axios.post(`https://otrok.invoacdmy.com/api/user/donation/financial/guest?lang=${currentLanguageCode}`, storeDonate, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(response => {
                    toast.success(t(" عملية التبرع تمت بنجاح"))
                    setDisabled(false)
                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                })
            }
        }
    }

    const onSubmitHandlerVolunteer = (e) => {
        setDisabled(true)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/volunteering/user?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التطوع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })
        } else {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/volunteering/guest?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    toast.success(t(" عملية التطوع تمت بنجاح"))
                    setDisabled(false)
                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                })
        }
    }

    const onSubmitHandlerFood = (e) => {
        setDisabled(true)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/food/user?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التبرع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })
        } else {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/food/guest?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    toast.success(t(" عملية التبرع تمت بنجاح"))
                    setDisabled(false)
                }
                ).catch((err) => {
                    toast.error(err.response.data.message)
                    setDisabled(false)
                })
        }
    }
    const onSubmitHandlerClothes = (e) => {
        setDisabled(true)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/clothes/user?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التبرع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })

        } else {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/clothes/guest?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التبرع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })
        }

    }
    const onSubmitHandlerFurniture = (e) => {
        setDisabled(true)
        const toastId = toast.loading(t(" ... انتظر قليلا"))
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/furniture/user?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التبرع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })
        } else {
            axios.post(`https://otrok.invoacdmy.com/api/user/donation/furniture/guest?lang=${currentLanguageCode}`, storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(t(" عملية التبرع تمت بنجاح"))
                setDisabled(false)
            }
            ).catch((err) => {
                toast.error(err.response.data.message)
                setDisabled(false)
            })
        }
    }

    return (
        <>

            <Container>
                <Row dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className='mt-5'>
                    <Col sm={12} xl={8} className='mb-3'  >

                        <div className={`${style.cardDetails__body}`}>
                            <h3 className={`${style.cardDetails__title}`}>{formData.name}</h3>
                            <p className={`${style.cardDetails__para}`}>{t("مشروع رقم")} {formData.id}</p>
                            <hr />
                        </div>

                        {formData.donationtype_id === "1" ?
                            <div className={`${style.collect}`}>
                                <p className={`${style.collect__para}`}>{t("تم جمع المبلغ")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t('ج')}</bold> {t("من اصل")} {formData.initial_amount}</p>
                                <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                            </div>
                            :
                            null
                        }
                        {formData.donationtype_id === "2" ?
                            <div className={`${style.collect}`}>
                                <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t("متطوع")}</bold> {t("من اصل")} {formData.initial_amount}</p>
                                <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                            </div>
                            :
                            null
                        }
                        {formData.donationtype_id === "3" ?
                            <div className={`${style.collect}`}>
                                <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t("كرتونة")}</bold> {t("من اصل")} {formData.initial_amount}</p>
                                <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                            </div>
                            :
                            null
                        }
                        {formData.donationtype_id === "4" ?
                            <div className={`${style.collect}`}>
                                <p className={`${style.collect__para}`}>{t(" تم جمع ملابس") + " " + t("ل")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t("عدد الاشخاص")}</bold> {t("من اصل")} {formData.initial_amount}</p>
                                <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                            </div>
                            :
                            null
                        }
                        {formData.donationtype_id === "4" ?
                            currentLanguageCode === "ar" ?
                                <>
                                    <p className={`${style.items}`}>{t("تفاصيل عن الملابس المراد تجميعها:")}</p>

                                    <p className={`${style.details__para}`}> {t("نوع الملابس")}  : {formData.type_ar}</p>
                                    <p className={`${style.details__para}`}> {t("لمن الملابس")}  : {formData.gender_ar}</p>

                                </>
                                :
                                <>
                                    <p className={`${style.items}`}>{t("تفاصيل عن الملابس المراد تجميعها:")}</p>

                                    <p className={`${style.details__para}`}> {t("نوع الملابس")}  : {formData.type_en}</p>
                                    <p className={`${style.details__para}`}> {t("لمن الملابس")}  : {formData.gender_en}</p>

                                </>
                            :
                            null

                        }
                        {/*  {formData.donationtype_id === "4" && currentLanguageCode === "en" ?
                            <>
                                <p className={`${style.items}`}>{t("تفاصيل عن الملابس المراد تجميعها:")}</p>

                                <p className={`${style.details__para}`}> {t("نوع الملابس")}  : {formData.type_en}</p>
                                <p className={`${style.details__para}`}> {t("لمن الملابس")}  : {formData.gender_en}</p>

                            </>
                            :
                            null
                        } */}

                        {formData.donationtype_id === "5" ?
                            <div className={`${style.collect}`}>
                                <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>{formData.paied_amount + '' + t("عنصر")}</bold> {t("من اصل")} {formData.initial_amount}</p>
                                <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                            </div>
                            :
                            null
                        }

                        {formData.donationtype_id === "5" ?
                            <>
                                <p className={`${style.items}`}>{t("ساعدنا في جمع")}</p>
                                {items && items.map(item =>
                                    <p className={`${style.details__para}`}> {item.name} : {item.amount}</p>
                                )}
                            </>
                            :
                            null
                        }

                        <div >
                            <p className={`${style.details__para}`}> {formData.description}</p>
                        </div>
                        {formData.file ?
                            <>
                                <Link to={formData.file}>{t("الملف التعريفي الخاص بالحالة و وصفها")}</Link>
                            </>
                            :
                            null
                        }
                        <div className={`${style.cardDetails__icon}`}>
                            <Row>
                                <Col md={3}  >
                                    <WhatsappShareButton className={`${style.icon__social} ${style.icon__social1}`}
                                        url={`https://etruk-athra.invoacdmy.com/card-details/${formData.id}`}
                                    >

                                        <FaWhatsapp className={`${style.i}`} />
                                        <span className='m-1'>{t("واتساب")}</span>
                                    </WhatsappShareButton>
                                </Col>
                                <Col md={3}  >
                                    <TelegramShareButton className={`${style.icon__social} ${style.icon__social2}`}
                                        url={`https://etruk-athra.invoacdmy.com/card-details/${formData.id}`}
                                    >
                                        <FaTelegram className={`${style.i}`} />
                                        <span className='m-1'>{t("تيليجرام")}</span>
                                    </TelegramShareButton>
                                </Col>
                                <Col md={3}  >
                                    <FacebookShareButton className={`${style.icon__social} ${style.icon__social3}`}
                                        url={`https://etruk-athra.invoacdmy.com/card-details/${formData.id}`}
                                    >
                                        <FaFacebook className={`${style.i}`} />
                                        <span className='m-1'>{t("فيسبوك")}</span>
                                    </FacebookShareButton>
                                </Col>
                                <Col md={3} >
                                    <TwitterShareButton className={`${style.icon__social} ${style.icon__social4}`}
                                        url={`https://etruk-athra.invoacdmy.com/userCase/${formData.id}`}
                                    >
                                        <FaTwitter className={`${style.i}`} />
                                        <span className='m-1'>{t("تويتر")}</span>
                                    </TwitterShareButton>
                                </Col>
                            </Row>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            {!image.length ?

                                <SwiperSlide>
                                    <img src={imgNull} alt='' />
                                </SwiperSlide>

                                :
                                <>
                                    {image && image.map((imgSrc, index) => (<SwiperSlide><img src={imgSrc.image} key={index} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>))}
                                </>
                            }
                        </Swiper>


                    </Col>

                    <Col sm={12} xl={4}>

                        {formData.donationtype_id === "1" ?
                            <aside dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <input max={formData.remaining_amount} required min='10' type='number' name='money' onChange={handleChangeMoney} value={priceShow ? priceShow : 10.00} className={`${style.price__input} m-2`} /><span className={`${style.price__icon}`} value={donateData.amoutDescriptipn} >{t("ج")}</span>
                                <div className={`${style.price__choose}`}>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(10.00) }}>10.00 </button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(25.00) }}>25.00</button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(50.00) }}>50.00</button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(100.00) }}>100.00</button>
                                </div>

                                <Form className="form-money" onSubmit={onSubmitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                    </Form.Group>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={donateData.phone ? (isValidPhoneNumber(donateData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={donateData.phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                        required />


                                    <div class="radio-item-container">

                                        <div class="radio-item">
                                            <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcMastercard className={`${style.icon}`} /> {t(" للتبرع من خلال البطاقة الائتمانية")}</p></div>
                                            <label className='label_radio' for='online_payment'>
                                                <input type="radio" id='online_payment' name="method" value='online_payment' onChange={onChangePaymentMethod} />
                                                <span>{t("التبرع اونلاين")}</span>

                                            </label>

                                        </div>


                                        <div class="radio-item">

                                            <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><img src={delivery} alt="" className={`${style.imgpay}`} />{t("للتبرع من خلال مندوبنا")}</p></div>
                                            <label className='label_radio' for='representative'>
                                                <input type="radio" id='representative' name="method" value='representative' onChange={onChangePaymentMethod} />
                                                <span> {t("مندوب")} </span>
                                            </label>
                                        </div>

                                    </div>


                                    {donateData.method === 'representative' ?
                                        <div className={`${style["representative-form"]}`}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control required type='text' name="address" className={`${style.input} mt-0`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control required type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} />
                                                <Form.Text className={`${style.date}`}>
                                                    {t("تحديد ميعاد التبرع لارسال المندوب")}
                                                </Form.Text>
                                            </Form.Group>
                                        </div>
                                        :
                                        null

                                    }
                                    <Button type="submit" disabled={disabled ? true : false} className={`${style["signup__btn"]} mb-3`}>
                                        {t("تبرع الآن")}
                                    </Button>
                                </Form>
                            </aside> : ""}

                        {formData.donationtype_id === "2" ?
                            <aside dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <Form onSubmit={onSubmitHandlerVolunteer}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("المدينة")} onChange={onChangeHandler} value={donateData.city} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control min='1'  max={formData.remaining_amount}  type='number' name="numberOfVoulenteers" className={`${style.input}`} placeholder={t("عدد المتطوعين")} onChange={onChangeHandler} value={donateData.numberOfVoulenteers} required />
                                    </Form.Group>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={donateData.phone ? (isValidPhoneNumber(donateData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={donateData.phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                        required />
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control as="textarea" rows="3" name="helpDescription" className={`${style.textArea}`} onChange={onChangeHandler} value={donateData.helpDescription} placeholder={t("بماذا يمكنك المساعدة")} />
                                    </Form.Group>
                                    <Button type="submit" disabled={disabled ? true : false} className={style.signup__btn}>
                                        {t("تبرع الآن")}
                                    </Button>
                                </Form>
                            </aside> : ""}

                        {formData.donationtype_id === "3" ?
                            <aside dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <Form onSubmit={onSubmitHandlerFood}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("المدينة")} onChange={onChangeHandler} value={donateData.city} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} required />
                                    </Form.Group>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={donateData.phone ? (isValidPhoneNumber(donateData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={donateData.phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                        required />
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='number' min='1'  max={formData.remaining_amount}  name="numberOfCartons" className={`${style.input}`} placeholder={t( "عدد الكارتين التي ستتبرع بها")} onChange={onChangeHandler} value={donateData.numberOfCartons} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                        <Form.Text className={`${style.date}`}>
                                            {t("تحديد ميعاد التبرع لارسال المندوب")}
                                        </Form.Text>
                                    </Form.Group>
                                    <Button type="submit" disabled={disabled ? true : false} className={style.signup__btn}>
                                        {t("تبرع الآن")}
                                    </Button>
                                </Form>
                            </aside> : ""}


                        {formData.donationtype_id === "4" ?
                            <aside dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <Form onSubmit={onSubmitHandlerClothes}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("المدينة")} onChange={onChangeHandler} value={donateData.city} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} required />
                                    </Form.Group>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={donateData.phone ? (isValidPhoneNumber(donateData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={donateData.phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                        required />
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='number' name="numberOfPeople" min='1'  max={formData.remaining_amount}  className={`${style.input}`} placeholder={t("عدد الافراد")} onChange={onChangeHandler} value={donateData.numberOfPeople} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                        <Form.Text className={`${style.date}`}>
                                            {t("تحديد ميعاد التبرع لارسال المندوب")}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                                        <div className="formInput d-flex mt-2" >
                                            <div className="form-group ">
                                                <input className="form-group_checklist" type="checkbox" name="men" id="men" value="men" onChange={(e) => { handleCheckedKind(e) }} />
                                                <label className="form-group_checklist_label" for="men" value="men">{t("رجالي")}</label>
                                            </div>
                                            <div className="form-group ">
                                                <input className="form-group_checklist" type="checkbox" id="women" value="women" onChange={(e) => { handleCheckedKind(e) }} />
                                                <label className="form-group_checklist_label" for="women" value="women"> {t("حريمي")}</label>
                                            </div>
                                            <div className="form-group ">
                                                <input className="form-group_checklist" type="checkbox" id="child" value="child" onChange={(e) => { handleCheckedKind(e) }} />
                                                <label className="form-group_checklist_label" for="child" value="child"> {t("اطفالي")}</label>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                                        <div className="formInput d-flex mt-2" >
                                            <div className="form-group ">
                                                <input className="form-group_checklist" type="checkbox" id="summer" value="summer" onChange={(e) => { handleCheckedSeasons(e) }} />
                                                <label className="form-group_checklist_label font" for="summer" value="summer"> {t("صيفي")}</label>
                                            </div>
                                            <div className="form-group ">
                                                <input className="form-group_checklist" type="checkbox" id="winter" value="winter" onChange={(e) => { handleCheckedSeasons(e) }} />
                                                <label className="form-group_checklist_label " for="winter" value="winter">{t("شتوي")}</label>
                                            </div>
                                        </div>
                                    </Form.Group>


                                    <Button type="submit" disabled={disabled ? true : false} className={style.signup__btn}>
                                        {t("تبرع الآن")}
                                    </Button>
                                </Form>
                            </aside> : ""}

                        {formData.donationtype_id === "5" ?
                            <aside dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'} className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <Form onSubmit={onSubmitHandlerFurniture}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("المدينة")} onChange={onChangeHandler} value={donateData.city} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} required />
                                    </Form.Group>
                                    <PhoneInput
                                        defaultCountry="EG"
                                        international
                                        error={donateData.phone ? (isValidPhoneNumber(donateData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        value={donateData.phone}
                                        name="phone"
                                        onChange={onChangeHandlerPhone}
                                        className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                        required />
                                    {formData?.donationtype_id === '5' ?
                                        <>
                                            {dataFurniture && dataFurniture.map((item, index) => (
                                                <>
                                                    <Form.Group className="" controlId="formBasicEmail" >

                                                        <Form.Control
                                                            placeholder={t(" عدد الاثاث المراد التبرع بها")}
                                                            className={`${style.input}`}
                                                            min='1'
                                                            max={formData.remaining_amount}
                                                            name="amountItem"
                                                            type='number'
                                                            value={item.amountItem}
                                                            onChange={event => handleFormChange(index, event)}
                                                            required

                                                        />

                                                    </Form.Group>
                                                    <Form.Group className="mb-1" controlId="formBasicEmail" >
                                                        <select
                                                            className={`${style.input} `}
                                                            style={{ width: '100%', padding: "10px" }}
                                                            name="itemId"
                                                            data-index={index}
                                                            onChange={event => handleFurnitureChange(index, event)}
                                                            value={item.id}
                                                            required
                                                        >
                                                            <option value=''>{t("الاثاث المراد التبرع بها")} </option>
                                                            {items && items.map(item =>
                                                                <option value={item.id} name={item.name} key={item.id} >{item.name}</option>
                                                            )}

                                                        </select>
                                                    </Form.Group>
                                                    {
                                                        index > 0 || dataFurniture.length === 2 ?
                                                            <div className="formInput" >
                                                                <button type='button' onClick={() => { deleteItem(index) }} className={`${style["add-button"]}`} ><img width={20} src={minus} alt="" /> {t("مسح القطعة")}</button>
                                                            </div>
                                                            :
                                                            <>
                                                            </>
                                                    }
                                                </>
                                            ))
                                            }
                                            <div className="formInput d-flex" >
                                                <button type="button" className={`${style["add-button"]}`} onClick={() => { addItem() }}><img src={plus} alt="" /> {t("اضافه القطعة")}</button>
                                            </div>
                                        </>
                                        :
                                        null
                                    }
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control as="textarea" rows="3" name="helpDescription" className={`${style.textArea}`} placeholder={t("تفاصيل الاثاث او الاجهزه")} onChange={onChangeHandler} value={donateData.helpDescription} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                        <Form.Text className={`${style.date}`}>
                                            {t("تحديد ميعاد التبرع لارسال المندوب")}
                                        </Form.Text>
                                    </Form.Group>
                                    <Button type="submit" disabled={disabled ? true : false} className={style.signup__btn}>
                                        {t("تبرع الآن")}
                                    </Button>
                                </Form>
                            </aside> : ""}
                    </Col>
                </Row>
                <ToastContainer />
            </Container >

        </>
    )
}
