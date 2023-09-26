import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Logo.png'
//react icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsCheckLg } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const Navbar = () => {
    //states
    const [mobNav, setMobNav] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobNav(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='bg-Herobackground bg-cover bg-center min-h-screen  bg-no-repeat font-poppins'>
            <div className=' mx-auto lg:px-48 px-4 bg-black/20 min-h-screen'>
                <div className=' flex items-center justify-between py-4 '>
                    <div className='items-end'>
                        <img src={Logo} className='lg:h-14 h-28' />

                    </div>
                    <div className='lg:flex items-center gap-4 hidden '>
                        <div className=' gap-8 text-white items-center  flex'>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer transition-transform'>Home</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>Features</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>About</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>Services</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>Roadmap</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>FAQ</div>
                            <div className='hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer'>Team</div>
                        </div>
                        <button className='px-12 py-2 rounded-md text-white border-2  text-sm btn '>Connect<br /> Wallet</button>


                    </div>
                    <div className='flex lg:hidden'>
                        {mobNav ? <RxCross2 size={44} color={'#00ffff'} onClick={() => { setMobNav(!mobNav) }} /> : <GiHamburgerMenu size={44} color={'#00ffff'} onClick={() => { setMobNav(!mobNav) }} />}

                    </div>
                    

                </div>
                {mobNav ? <div className='absolute w-full bg-[#170B35]  '>
                <ul className='flex flex-col text-white w-full'>
                    <li className='py-2 px-4 hover:bg-neonblue'>Home</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>Features</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>About</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>Services</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>Roadmap</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>FAQ</li>
                    <li className='py-2 px-4 hover:bg-neonblue'>Team</li>
                </ul>

            </div> : null}
                {/* HERO-SECTION */}
                <div className='flex flex-col space-y-4 justify-center items-center text-center md:items-start md:justify-start md:text-left py-8'>
                    <div className='font-semibold text-lg text-neonblue'>Revolutionize Your Social Experience</div>
                    <div className='text-2xl md:text-4xl text-white'>Socia’s Token Decentralized</div>
                    <div className='font-bold text-neonblue text-2xl md:text-4xl'>Social Media Platform</div>
                    <p className='max-w-xl text-white md:text-lg'>Our advanced technology ensures fast and seamless social media experience for all our users. With SOCIA's token Decentralized Social Media Platform, you can connect with your account to our mobile app.</p>
                    <ul className='text-white flex flex-col justify-center items-center md:justify-start md:items-start space-y-4'>
                        <li className='flex items-center  gap-2'><FaCheck color={'#00ffff'} /><h1>Convert your social likes to Socia Tokens</h1></li>
                        <li className='flex items-center gap-2'><FaCheck color={'#00ffff'} /><h1>Social Media Integration</h1></li>
                        <li className='flex items-center gap-2'><FaCheck color={'#00ffff'} /><h1>Rewards System</h1></li>
                        <li className='flex items-center gap-2'><FaCheck color={'#00ffff'} /><h1>Virtual Reality Experiences</h1></li>
                    </ul>
                    <button className='text-white max-w-fit rounded-full px-8 py-3 text-sm bg-neonblue'>Join Presale</button>

                </div>


            </div>
            

        </div>
    )
}

export default Navbar
