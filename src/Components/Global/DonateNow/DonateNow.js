import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './DonateNow.module.css'
export default function DonateNow() {
    const [modalShow, setModalShow] = useState(false)
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className={`${style.header}`}>
                    <Modal.Title id="contained-modal-title-vcenter" className={`${style.modal__title}`}>
                        <h2 className={`${style.modal__mainTitle}`}>التبرع المباشر للصندوق العام</h2>
                        <p className={`${style.modal__para}`}>مهما كان تبرعك صغيرا,اترك أثرا</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <div className={`${style.modal__body}`} >
                <Button variant="primary" onClick={() => setModalShow(true)} className={`${style.btn}`}>
                    <span className={`${style.modal__para}`}> التبرع مباشر</span>
                </Button>

            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
