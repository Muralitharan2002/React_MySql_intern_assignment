import React from 'react'

import Refer1 from '../assets/refer1.svg'
import Refer2 from '../assets/refer2.svg'
import Refer3 from '../assets/refer3.svg'
import { Button } from '@mui/material'

function HowRefer() {
    return (
        <div className='lg:px-16 md:px-5 px-2 py-10 bg-light-blue my-24'>
            <div className='text-center font-bold text-3xl'>
                <h2>How Do I <span className='text-medium-blue'>Refer?</span></h2>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-20 my-20 lg:w-[85%] mx-auto'>
                <div className=' rounded-[100%] w-72 h-72 flex flex-col items-center justify-center gap-6 shadow-2xl circle relative' >
                    <div className=''>
                        <img src={Refer1} alt="" />
                    </div>
                    <p className='text-lg text-center mx-6'>Submit referrals easily via our website’s referral section.</p>
                </div>
                <div className=' rounded-[100%] w-72 h-72 flex flex-col items-center justify-center gap-6 shadow-2xl circle relative' >
                    <div className=''>
                        <img src={Refer2} alt="" />
                    </div>
                    <p className='text-lg text-center mx-6'>Earn rewards once your referral joins an Accredian program.</p>
                </div>
                <div className=' rounded-[100%] w-72 h-72 flex flex-col items-center justify-center gap-6 shadow-2xl circle relative' >
                    <div className=''>
                        <img src={Refer3} alt="" />
                    </div>
                    <p className='text-lg text-center mx-6'>Both parties receive a bonus 30 days after program enrollment.</p>
                </div>
            </div>


            <div className='text-center'>
                <Button variant='contained' sx={{ backgroundColor: "#1A73E8", textTransform: 'none', fontSize: '18px', borderRadius: '8px', paddingX: '45px', paddingY: "9px" }}>
                    Refer Now
                </Button>
            </div>

        </div>
    )
}

export default HowRefer