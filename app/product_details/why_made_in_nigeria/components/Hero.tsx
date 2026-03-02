"use client"
import React from 'react'
import AnimatedButton from '@/app/components/AnimatedButton'
import GlobalContainer from '@/app/components/GlobalContainer'
import { FolderOpen } from '@phosphor-icons/react'
import Image from 'next/image'
import ProductCard from '@/app/components/ProductCard'
import ThreeColGrid from '@/app/components/ThreeColGrid'
import why from '@/app/src/images/why.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
        <GlobalContainer className='pt-60 grid md:grid-cols-[4fr_8fr] pb-20 items-center'>
            <div className="flex flex-col gap-3 md:pe-20">
                <Image src={'https://framerusercontent.com/images/byDSkvO9eqJPOPcKCwNU0NxEDM.jpeg?scale-down-to=1024&width=736&height=1096'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Sophia Maduka</p>
                    <p>Brand Strategist at Naijazone</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 27, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Why "Made in Nigeria" is the Smartest Choice for Your Wallet in 2026</h1>
                <p className="text-darkgray md:pe-120">Economic empowerment, quality, assurance, and value for money.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image className='w-full md:h-[50rem] object-cover rounded-4xl' src={why} width={1000} height={1000} alt='' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-xl font-semibold md:pe-30 text-darkgray">In 2026, the global supply chain is more unpredictable than ever. Ebtween fluctuating exchange rates and rising shipping costs, smart shoppers are looking closer to home. But "Made in Nigeria" isn't just about saving money aymore⎯it's about superior quality and supporting the local "hustlers, makers, and movers.</span>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">The New Standard of Quality</span>
                    <p className="md:text-xl font-semibold md:pe-30 text-darkgray">
                        Gone are the days when local meant "low quality." At Naijazone, our decentralized <span className="font-bold">Agent Engagement & Verification Network</span> ensures tht every vendor on our platform is physically verified. When you buy a hand-crafted leather bag from Aba or a solid wood dining set from a Lagos artisan, you aren't just getting a product; you're getting a piece of Nigerian excellence that's built to last.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Why Shop Local on Nigazone?</span>
                    <div className="flex items-start gap-3">
                        <p className='text-darkgray'>•</p>
                        <p className="md:text-xl font-semibold md:pe-30 text-darkgray"><span className="font-bold">No Middlemen, No Stress:</span> We connect you directly to the producers. This means you get bulk prices without the "extra" added by three different wholesalers.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className='text-darkgray'>•</p>
                        <p className="md:text-xl font-semibold md:pe-30 text-darkgray"><span className="font-bold">Live Tracking:</span> In 2026, "I'm on my way" isn't enough. Our logistics system offers real-time monitoring so you know exactly where your package is.
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className='text-darkgray'>•</p>
                        <p className="md:text-xl font-semibold md:pe-30 text-darkgray"><span className="font-bold">Boosting the Naira:</span> Every kobo spent on a Nigerian-made product stays in our economy, helping local businesses scale and create jobs
                        </p>
                    </div>
                </div>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero