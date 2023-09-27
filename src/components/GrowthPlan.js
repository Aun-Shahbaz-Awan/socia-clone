import React from 'react'

const GrowthPlan = () => {
    return (
        <div className='bg-[#2C225A] min-h-screen'>
            <div className='py-24 flex-col space-y-4 justify-center items-center text-center  px-4 md:px-24'>
                <div className='text-[#00DCFF] font-semibold '>Easy steps to start</div>
                <div className='text-white text-3xl font-medium'>SOCIA Token Growth Plan</div>
                <p className='text-white/70'>Discover how our rewards system incentivizes user engagement and content creation.</p>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex-col space-y-28 w-full md:w-1/4'>
                        <div className='flex-col  justify-center items-center space-y-4'>
                            <h1 className='text-6xl font-bold text-center text-white'>85%</h1>
                            <p className='text-white/80 text-center '>Clients & employees reten tion rates consectetur adip iscing elit ut felis nisl.</p>
                        </div>
                        <div className='flex-col justify-center items-center text-center space-y-4'>
                            <h1 className='text-6xl font-bold text-white'>12K</h1>
                            <p className='text-white/80'>Ented employees forming our team, consectetur adip iscing elit ut felis nisl</p>
                        </div>
                        <div className='flex-col justify-center items-center text-center space-y-4'>
                            <h1 className='text-6xl font-bold text-white'>18+</h1>
                            <p className='text-white/80'>Countries where we manage campaigns secretor adi piscing elit ut felis nisl</p>
                        </div>

                    </div>
                    <div className='w-full md:w-2/4 flex justify-center items-center bg-world  py-36 md:py-0 bg-cover bg-no-repeat bg-center '>
                        <h1 className='text-lg md:text-4xl text-white font-bold max-w-md text-center'>Our platform growth in
                            just few years is going
                            to dominate the world</h1>

                    </div>
                    <div className='flex-col space-y-28  w-full md:w-1/4'>
                        <div className='flex-col justify-center items-center text-center space-y-4 '>
                            <h1 className='text-6xl font-bold text-white'>50K</h1>
                            <p className='text-white/80'>Transactions per day retention rates</p>
                        </div>
                        <div className='flex-col justify-center items-center text-center space-y-4'>
                            <h1 className='text-6xl font-bold text-white'>12K</h1>
                            <p className='text-white/80'>Transactions per day retention rates</p>
                        </div>
                        <div className='flex-col justify-center items-center text-center space-y-4'>
                            <h1 className='text-6xl font-bold text-white'>18+</h1>
                            <p className='text-white/80'>Countries where we manage campaigns secretor adi piscing elit ut felis nisl </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default GrowthPlan
