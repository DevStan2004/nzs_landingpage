"use client"
import React from 'react'
import AnimatedButton from '@/app/components/AnimatedButton'
import GlobalContainer from '@/app/components/GlobalContainer'
import { FolderOpen } from '@phosphor-icons/react'
import Image from 'next/image'
import ProductCard from '@/app/components/ProductCard'
import ThreeColGrid from '@/app/components/ThreeColGrid'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
        <GlobalContainer className='pt-60 grid md:grid-cols-[4fr_8fr] pb-20 items-center'>
            <div className="flex flex-col gap-3 md:pe-20">
                <p className="text-darkgray">Client</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Fashion & Ready-to-Wear</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">1,203</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Jun 25, 2025</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <div className="flex items-center gap-3">
                    <p className="text-semimajorgreen/20 font-semibold">#Smart TVs</p>
                    <p className="text-semimajorgreen/20 font-semibold">#Corporate & Office</p>
                </div>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Top Notch Nigerian-Made fashion items.</h1>
                <p className="text-darkgray">Ready-to-wear Agbada, Senator Sets, Ankara Styles, and Kaftans, Suits, Formal Shirts, Blazers, Trousers, and Pencil Skirts, Graphic Tees, Denim, Hoodies, and Nigerian-brand Joggers, Leader Palms/Slides, Corporate Lofers, Sneakers, and Occasion Heels, Aso-Oke Headwraps, leather Belts, Handbags, and Statement Jewelry</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/wx9cIiFvA3R2uziMHdpMnBs3Y8.jpeg?width=736&height=879'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Nigeria-made Fashion & Ready-to-Wear</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Support the "Wear Nigeria" movement with pieces that offer a better fit and more unique designs than mass-produced imports.</span>
                <p className="text-darkgray md:pe-30">This category celebrates the vibrant textures of Nigeria. We feature everything from N34,000 Flare Gowns to daily essentials. Our fashion vendors are vetted for stitching quality and fabric durability, ensuring you get exactly what you see in the catalog.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/0T6L1lX25RBe1vPbk4MHrBJHS0.jpeg?width=735&height=896'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Fashion & Read-to-Wear</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The biggest headache in Nigerian e-commerce is the lack of standardize sizing.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The Fail: A "Large" gown from one seller fits like a "Small" from another.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Naijazone Fix: We require sellers to provide Physical Measurement Guides in inches and centimeters, not just "S/M/L," so your "Owanbe" outfit fits perfectly the first time.</span>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Real-Time GPS Tracking:</span> Our logistics dashboard shows you exactly where your item is on the map in 2026.
                </p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/3kdQhW1MI6Ct2SlGVDpf3JTAfc.jpeg?width=736&height=984'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/9tp1uIk95NxdIGh3FdQmgzw.jpeg?width=736&height=916'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/jcc3nyADPsiEXylkVwP0MbHgY7c.jpeg?width=736&height=1060'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/53v2nCfJVSEIdnc2RdMf90P8.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/K6aRll8LWKQPJX7xrpO0wHM87U.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl col-span-2' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">why Sell Fashion & Ready-to-Wear on Naijazone</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Tap into our huge Gen-Z and professional customer base lookin for "Authentic Naija" styles.</span>
                <p className="text-darkgray md:pe-30">This category celebrates the vibrant textures of Nigeria. We feature everything from N34,000 Flare Gowns to daily essentials. Our fashion vendors are vetted for stitching quality and fabric durability, ensuring you get exactly what you see in the catalog.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <div className="flex items-center gap-2">
                <FolderOpen size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">DISCOVER MORE</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">What to check more? <br /> Discover our other projects.</span>
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero