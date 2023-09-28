import React from 'react'
import Logo from '../assets/images/Logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoInstagram} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='font-poppins text-white bg-[#2C225A]'>
            <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-8 px-4 md:px-44 py-8   '>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <img src={Logo} alt='logo' className='w-24' />
                    <p className='text-sm max-w-md'>
                        SOCIA allows you to seamlessly link your existing social media accounts, including Facebook, Twitter, Instagram, and more, to your SOCIA profile. This integration ensures that you can access your social media feeds, interact with friends, and engage in discussions without leaving the virtual reality environment.
                    </p>
                    <div className='flex justify-between items-center'>
                        <FaFacebookF/>
                        <BiLogoTwitter/>
                        <BiLogoInstagram/>
                        <AiOutlineGooglePlus/>
                        <FaLinkedinIn/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <h1 className='font-semibold'>PRIVACY & TOS</h1>
                    <p className='text-sm'>Advertiser Agreement</p>
                    <p className='text-sm'>Acceptable Use Policy</p>
                    <p className='text-sm'>Privacy Policy</p>
                    <p className='text-sm'>Technology Privacy</p>
                    <p className='text-sm'>Developer Agreement</p>

                </div>
                <div className='flex text-sm flex-col items-center justify-center space-y-4'>
                    <h1 className='text-base font-semibold'>PRIVACY & TOS</h1>
                    <p className=''>Advertisers</p>
                    <p>Developers</p>
                    <p>Resources</p>
                    <p>Company</p>
                    <p>Connect</p>
                </div>
                <div className='flex text-sm flex-col items-center justify-center space-y-4'>
                    <h1 className='text-base font-semibold'>CONTACT US</h1>
                    <p>Mailing Address:xx00 E. Union Ave</p>
                    <p>Suite 1100. Denver, CO 80237</p>
                    <p>  +999 90932 627</p>
                    <p>support@techsadev.com</p>
                    <p>Connect</p>
                </div>

            </div>

        </div>
    )
}

export default Footer
