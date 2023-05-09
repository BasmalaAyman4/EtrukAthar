import React, { useState, useContext, useEffect } from 'react'
import styles from './NavbarMenu.module.css'
import './NavbarMenu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './../../../assets/images/images (1).jpg'
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import x from "./../../../assets/icons/x.svg"
import { AuthContext } from '../../../Components/Context/AuthContext';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import i18next from 'i18next';
import { MdNotificationsActive } from "react-icons/md";
import { useRef } from 'react';


export default function NavbarMenu() {

    const location = useLocation()
    const [token, setToken] = useState(localStorage.getItem('token'))

    const languages = [
        {
            code: 'en',
            name: 'English',
            dir: 'rtl',
            country_code: 'gb',
        },
        {
            code: 'ar',
            name: 'Arabic',
            dir: 'ltr',
            country_code: 'sa',
        },
    ]
    const toggleNav = useRef();
    const [NavbarSide, setNavbarSide] = useState(false)
    const [openCases, setOpenCases] = useState(false);
    const [openSponsorships, setOpenSponsorships] = useState(false);
    const authContext = useContext(AuthContext);
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        setNavbarSide(false)
    }, [location])
    useEffect(() => {

        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t("عنوان")

    }, [currentLanguage, t])
    function handleLanguage(code, index, event) {
        event.preventDefault();
        i18next.changeLanguage(code)
    }
    function logout() {
        setToken(localStorage.setItem("token", ""))
    }
    return (
        <>
            <header>
                <Container>
                    <div className={`${styles.header}`}>
                        <nav className={`${styles.navLink__header}`}>
                            {token ? <Link to="/" className={`px-3 pt-2 ${styles.header__link}`} onClick={logout}>{t("تسجيل خروج")}</Link> : <Link to="/login" className={`px-3 pt-2 ${styles.header__link}`} > {t("تسجيل الدخول")}</Link>}
                            {token ? <Link to="/edit-profile" className={`px-3 pt-2 ${styles.header__link}`}> {t("تعديل حسابي")}</Link> : <Link to="/sign-up" className={`px-3 pt-2 ${styles.header__link}`}> {t("تسجيل")}</Link>}
                            <Link to="/Zakat" className={`px-3 pt-2 ${styles.header__link}`}> {t("حاسبة الزكاة")} </Link>
                            <Link to="/askForVoluntary" className={`px-3 pt-2 ${styles.header__link}`}>{t("تطوع معنا")} </Link>

                            {languages.map(({ code, name }, index) => (
                                <Link
                                    id={`language${index}`}
                                    key={code}
                                    onClick={(event) => { handleLanguage(code, index, event) }}
                                    className={`px-3 pt-2 ${styles.header__link}`}
                                    href="#">{name}
                                </Link>

                            ))}



                        </nav>
                        <div className={`pt-2 ${styles.social}`}>
                            <span className='px-2'><BsFacebook /></span>
                            <span className='px-2'><BsYoutube /></span>
                            <span className='px-2'><BsInstagram /></span>
                            <span className='px-2'><BsTwitter /></span>
                        </div>
                    </div>
                </Container>
            </header>

            {['sm'].map((expand) => (

                <Navbar key={expand} expand={expand} className={`${styles.nav}`}>
                    <Container >

                        <div className="nav-dropdown">
                            <button type="button" className="Nav-button" onClick={() => { setNavbarSide(true) }} variant="success" id="basic-navbar-nav">
                                <span className="icon-bar"></span>
                            </button>

                            <div ref={toggleNav} className={NavbarSide ? "navbar-toggle show-nav" : "navbar-toggle"} >
                                <div className="nav-side">
                                    <div className="side__close " >
                                        <button onClick={() => { setNavbarSide(false) }} className="btn side__close-button  ">
                                            <img src={x} alt="" className="side__close__svg" />
                                        </button>
                                    </div>

                                    <ul className="nav-side__list pt-3">
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">{t("الرئيسية")} </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/cases" href="index.html">{t("الحالات")} </NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="nav-link" to="/event" href="index.html">{t(" المناسبات")}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">   {t("جمعيات  خيرية")}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/event" href="index.html">{t("تواصل معنا")}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html">{t("صندوق علمني ")} </NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="nav-link" to="/Zakat" href="index.html">{t("حاسبة الزكاة")}   </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/askForVoluntary" href="index.html"> {t("  تطوع معنا ")}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/" href="index.html"> {t("  تواصل معنا ")}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/sign-up" href="index.html"> {t("تسجيل")}  </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/login" href="index.html"> {t("تسجيل الدخول")}  </NavLink>
                                        </li>


                                    </ul>


                                </div>
                                <div className="other-side" onClick={() => { setNavbarSide(false) }}>
                                </div>
                            </div>


                        </div>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Body>
                                <Nav className={`justify-content-end flex-grow-1 p-2 ${styles.nav__dir} `} >
                                    <NavLink to="/" className={`${styles["main-nav__link"]} main-nav__link`}>{t("الرئيسية")}</NavLink>
                                    <NavLink to="/cases" className={`${styles.mainNav__link} main-nav__link`}> {t("الحالات")}</NavLink>
                                    <NavLink to="/event" className={`${styles.mainNav__link} main-nav__link `}><MdNotificationsActive className='event' />{t(" المناسبات")}</NavLink>
                                    <NavLink to="/charities" className={`${styles.mainNav__link} main-nav__link`}>{t("جمعيات  خيرية")} </NavLink>
                                    <NavLink to="/acution" className={`${styles.mainNav__link} main-nav__link`}>{t("تواصل معنا")} </NavLink>
                                    <NavLink to="/box" className={`${styles.mainNav__link} main-nav__link`}> {t("صندوق علمني ")}</NavLink>


                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand to="#" className='navbrand'>
                            <img src={Logo} alt='' className={styles.logo} />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            ))
            }

        </>
    )
}
