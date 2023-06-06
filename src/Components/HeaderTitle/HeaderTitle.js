import React from 'react'
import styles from './HeaderTitle.module.css'
import { useTranslation } from 'react-i18next'
export default function HeaderTitle(props) {
    const { t } = useTranslation()
    return (
        <>
            <section className={`${styles.section}`}>
                <div className={`${styles.section__body}`}>
                    <h3 className={`${styles.section__title}`}>{props.title}</h3>
                    <p className={`${styles.section__para}`}>  {props.para}</p>
                    <h4 className={`${styles.section__price}`}>{props.price + " " + t('جنيه') }</h4>
                </div>
            </section>

        </>
    )
}
