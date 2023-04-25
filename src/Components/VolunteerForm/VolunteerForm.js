import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import style from "./VolunteerForm.module.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import volunteerImg from "./../../assets/images/volunteer.png"
import vol from "./../../assets/images/ngo-illustration-Artboard-4.png"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
export default function VolunteerForm() {
    const [active, setActive] = useState('')
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [volunteerData, setVolunteerData] = useState({
        userName: '',
        email: '',
        age: '',
        city: '',
        address: '',
        volunteeroption: '',
        team: '',
        numOfGroup: '',
        phoneNum: ""
    })
    const showmember = (e) => {
        const member = e.target.value;
        setActive(member)
        setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        axios.get(`https://otrok.invoacdmy.com/api/user/volunteer/get/user`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                setVolunteerData({
                    userName: response.data.user.name,
                    email: response.data.user.email,
                    age: "",
                    city: "",
                    address: "",
                    volunteeroption: "",
                    team: "",
                    numOfGroup: "",
                    phoneNum: response.data.user.phone
                })

            }).catch((err) => { console.log(err) })

    }, [])
    const onChangeHandler = e => {

        setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value })
    }

    const onChangeHandlerPhone = data => {
        setVolunteerData({ ...volunteerData, phone: data })

    }
    const storeVolunteer = new FormData();
    storeVolunteer.append("name", volunteerData.userName);
    storeVolunteer.append("email", volunteerData.email);
    storeVolunteer.append("age", volunteerData.age);
    storeVolunteer.append("address", volunteerData.address);
    storeVolunteer.append("city", volunteerData.city);
    storeVolunteer.append("phone", volunteerData.phoneNum);
    storeVolunteer.append("activity", volunteerData.volunteeroption);
    storeVolunteer.append("volunteer_type", volunteerData.team);
    storeVolunteer.append("num_of_members", volunteerData.numOfGroup);
    const onSubmitHandler = (e) => {
        const toastId = toast.loading("...انتظر قليلا")
        setTimeout(() => { toast.dismiss(toastId); }, 1000);
        e.preventDefault()
        axios.post("https://otrok.invoacdmy.com/api/user/volunteer/store/user", storeVolunteer, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        axios.post("https://otrok.invoacdmy.com/api/user/volunteer/store/guest", storeVolunteer, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message)
                console.log(storeVolunteer, "bla")
            }
            ).catch((err) => { toast.error(err.response.data.message) })

    }

    const { t } = useTranslation()
    return (
        <>
            <section className={`${style.volunteerForm}`}>
                <div className={`${style.volunteer}`}>
                    <Container>
                        <Row className={`justify-content-md-center`}>
                            <Col lg={4} >
                                <p className={`${style.volunteerPara}`}>VOLUNTEER</p>
                                <h1 className={`${style.volunteerTitle}`}> Become a volunteer or help out with an event</h1>
                            </Col>
                            <Col lg={4}>
                                <img src={volunteerImg} alt='' className={`${style.volunteerImg}`} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={`${style.volunteerCard}`}>
                    <Container>
                        <Row >
                            <Col className={`${style.event} `} md={{ span: 4, offset: 1 }} >
                                <p className={`${style.eventPara}`}>BROWSE EVENTS</p>
                                <h1 className={`${style.volunteerTitle}  ${style.volunteerJoin}`}> Look for an event near you!</h1>
                                <Link to='/event' className={`${style.volunteerLink} `}> VIEW EVENTS</Link>
                            </Col>
                            <Col className={`${style.join}`} md={{ span: 4, offset: 1 }}>
                                <p className={`${style.volunteerPara}`}>JOIN</p>
                                <h1 className={`${style.volunteerTitle} ${style.volunteerJoin}`}>Want to become a regular?</h1>
                                <Link to='/' className={`${style.volunteerLink} ${style.linkJoin}`}> GET IN TOUCH</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={`${style.form}`}>
                    <Container>
                        <Row className={`${style.contact}`}>
                            <Col>
                                <p className={`${style.volunteerPara}`}>CONTACT</p>
                                <h1 >Contact us to get started</h1>
                                <p className={`${style.formPara}`}>Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium. Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum</p>
                                <img src={vol} alt="" className={`${style.formImg}`} />
                            </Col>
                            <Col>
                                <div className={`${style.contactForm}`}>
                                    <Form onSubmit={onSubmitHandler} >
                                        <div className={style.userName} dir='rtl'>

                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control name="userName" className={`${style.input}`} placeholder={t("اسم المستخدم")} required onChange={onChangeHandler} value={volunteerData.userName} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="email" autoComplete="off" type='email' className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} required onChange={onChangeHandler} value={volunteerData.email} />
                                            </Form.Group>
                                            <div class={style.inputGroupp}>
                                                <PhoneInput
                                                    defaultCountry="EG"
                                                    international
                                                    name="phoneNum"
                                                    onChange={onChangeHandlerPhone}
                                                    value={`"${volunteerData.phoneNum}"`}
                                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                            </div>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="age" type="text" autoComplete="off" className={`${style.input}`} placeholder={t("العمر")} onChange={onChangeHandler} value={volunteerData.age} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="city" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" المدينة")} onChange={onChangeHandler} value={volunteerData.city} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="address" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" العنوان")} required onChange={onChangeHandler} value={volunteerData.address} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <select
                                                    placeholder="State"
                                                    className={`${style.input} select`}
                                                    name="volunteeroption"
                                                    required
                                                    onChange={onChangeHandler}
                                                    value={volunteerData.volunteeroption}
                                                >
                                                    <option>اختيار التطوع</option>
                                                    <option>المكفوفين و ضعاف البصر</option>
                                                    <option> blind</option>
                                                    <option>الاطعام</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <select
                                                    placeholder="State"
                                                    className={`${style.input} select`}
                                                    name="team"
                                                    required
                                                    onChange={showmember}
                                                    value={volunteerData.team}
                                                >
                                                    <option>اختيار نوع التطوع</option>
                                                    <option value="individual" >فرد</option>
                                                    <option value="group">جماعة</option>
                                                </select>
                                            </Form.Group>
                                            {
                                                active === "group" && (
                                                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                                                        <Form.Control name="numOfGroup" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" عدد الافراد")} required onChange={onChangeHandler} value={volunteerData.numOfGroup} />
                                                    </Form.Group>
                                                )
                                            }

                                            <Button className={style.signup__btn} type="submit">
                                                {t(" تطوع الان")}
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}
