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
export default function Acution() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation()
    const [token, setToken] = useState(localStorage.getItem("token"))

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
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>اضافة حالة لصندوق المزادات </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {!token ? <p className={`${style.para}`}> يجب تسجيل دخول لاضافة حالة  <a href='/login' className={`${style.link}`}> تسجل دخول</a></p> :
                                    <div className={`${style.images}`}>
                                    </div>
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
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
