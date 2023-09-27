import React from 'react'
//images
import About1 from '../assets/images/About1.png'
import about2 from '../assets/images/about2.png'
import communtiy from '../assets/images/communtiy.png'
import reward from '../assets/images/reward.png'
import virtual from '../assets/images/virtual.png'
import marketplace from '../assets/images/marketplace.png'
//react-icons
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaLaptop } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'


const About = () => {
    return (
        <div className='min-h-[200vh] bg-Aboutbg bg-no-repeat bg-cover font-poppins '>
            <div className='flex flex-col py-24 space-y-10 px-4 lg:px-48'>
                <div className='flex flex-col md:flex-row w-full text-center  md:text-left  items-center lg:justify-between gap-24'>
                    <img src={About1} />
                    <div>
                        <h1 className='font-medium text-lg '> Pre-Minting of Tokens for Controlled Supply</h1>
                        <p className='py-2 text-sm'>To control the token price and avoid manipulation, we propose pre-minting 4 billion SOCIA tokens. This approach allows us to create a reserve to stabilize the token economy.</p>
                    </div>
                </div>
                <h1 className='text-3xl text-black/80 font-medium  text-center'>OUR STORY</h1>
                <p className='text-slate-500 text-semibold px-4 pb-10  text-center'>Socia was founded with one goal in mind - to revolutionize the social media experience. We believe that social media should be decentralized, transparent, and secure, and our platform reflects these values. Our team of experts has worked tirelessly to develop a Decentralized Social Platform that empowers users and ensures their privacy.</p>
                <div className='flex flex-col space-y-12 md:flex-row justify-center items-center '>
                    <div className=' shadow-xl backdrop-blur-2xl px-4 h-72  text-white items-center justify-center space-y-4  text-center flex flex-col bg-gradient-to-b from-[#55B5FC] to-[#09F8FF]  '>
                        <div className='p-4 rounded-full bg-white -mt-20 shadow-2xl backdrop-blur-3xl'><TfiHeadphoneAlt size={40} color={'#55B4FC'} /></div>
                        <div className='font-bold text-xl'>SECURE</div>
                        <p className=''>At SOCIA, we take the security of your data seriously. Our Decentralized Social Platform ensures that your data is protected from unauthorized access and hacking attempts. We employ state-of-the-art security measures to keep your data safe.</p>
                    </div>
                    <div className='shadow-2xl  backdrop-blur-3xl px-4 h-80  items-center justify-center text-center space-y-4 flex flex-col bg-white '>
                        <div className='p-4 rounded-full bg-[#55B4FC] -mt-24 shadow-2xl '><FaLaptop size={48} color='white' /></div>
                        <div className='font-bold text-xl'>OUR VISION</div>
                        <p>At Socia, we envision a world where social mediaistruly free and transparent.We believe thatsocial media should be a tool for empowerment, not a means of control. Our DecentralizedSocial Platform is a step towards realizing this vision.</p>
                    </div>
                    <div className='shadow-xl backdrop-blur-2xl px-4 h-72 py-8 text-white  items-center justify-center text-center flex flex-col space-y-4 bg-gradient-to-b from-[#55B5FC] to-[#09F8FF] '>
                        <div className='p-4 rounded-full bg-white -mt-20 shadow-2xl backdrop-blur-3xl'><LuMail size={40} color={'#55B4FC'} /></div>
                        <div className='font-bold text-xl'>EASY</div>
                        <p>Using My SOCIA’s Decentralized Social Platform is easy and intuitive. Our platform is designed with user experience in mind, ensuring that even the least tech-savvy users can navigate with ease.</p>
                    </div>

                </div>
                <div className=' flex flex-col md:flex-row justify-center items-center pt-8'>
                    <div className='w-full md:w-1/2 flex flex-col space-y-8'>
                        <div className='flex justify-center items-center bg-[#F8F7F7] gap-2 '>
                            <div className='bg-[#F8BA86] rounded-lg p-1'><img src={reward} className='rounded-md w-36' /> </div>
                            <div className='flex flex-col justify-center items-start  py-2 bg-[#F8F7F7]'>
                                <h1 className='font-semibold '>Rewards System</h1>
                                <p className='text-slate-500'>Earn SOCIA tokens for your engagement and content creation. Get rewarded for likes, comments, and shares.</p>

                            </div>
                        </div>
                        <div className='flex justify-center items-center  gap-2'>
                            <div className='bg-[#FF6699] rounded-md p-1'><img src={virtual} className='rounded-md w-48' /></div>
                            <div className='flex flex-col justify-center items-start  px-2 py-1 bg-[#F8F7F7]'>
                                <h1 className='font-semibold '>Virtual Reality Experiences</h1>
                                <p className='text-slate-500'>Immerse yourself in interactive and immersive virtual reality content. Create, share, and monetize your own virtual reality experiences.</p>

                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 '>
                            <div className='bg-[#3BB2E1] rounded-md p-3'><img src={marketplace} className='rounded-md w-32' /></div>
                            <div className='flex flex-col justify-center items-start py-2 bg-[#F8F7F7]'>
                                <h1 className='font-semibold '>Marketplace</h1>
                                <p className='text-slate-500'>Buy and sell products and services using SOCIA tokens. Monetize your content and engage in peer-to-peer transactions.</p>

                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 bg-[#F8F7F7]'>
                            <div className='bg-[#40D2A3] p-3 rounded-md'><img src={communtiy} className='rounded-md w-32' /></div>
                            <div className='flex flex-col justify-center items-start  py-2'>
                                <h1 className='font-semibold '>Join the Community</h1>
                                <p className='text-slate-500'>EBuy and sell products and services using SOCIA tokens. Monetize your content and engage in peer-to-peer transactions.</p>

                            </div>
                        </div>


                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={about2} alt='twomobiles'  />

                    </div>

                </div>


            </div>

        </div>
    )
}

export default About
