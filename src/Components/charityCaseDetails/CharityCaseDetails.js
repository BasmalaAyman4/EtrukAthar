
import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaCcPaypal, FaCcMastercard, FaWhatsapp, FaTwitter, FaFacebook, FaTelegram, FaNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import NumericInput from 'react-numeric-input';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Player } from 'video-react';
import img1 from './../../assets/images/Klf3HzC73lImq.jpg'
import details1 from './../../assets/images/details1.jpeg'
import details2 from './../../assets/images/details2.jpeg'
import details3 from './../../assets/images/details3.jpeg'
import new1 from './../../assets/images/3-copy-scaled.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import moment from 'moment'
import plus from "./../../assets/icons/+.svg"
import minus from "./../../assets/icons/mi.svg"
import style from "./CharityCaseDetails.module.css"
export default function CharityCaseDetails() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [formData, setFormData] = useState([])
    const [items, setItems] = useState({})
    const casesId = useParams()
    const [priceShow, setPriceshow] = useState("");
    const { t } = useTranslation()



    function clickPrice(price) {
        setPriceshow("")
        setPriceshow(price)
    }
    const [donateData, setDonateData] = useState({
        name: '',
        email: '',
        numbercard: '',
        namecard: '',
        cvc: '',
        phone: '',
        address: '',
        city: '',
        numberOfVoulenteers: '',
        expiry: '',
        helpDescription: '',
        food: '',
        dateSend: '',
        amoutDescriptipn: 'جنيه',
        numberOfCartons: '',
        numberOfPeople: ''

    })


    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/case/show/${casesId.id}?lang=ar`)
            .then((response) => {
                setFormData(response.data.case)
                setItems(response.data.items)
            }).catch((err) => { console.log(err) })
    }, [])



    const onChangeHandler = e => {
        setDonateData({ ...donateData, [e.target.name]: e.target.value })

    }
    const onChangeHandlerPhone = data => {
        setDonateData({ ...donateData, phone: data })
    }



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
    storeDonate.append("address", donateData.address);
    storeDonate.append("city", donateData.city);
    storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));

    if (formData.donationtype_id === '2') {
        storeDonate.append("amount", donateData.numberOfVoulenteers);
    }
    if (donateData.address && formData.donationtype_id === '1') {
        storeDonate.append("method", "representative");
        storeDonate.append("amount_financial", priceShow);

    }
    if (donateData.address && formData.donationtype_id === '3') {
        storeDonate.append("amount", donateData.numberOfCartons);
        storeDonate.append("method", "representative");
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        storeDonate.append("amount_description", 'كرتونه');

    }
    if (donateData.address && formData.donationtype_id === '4') {
        storeDonate.append("amount", donateData.numberOfPeople);
        storeDonate.append("method", "representative");
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        storeDonate.append('amount_description', checkedEnKind.toString())
        storeDonate.append('description', checkedEnSeasons.toString())

    }
    if (formData.donationtype_id === '1') {
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
    }
    if (formData.donationtype_id === "5") {
        dataFurniture.map((item, index) => {
            storeDonate.append(`items[${index}][id]`, item.itemId);
            storeDonate.append(`items[${index}][amount]`, item.amountItem);

        })
        storeDonate.append("date_to_send", donateData.dateSend.slice(0, 10));
        storeDonate.append("method", "representative");
        storeDonate.append("description", donateData.helpDescription);
    }

    storeDonate.append("casee_id", casesId.id);
    storeDonate.append("donationtype_id", formData.donationtype_id);
    const onSubmitHandler = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/financial/user", storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        } else {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/financial/guest", storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    toast.success('تمت العملية بنجاح')
                }
                ).catch((err) => { toast.error(err.response.data.message) })
        }
    }
    const onSubmitHandlerVolunteer = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/volunteering/user", storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        } else {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/volunteering/guest", storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    toast.success('تمت العملية بنجاح')
                }
                ).catch((err) => { toast.error(err.response.data.message) })
        }
    }

    const onSubmitHandlerFood = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/food/user", storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        } else {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/food/guest", storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(response => {
                    toast.success('تمت العملية بنجاح')
                }
                ).catch((err) => { toast.error(err.response.data.message) })
        }
    }
    const onSubmitHandlerClothes = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/clothes/user", storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success(response.data.message)
            }
            ).catch((err) => { toast.error(err.response.data.message) })

        } else {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/clothes/guest", storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        }

    }
    const onSubmitHandlerFurniture = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        if (token) {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/furniture/user", storeDonate, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        } else {
            axios.post("https://otrok.invoacdmy.com/api/user/donation/furniture/guest", storeDonate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                toast.success('تمت العملية بنجاح')
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        }
    }

    return (
        <>
            <Container>
                <Row dir='rtl' className='mt-5'>
                    <Col sm={12} xl={8} dir='rtl' >

                        <div className={`${style.cardDetails__body}`}>
                            <h3 className={`${style.cardDetails__title}`}>{formData.name}</h3>
                            <p className={`${style.cardDetails__para}`}>{t("مشروع رقم")} {formData.id}</p>
                            <hr />
                        </div>
                        <div className={`${style.collect}`}>
                            <p className={`${style.collect__para}`}>{t("تم جمع ")}<bold className={`${style.bold}`}>{formData.paied_amount}</bold> {t("من اصل")} {formData.initial_amount} </p>
                            <ProgressBar now={((formData.paied_amount * 100) / formData.initial_amount)} className={`${style.progress} `} />
                        </div>
                        <div className={`${style.cardDetails__icon}`}>
                            <Row>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social1}`}>
                                        <FaWhatsapp className={`${style.i}`} />
                                        <span>Whatsapp</span>
                                    </button>
                                </Col>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social2}`}>
                                        <FaTelegram className={`${style.i}`} />
                                        <span>Telegram</span>
                                    </button>
                                </Col>
                                <Col md={3}  >
                                    <button className={`${style.icon__social} ${style.icon__social3}`}>
                                        <FaFacebook className={`${style.i}`} />
                                        <span>Facebook</span>
                                    </button>
                                </Col>
                                <Col md={3} >
                                    <button className={`${style.icon__social} ${style.icon__social4}`}>
                                        <FaTwitter className={`${style.i}`} />
                                        <span>Twitter</span>
                                    </button>
                                </Col>
                            </Row>
                        </div>


                        <div className={`${style.modal__collect}`}><p className={`${style.paypal__para}`}> {t(" تبرعك هو أملهم و نجاحهم, فكن عونا لهم ")}</p></div>
                        <div >
                            <p className={`${style.details__para}`}>لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام وسقوطها فوق رؤوسهم، فلا مأوى يحميهم من برد الشتاء، ولا جدار يُخفّف عنهم قسوته.</p>
                            <p className={`${style.details__para}`}>من أجل آلاف العوائل، المصابين، المرضى، الأيتام والأرامل، من أجل عجزهم وبكاء أطفالهم، نُطلق وككل عام حملة دفء 11 المخصصة للاجئين السوريين في الأردن و أهلنا المهجرين في الشمال السوري لتأمين الكسوة الشتوية ومستلزمات التدفئة من مدفأة وحطب وغيرها من مواد التدفئة ، ونُتيح لكم فرصة التبرع للمساهمة بتأمينها لأكبر عدد من العوائل.</p>
                            <p className={`${style.details__para}`}>حيث تبلغ قيمة اللباس الشتوي للطفل الواحد 20 $ و تزويد عائلة لمدة شهر بمواد التدفئة 110$ تشمل (مدفأة و نصف طن من الحطب و البيرين) .</p>
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
                            <SwiperSlide><img src={details1} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>
                            <SwiperSlide><img src={details2} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>
                            <SwiperSlide><img src={details3} alt='' className={`${style.imgSwiper}`} /></SwiperSlide>

                        </Swiper>

                    </Col>
                    <Col sm={12} xl={4}>

                        {formData.donationtype_id === "1" ?
                            <aside dir='rtl' className={`${style.aside}`}>
                                <button className={`${style.cardDetails__btn}`}>
                                    {t("تبرع الان   للحالات عبر موقعنا ")}
                                </button>
                                <NumericInput value={priceShow ? priceShow : 20.00} className={`${style.price__input}`} /><span className={`${style.price__icon}`} value={donateData.amoutDescriptipn} >ج</span>
                                <div className={`${style.price__choose}`}>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(10.00) }}>10.00 </button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(25.00) }}>25.00</button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(50.00) }}>50.00</button>
                                    <button className={`${style.price__btn}`} onClick={() => { clickPrice(100.00) }}>100.00</button>
                                </div>
                                {/* <div className={`${style.price__checkbox}`}>
                                <label><input type="checkbox" /><span className={`${style.price__para}`}>{t("تغطيه رسوم المعاملات 1.29$")}
                                </span></label>
                            </div> */}
                                <Form onSubmit={onSubmitHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} onChange={onChangeHandler} value={donateData.name} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
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

                                    <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcMastercard className={`${style.icon}`} /> {t(" للتبرع من خلال البطاقة الائتمانية ")}</p></div>
                                    <Accordion >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><img src={paypal} alt="" className={`${style.imgpay} pay`} /></Accordion.Header>
                                            <Accordion.Body>

                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control type='number' name="numbercard" className={`${style.input}`} placeholder={t(" رقم البطاقه الائتمانيه")} onChange={onChangeHandler} value={donateData.numbercard} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control type='name' name="namecard" className={`${style.input}`} placeholder={t("  اسم البطاقة الائتمانية")} onChange={onChangeHandler} value={donateData.namecard} />
                                                </Form.Group>
                                                <div className={`${style.cvc}`}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                        <Form.Control type='date' name="expiry" className={`${style.input}`} placeholder={t(" expiration date")} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                        <Form.Control name="cvc" type="number" className={`${style.input}`} placeholder={t("كود التحقق من البطاقة ")} onChange={onChangeHandler} value={donateData.cvc} />
                                                    </Form.Group>
                                                </div>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><img src={vodafon} alt="" className={`${style.imgpay}`} /></Accordion.Header>
                                            <Accordion.Body>

                                                <PhoneInput
                                                    defaultCountry="EG"
                                                    international
                                                    error={formData.phone ? (isValidPhoneNumber(formData.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                                    value="+20 01022225555"
                                                    name="phone"
                                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`}
                                                    required />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}>{t(" للتبرع من خلال مندوبنا ")}</p></div>
                                    <Accordion >
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><img src={delivery} alt="" className={`${style.imgpay}`} /></Accordion.Header>
                                            <Accordion.Body>

                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                    <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} />
                                                    <Form.Text className={`${style.date}`}>
                                                        تحديد ميعاد التبرع لارسال المندوب
                                                    </Form.Text>
                                                </Form.Group>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Button type="submit" className={style.signup__btn}>
                                        تبرع الان
                                    </Button>
                                </Form>
                            </aside> : ""}

                        {formData.donationtype_id === "3" ? <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تبرع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form onSubmit={onSubmitHandlerFood}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} onChange={onChangeHandler} value={donateData.name} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t(" البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
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
                                    <Form.Control type='number' name="numberOfCartons" className={`${style.input}`} placeholder={t("عدد الكارتين")} onChange={onChangeHandler} value={donateData.numberOfCartons} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                    <Form.Text className={`${style.date}`}>
                                        تحديد ميعاد التبرع لارسال المندوب
                                    </Form.Text>
                                </Form.Group>
                                <Button type="submit" className={style.signup__btn}>
                                    تبرع الان
                                </Button>
                            </Form>
                        </aside> : ""}
                        {formData.donationtype_id === "2" ? <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تطوع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form onSubmit={onSubmitHandlerVolunteer}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("  اسم المستخدم ")} onChange={onChangeHandler} value={donateData.name} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t("    البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='text' name="city" className={`${style.input}`} placeholder={t("المدينة")} onChange={onChangeHandler} value={donateData.city} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='text' name="address" className={`${style.input}`} placeholder={t("العنوان")} onChange={onChangeHandler} value={donateData.address} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='number' name="numberOfVoulenteers" className={`${style.input}`} placeholder={t("عدد المتطوعين")} onChange={onChangeHandler} value={donateData.numberOfVoulenteers} required />
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
                                <Button type="submit" className={style.signup__btn}>
                                    تطوع الان
                                </Button>
                            </Form>
                        </aside> : ""}
                        {formData.donationtype_id === "4" ? <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تبرع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form onSubmit={onSubmitHandlerClothes}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t(" اسم المستخدم")} onChange={onChangeHandler} value={donateData.name} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t(" البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
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
                                    <Form.Control type='number' name="numberOfPeople" className={`${style.input}`} placeholder={t("عدد الافراد")} onChange={onChangeHandler} value={donateData.numberOfPeople} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                    <Form.Text className={`${style.date}`}>
                                        تحديد ميعاد التبرع لارسال المندوب
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                                    <div className="formInput d-flex mt-2" >
                                        <div className="form-group ">
                                            <input className="form-group_checklist" type="checkbox" name="men" id="men" value="men" onChange={(e) => { handleCheckedKind(e) }} />
                                            <label className="form-group_checklist_label" for="men" value="men">رجالي</label>
                                        </div>
                                        <div className="form-group ">
                                            <input className="form-group_checklist" type="checkbox" id="women" value="women" onChange={(e) => { handleCheckedKind(e) }} />
                                            <label className="form-group_checklist_label" for="women" value="women">حريمي</label>
                                        </div>
                                        <div className="form-group ">
                                            <input className="form-group_checklist" type="checkbox" id="child" value="child" onChange={(e) => { handleCheckedKind(e) }} />
                                            <label className="form-group_checklist_label" for="child" value="child">اطفالي</label>
                                        </div>
                                    </div>
                                    <div className="formInput d-flex mt-2" >
                                        <div className="form-group ">
                                            <input className="form-group_checklist" type="checkbox" id="summer" value="summer" onChange={(e) => { handleCheckedSeasons(e) }} />
                                            <label className="form-group_checklist_label font" for="summer" value="summer">صيفي</label>
                                        </div>
                                        <div className="form-group ">
                                            <input className="form-group_checklist" type="checkbox" id="winter" value="winter" onChange={(e) => { handleCheckedSeasons(e) }} />
                                            <label className="form-group_checklist_label " for="winter" value="winter">شتوي</label>
                                        </div>
                                    </div>
                                </Form.Group>


                                <Button type="submit" className={style.signup__btn}>
                                    تبرع الان
                                </Button>
                            </Form>
                        </aside> : ""}
                        {formData.donationtype_id === "5" ? <aside dir='rtl' className={`${style.aside}`}>
                            <button className={`${style.cardDetails__btn}`}>
                                {t("تبرع الان   للحالات عبر موقعنا ")}
                            </button>
                            <Form onSubmit={onSubmitHandlerFurniture}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='name' name="name" className={`${style.input}`} placeholder={t("اسم المستخدم ")} onChange={onChangeHandler} value={donateData.name} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='email' name="email" className={`${style.input}`} placeholder={t(" البريد الالكتروني")} onChange={onChangeHandler} value={donateData.email} required />
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

                                                    >
                                                        <option value=''>العناصر المراد التبرع بيها</option>
                                                        {items && items.map(item =>
                                                            <option value={item.id} name={item.name} key={item.id} >{item.name}</option>
                                                        )}

                                                    </select>
                                                </Form.Group>


                                                {
                                                    index > 0 || dataFurniture.length === 2 ?
                                                        <div className="formInput" >
                                                            <button type='button' onClick={() => { deleteItem(index) }} className={`${style["add-uncle-button"]}`} ><img width={20} src={minus} alt="" /> حذف عنصر</button>
                                                        </div>
                                                        :
                                                        <>
                                                        </>

                                                }


                                            </>
                                        ))
                                        }


                                        <div className="formInput d-flex" >
                                            <button type="button" className={`${style["add-uncle-button"]}`} onClick={() => { addItem() }}><img src={plus} alt="" /> اضافه عنصر </button>
                                        </div>
                                    </>
                                    :
                                    null
                                }


                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control as="textarea" rows="3" name="helpDescription" className={`${style.textArea}`} placeholder={t("تفاصيل العناصر")} onChange={onChangeHandler} value={donateData.helpDescription} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Control type='date' name="dateSend" className={`${style.input}`} onChange={onChangeHandler} value={donateData.dateSend} required />
                                    <Form.Text className={`${style.date}`}>
                                        تحديد ميعاد التبرع لارسال المندوب
                                    </Form.Text>
                                </Form.Group>
                                <Button type="submit" className={style.signup__btn}>
                                    تبرع الان
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
