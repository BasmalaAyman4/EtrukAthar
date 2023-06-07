import React from 'react'
import HomeBrief from '../Components/Home/HomeBrief/HomeBrief'
import HomeCounting from '../Components/Home/HomeCounting/HomeCounting'
import WhoWeAre from '../Components/Home/WhoWeAre/WhoWeAre'
import HomeHeader from './../Components/Home/HomeHeader/HomeHeader'
import RandomCases from '../Components/Home/RandomCases/RandomCases'
import AnimatedPage from "../Components/Global/AnimatedPage";

export default function Home() {
    return (
        <AnimatedPage>
            <HomeHeader />
            <WhoWeAre />
            <RandomCases />
            <HomeCounting />
            <HomeBrief />
        </AnimatedPage>

    )
}
