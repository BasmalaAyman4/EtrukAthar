import React, { useState, useEffect } from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function DonorWall() {
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const [moneyDonate, setMoneyDonate] = useState('')
    useEffect(() => {

        axios.get("https://otrok.invoacdmy.com/api/user/donation/money")
            .then((response) => {
                setMoneyDonate(response.data.sum)

            }).catch((err) => { console.log(err) })
    }, [currentLanguageCode])
    return (
        <>
            <HeaderTitle title={t("ملف الشفافيه")} para={t("المبلغ المجموع لملف الشفافيه")} price={moneyDonate ? moneyDonate : 0} />

        </>
    )
}
