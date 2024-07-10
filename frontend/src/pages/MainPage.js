import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowRefer from '../components/HowRefer';
import ReferralBenefits from '../components/ReferralBenefits';

function MainPage() {
    return (
        <div className=' font-inter'>
            <Header />
            <Hero />
            <HowRefer />
            <ReferralBenefits />
        </div>
    )
}

export default MainPage