import React from 'react'
import HomeBrief from '../Components/Home/HomeBrief/HomeBrief'
import HomeCounting from '../Components/Home/HomeCounting/HomeCounting'
import RoundomCases from '../Components/Home/RoundomCases/RoundomCases'
import WhoWeAre from '../Components/Home/WhoWeAre/WhoWeAre'
import HomeHeader from './../Components/Home/HomeHeader/HomeHeader'
export default function Home() {
    return (
        <>
            <HomeHeader />
            <WhoWeAre />
            <RoundomCases />
            <HomeCounting />
            <HomeBrief />
 
        </>
    )
}
