import React from 'react'
import { Link } from 'react-router-dom'
import style from './EventCard.module.css'
export default function EventCard(props) {
    return (
        <>
            <div id={` ${props.id}`}>
                <Link to={`/event-details/${props.id}`} className={`${style.link}`}>
                    <div className={`${style.eventCard}`}>
                        <div className={`${style.event__date}`}>
                            <h2> {props.month}</h2>
                            <h2> {props.day}</h2>
                        </div>
                        <div className={`${style.eventCard__body}`}>
                            <h4 className={`${style.eventCard__title}`}> {props.title}</h4>
                            <p className={`${style.eventCard__para}`}> {props.time}</p>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}
