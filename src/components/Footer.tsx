import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/noun-cart.svg'
import Image from 'next/image'
import instaImg1 from '../assets/footer-imgs/Bitmap-1.png'
import instaImg2 from '../assets/footer-imgs/Bitmap-2.png'
import instaImg3 from '../assets/footer-imgs/Bitmap-3.png'
import instaImg4 from '../assets/footer-imgs/Bitmap-4.png'
import instaImg5 from '../assets/footer-imgs/Bitmap.png'

const FooterComponent: React.FC<any> = () => {
    const titleStyle = 'font-bold uppercase text-sm mb-6'
    const itemStyle = 'text-xs leading-5 mb-4'
    return (
        <div className='font-opensans grid grid-cols-9 bg-black text-white pt-10 px-24 pb-36'>
            <div className='col-span-6 grid grid-cols-9'>
                <div className='col-span-3 w-11/12'>
                    <h5 className={titleStyle}>about</h5>
                    <p className={`${itemStyle} pt-4`}>Bloowatch is specialized software for watersports schools (surfing, kitesurfing, sailing, and diving) and outdoor activity providers (skiing, climbing</p>
                </div>
                <div className='col-span-3'>
                    <h5 className={titleStyle}>contact</h5>
                    <p className={itemStyle}>156-677-124-442-2887</p>
                    <p className={itemStyle}>wave@bloowatch.com</p>
                    <p className={itemStyle}>Spain</p>
                </div>
                <div className='col-span-3 flex flex-col'>
                    <h5 className={titleStyle}>useful links</h5>
                    <a href="#" className={itemStyle}> About us</a>
                    <a href="#" className={itemStyle}>History</a>
                    <a href="#" className={itemStyle}> Contact us</a>
                </div>
            </div>
            <div className='col-span-3'>
            <h5 className={titleStyle}>INSTAGRAM</h5>
            <div>
                <Image height="64" width="64" src={instaImg1} alt="insta image"/>
                <Image height="64" width="64" src={instaImg2} alt="insta image"/>
                <Image height="64" width="64" src={instaImg3} alt="insta image"/>
                <Image height="64" width="64" src={instaImg4} alt="insta image"/>
                <Image height="64" width="64" src={instaImg5} alt="insta image"/>
            </div>
            </div>
        </div>
    )
}

export default FooterComponent;
