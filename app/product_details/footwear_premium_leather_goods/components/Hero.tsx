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
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Footwear & Premium Leather Goods</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">1500</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Mar 22, 2025</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Durable, stylish footwear crafted by Nigeria's finest leatherworkers.</h1>
                <p className="text-darkgray">From Aba-made corporate shoes to the finest palm slippers crafted in Kano, quality is guaranteed.</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/vrIMXQp9uN9rWzCcEOit3VRjJ0.jpeg?width=498&height=595'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Nigeria-made Footwear & Premium Leather Goods</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Nigeria leatherwork is world-class. Our footwear category features items like N14,000 premium palm slippers that offer longevity and style. We connect you with hubs of leather excellence in Aba and Kano, delivering luxury to your doorstep</span>
                <p className="text-darkgray md:pe-30">Our "Agent Verification" means we've seen the leather and the soles; no "What i ordered vs. What i got" here</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/aPttjxCjGKz5yosTqexzltTIDI.jpeg?width=720&height=900'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Footwear & Premium Leather Goods</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The Fail: We require sellers to provide Physical Measurement Guides in inches and centimeters, not just "S/M/L," so your "Owanbe" outfit fits perfectly the first time.</span>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Testing Protocols:</span> High-value items are checked by our logistics hubs for basic functionality before the final leg of delivery.
                </p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/PQ1m4aSzLjCURbqU9hloIxzcY.jpeg?width=736&height=901'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/Obaqdn4EPFVJjyX359kWP0gccs.jpeg?width=736&height=1001'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/5WQDWiS4YJEuixMzhc6SOrWM.jpeg?width=564&height=752'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/EnbYylsUyW2su6AsIpIJexsZg.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/WIOscKzJIPIwuBJHP8EkJyI29nk.jpeg?width=736&height=736'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl col-span-2' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">why Sell Footwear & Premium Leather Goods on Naijazone</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">We Provide the logistics to get your shoes from the workshop to customers in all 36 states safely.</span>
                <p className="text-darkgray md:pe-30">Natural leather items may have slight variations in texture, which is a hallmark of authentic, non-synthetic materials. We show buyers the advantage of buying this quality from you.</p>
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