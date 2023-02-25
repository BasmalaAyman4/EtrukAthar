import React from 'react'
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaLinkedin, FaGoogle, FaTwitter, FaWhatsapp, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Footer() {
    const {t} = useTranslation()
    return (
        <>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center  p-4 border-bottom'>
                  

                    <div className='social-icon text-center'>
                        <Link to='' className='me-4 text-reset '>
                            <FaFacebook />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaLinkedin />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaGoogle />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaWhatsapp />
                        </Link>
                        <Link to='' className='me-4 text-reset '>
                            <FaTwitter />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                            <FaGithub />
                        </Link>
                    </div>
                </section>

                <section className='footer-dir' >
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3 footer-body' >

                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    {t("من نحن؟")}
                                </h6>
                                <hr />
                                <p className='footer_we-are_p'>
                                     {t("اترك أثرا , مجموعه شبابية تعني برفع سوية المجتمع و العمل التطوعي , جمعيه خيرية نحو مستقبل مشرق")}
                                </p>
                            </MDBCol>



                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>{t("روابط مفيدة")} </h6>
                                <hr />
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t( "سياسه الاستخدام")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t("سياسة الخصوصية")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                       {t( "سياسه جمع التبرعات")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                        {t( "كيف اتبرع ؟ ")}
                                                             </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                        {t( "تطوع معنا")}
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4'>{t("روابط مفيدة")}</h6>
                                <hr />
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                       {t("المشاريع")}
                                    </Link>
                                </p>
                               
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                      {t(" حالات إنسانية")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                      {t(" حالات طبية")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t(" كفالة يتيم")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t("كفالة أسرة" )}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t(" المناسبات")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t("صندوق علمني ")}
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset footer__link'>
                                    {t(  "ملف الشفافية")}
                                    </Link>
                                </p>
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='footer__h6 text-uppercase fw-bold mb-4' >{t("كن علي تواصل معنا")}</h6>
                                <hr />
                                <p className='footer__contact-us_p'>
                                   {t(" مصر : القاهره , حلوان  ") }
                                    <FaHome className="me-3 " />
                                </p>
                                <p className='footer__contact-us_p'>

                                    info@example.com
                                    <FaEnvelope className="me-3" />
                                </p>
                                <p className='footer__contact-us_p'>
                                      + 01 234 567 88 <FaPhone className="me-3" />
                                </p>
                                <p className='footer__contact-us_p'>
                                    + 01 234 567 89 <FaPrint className="me-3" />
                                </p>
                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <Link className='text-reset fw-bold' to='https://mdbootstrap.com/'>
                        Etrk Athr
                    </Link>
                </div>
            </MDBFooter>

        </>
    )
}
