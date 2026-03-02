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
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Electronics & Power Solutions</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">52</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Mar 12, 2024</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <div className="flex items-center gap-3">
                    <p className="text-semimajorgreen/20 font-semibold">#hin-Chin & Peanuts</p>
                    <p className="text-semimajorgreen/20 font-semibold">#Smart TVs</p>
                </div>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Smart Nigerian tech and renewal energy solutions to keep your life and business "Always On."</h1>
                <p className="text-darkgray">Solar panels, inverters, and the latest smart gadgets for the tech-savy consumer</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/Dya6uGpPE1o4p2Sy70bKlnacXR4.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Nigerian-made Electrons & Power Solutions</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">In 2026, energy independence is key. naijazone focuses on verified solar solutions⎯alongside the latest smart home tech. We bridge the gap between high-tech needs and reliable local suppliers.</span>
                <p className="text-darkgray md:pe-30">Our secure escrow system protects your high-value investments in solar and electronics until the product is tested.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/7Wuw1s1BroGyoF5AOHyDIOhhk.jpeg?width=550&height=550'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Electronics & Power Solutions</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Many platforms are floded with "UK Used" items disguised as brand new.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The Fail: You pay for a new inverter only to find scratched son the casing and a battery that dies in two hours.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Naijazone Fix: We distinguish stricly between Brand New, Certified Refurbished, and Used. Sellers who mislable their products are permanently banned from the network.</span>
                <p className="text-darkgray md:pe-30">
                    In 2026, energy independence is key. Naijazone focuses on verified solar solutions⎯from 1kVA inverters to high-capacity lithium batteries⎯alongside the latest smart home tech. We bridge the gap between high-tech needs and reliable local suppliers.
                </p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/9JPXXQA1JWcv0tPDpA4w2mV6o.jpeg?width=736&height=980'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/wOrqRsxGq0lxUh7bHtODUsvf85w.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/mlnUpLhjUdJCkyj5sTB3qlQ3zI.jpeg?width=736&height=1322'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/Ec32NJysUE6bmQgvDv3Ag2xJejg.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/Hi74EIhI3NzZsiNDw7rLnXDLTDw.jpeg?width=640&height=640'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl col-span-2' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">Why Sell Electronics & Power Solutions on Naijazone</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Benefit from our analytics dashboard to see which regions are demanding durable power solutions and accessories the most.</span>
                <p className="text-darkgray md:pe-30">In 2026, energy independence is key. Naijazone focuses on verified solar solutions⎯from 1kVA inverters to high-capacity lithium batteries⎯alongside the latest smart home tech. We bridge the gap between high-tech needs and reliable local suppliers.</p>
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