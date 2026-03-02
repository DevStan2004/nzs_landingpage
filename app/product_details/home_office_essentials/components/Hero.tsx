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
                <Image src={'https://framerusercontent.com/images/Y6JPGBHR2bYor24Ye09kLyQIXU.jpeg?width=736&height=878'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Adams Ovhiedo</p>
                    <p>Brand Strategist at Noora</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 24, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Home & Office Essentials to Upgrade your Space This Year</h1>
                <p className="text-darkgray md:pe-120">Focus: Interior decor, furniture, and productivity tools.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/OIXmQsjcmGTwkLFr7AvPXkZn0.jpeg?scale-down-to=1024&width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-xl md:pe-30 text-darkgray">Whether you are setting up a new remote office or giving your living room a makeover, 2026 is the year of <span className="font-bold">functional aesthetics.</span> At Naijazone, we've seen a massive shift toward locally manufactured furniture that rivals international brands.</span>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">1. The High Executive Chair</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        With more Nigerians embracing hybrid work, a chair that supports your back is no longer a luxury⎯it's a necessity. Look for our verified vendors offering ergonomic designs made with premium local textiles.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">2. Marble-Top Tables</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Add a touch of luxury to your dining area. Nigerian-sourced marble is world-class, and buying it through Naijazone ensures you're getting the best price directly from the source. 
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">3. Smart Home Electronics</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        From solar-powered inverters to keep your "Always On" lifestyle running to the latest LED smart TVs, our electronics section is curated for the modern Nigerian home. 
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">4. Statement Sofas (2-Seater & Royal Sets)</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Your home should tell a story. Our collection of sofas ranges from minimalist modern designs (starting at N230,000) to grand Royal sets for those who love a bit of a "Gidigba" in their decor.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">5. Musical Instruments</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        For the creators and the churches, Naijazone remains the top destination for studio recording equipment, drum sets, and keyboards.
                    </p>
                </div>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero