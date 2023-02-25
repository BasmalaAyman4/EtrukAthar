import React from 'react'
import styles from './Projects.module.css'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import './prog.css'
import { Container } from 'react-bootstrap'
import pro1 from './../../assets/images/pro1.jpg'
import pro2 from './../../assets/images/pro2.jpeg'
import pro3 from './../../assets/images/pro3.jpg'

export default function Projects() {

    return (
        <>
            <section className={`${styles.projects}`}>
                <HeaderTitle title='المشاريع' para='المبلغ المجموع للمشاريع' price='1.037.976.07$' />
                <Link to='' className={`${styles.donate__link}`}>تبرع فوري لصندوق المشاريع</Link>
                <p className={`${styles.donate__para}`}>نواظب على التنقيب عن مستلزمات المجتمع، ساعين لأجل توفير مشاريع من شأنها تلبية متطلباتهم، وتوفير حياةٍ كريمة لكلّ من تكبّد ويلاتُ الحرب</p>
                <Container>
                    <div className={`${styles.projects__body}`}>
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...'
                            price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                        <Card title='  زلزال يزيد معاناتهم '
                            para=' ليلة ليست كمثيلها قضتها العائلات في جنوب تركيا و سوريا برعب و خوف العديد من الأفراد ما ...' price='128,775$'
                            totalPrice='جمعت من 150,000$'
                            numOfDonates='448'
                            prog='80'
                            img={pro3} />
                        <Card title='دفء الحياة 11 '
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='42,512$'
                            totalPrice='جمعت من 50,000$'
                            numOfDonates='44'
                            prog='80'
                            img={pro1} />
                        <Card title='شوربة دافئة'
                            para='لا يعلمون من الشتاء سوى رجفة أطراف أطفالهم وتجمّدها، ولا من الأمطار والثلوج سوى غرق الخيام… '
                            price='73$'
                            totalPrice='جمعت من 5,000$'
                            numOfDonates='3'
                            prog='10'
                            img={pro2} />
                    </div>
                </Container>

            </section>
        </>
    )
}
