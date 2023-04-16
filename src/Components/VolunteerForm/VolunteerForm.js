import React, { useState } from 'react'
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
export default function VolunteerForm() {
    const [active, setActive] = useState('')
    const showmember = (event) => {
        const member = event.target.value;
        setActive(member)
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
                                    <Form  >
                                        <div className={style.userName} dir='rtl'>

                                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                                <Form.Control name="userName" className={`${style.input}`} placeholder={t("اسم المستخدم")} required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="email" autoComplete="off" type='email' className={`${style.input}`} placeholder={t(" البريد الإلكتروني")} required />
                                            </Form.Group>
                                            <div class={style.inputGroupp}>
                                                <PhoneInput
                                                    defaultCountry="EG"
                                                    international
                                                    name="phone"
                                                    className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                            </div>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="age" type="text" autoComplete="off" className={`${style.input}`} placeholder={t("العمر")} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="city" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" المدينة")} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control name="address" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" العنوان")} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <select
                                                    placeholder="State"
                                                    className={`${style.input} select`}
                                                    name="volunteeroption"
                                                    required
                                                >
                                                    <option>اختيار التطوع</option>
                                                    <option>المكفوفين و ضعاف البصر</option>
                                                    <option>قوافل طبية</option>
                                                    <option>الاطعام</option>
                                                </select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <select
                                                    placeholder="State"
                                                    className={`${style.input} select`}
                                                    name="team"
                                                    onChange={(e) => (showmember(e))}
                                                    required
                                                >
                                                    <option value="individual" >فرد</option>
                                                    <option value="group">جماعة</option>
                                                </select>
                                            </Form.Group>
                                            {
                                                active === "group" && (
                                                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                                                        <Form.Control name="address" type="text" autoComplete="off" className={`${style.input}`} placeholder={t(" عدد الافراد")} required />
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
            </section>
        </>
    )
}
