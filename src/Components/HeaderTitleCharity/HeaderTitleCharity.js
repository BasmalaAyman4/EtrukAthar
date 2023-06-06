import React from 'react'
import styles from "./HeaderTitleCharity.module.css"
export default function HeaderTitleCharity(props) {
    return (
        <>
            <section className={`${styles.section}`}>
                <div className={`${styles.section__body}`}>
                    <h3 className={`${styles.section__title}`}>{props.title}</h3>
                    <p className={`${styles.section__para}`}>  {props.para}</p>
                </div>
            </section>

        </>
    )
}
