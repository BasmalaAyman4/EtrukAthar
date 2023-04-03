import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './DonateNow.module.css'
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import NumericInput from 'react-numeric-input';
import { useTranslation } from 'react-i18next';

export default function DonateNow() {
    const [modalShow, setModalShow] = useState(false)
    const { t } = useTranslation()
    const [priceShow, setPriceshow] = useState("");
    function clickPrice(price) {
        setPriceshow("")
        setPriceshow(price)
        console.log(priceShow);
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={`${style.modal}`}
            >
                <Modal.Header closeButton className={`${style.header}`}>
                    <Modal.Title id="contained-modal-title-vcenter" className={`${style.modal__title}`}>
                        <h2 className={`${style.modal__mainTitle}`}>{t("التبرع المباشر للصندوق العام")}</h2>
                        <p className={`${style.modal__para}`}>{t("مهما كان تبرعك صغيرا,اترك أثرا")}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={`${style.modal__bodyy}`} >
                    <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcPaypal className={`${style.icon}`} /> {t("للتبرع عبر Paypal")}</p></div>
                    <div className={`${style.price__body}`}>
                        <NumericInput value={priceShow ? priceShow : 20.00} className={`${style.price__input}`} /><BiDollar className={`${style.price__icon}`} />
                        <div className={`${style.price__choose}`}>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(10.00) }}>10.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(25.00) }}>25.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(50.00) }}>50.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(100.00) }}>100.00$</button>
                            <button className={`${style.price__btn}`} onClick={() => { clickPrice(250.00) }}>250.00$</button>
                        </div>
                    </div>
                    <div className={`${style.price__checkbox}`}>
                        <label><input type="checkbox" /><span className={`${style.price__para}`}>{t("تغطيه رسوم المعاملات 1.29$")}</span></label>
                        <div>
                            <label><input type="checkbox" /><span className={`${style.price__para}`}>  {t("جعل تبرعي متكرر كل شهر")}</span></label>
                        </div>
                    </div>
                    <button className={`${style.price__btn}`}>{t("تبرع الآن")}</button>
                    <div className={`${style.modal__paypal}`}><p className={`${style.paypal__para}`}><FaCcMastercard className={`${style.icon}`} /> {t("  وسائل التبرع ألاخري ")}</p></div>
                </Modal.Body>
                <Modal.Footer className={`${style.footer}`}>

                    <Button className={`${style.footer__btn}`} >{t(" التبرع مباشر ")} </Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)} className={`${style.btn}`}>
                <span className={`${style.modal__para}`}> {t(" التبرع مباشر ")}</span>
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}
