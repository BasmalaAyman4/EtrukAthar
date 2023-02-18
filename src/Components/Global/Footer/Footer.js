import React from 'react'
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaLinkedin, FaGoogle, FaTwitter, FaWhatsapp, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className='social-icon'>
                        <a href='' className='me-4 text-reset'>
                            <FaFacebook />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaLinkedin />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaGoogle />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaWhatsapp />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaTwitter />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaGithub />
                        </a>
                    </div>
                </section>

                <section >
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 footer-body' >

                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    من نحن؟
                                </h6>
                                <hr />
                                <p>
                                    اترك أثرا , مجموعه شبابية تعني برفع سوية المجتمع و العمل التطوعي , حمعيه خيرية نحو مستقبل مشرق
                                </p>
                            </MDBCol>



                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>روابط مفيدة</h6>
                                <hr />
                                <p>
                                    <a href='#!' className='text-reset'>
                                        سياسه الاستخدام
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        سياسة الخصوصية
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        سياسه جمع التبرعات
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        كيف أتبرع
                                        ؟                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        تطوع معنا
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>روابط مفيدة</h6>
                                <hr />
                                <p>
                                    <a href='#!' className='text-reset'>
                                        المشاريع
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        حالات انسانية
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        حالات طبيه
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        كفالة يتيم
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        كفالة أسرة
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' >كن علي تواصل معنا</h6>
                                <hr />
                                <p>
                                    مصر : القاهره , حلوان , شارع عبد الرحمن
                                    <FaHome className="me-3 " />
                                </p>
                                <p>

                                    info@example.com
                                    <FaEnvelope className="me-3" />
                                </p>
                                <p>
                                    + 01 234 567 88 <FaPhone className="me-3" />
                                </p>
                                <p>
                                    + 01 234 567 89 <FaPrint className="me-3" />
                                </p>
                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        Etrk Athr
                    </a>
                </div>
            </MDBFooter>

        </>
    )
}
