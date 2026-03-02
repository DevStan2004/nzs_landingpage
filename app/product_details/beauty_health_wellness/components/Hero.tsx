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
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Beauty, Health & Wellness</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">255</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Jul 18, 2025</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <div className="flex items-center gap-3">
                    <p className="text-semimajorgreen/80 text-sm">#Treatment & Glow</p>
                    <p className="text-semimajorgreen/80 text-sm">#Organic & Natural</p>
                </div>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Skincare and beauty products formulated specifically for our climate and skin types.</h1>
                <p className="text-darkgray md:pe-40">Cleansers, Toners, Vitamin C Serums, Moisturizers, and Sunscreen (SPF 50+). Brightening Lotions, Shea Butter Blends, Body Wahses, and Exfoliating Scrubs. Black Soap (Dudu Osun style), Raw Oils (Neem, Coconut, Argan), and Herbal Remedies. Anti-Acne Kits, Hyperpigmentation Serums, and Anti-Aging Creams.</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/5z5VskxwWl7lOtDfo8krwoi0FyU.jpeg?width=736&height=736'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Nigeria-made Bauty, Health & Wellness</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Access unadulterated, organic beauty products directly from the producers who understand Nigerian skin.</span>
                <p className="text-darkgray md:pe-30">We prioritize local brands that use indigenous ingredients like Shea Butter and Black Soap, alongsize verified international beauty standars. This category is for the Nigerian who values health and aesthetic excellence without compromising on safety.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/DR6adwQuZx4vNxic13Mlkv34lk.jpeg?width=736&height=956'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Beauty, Health & Wellness</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Buying skincre on unverified platforms can be dangerous for your health.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The Fail: Unscrupulous sellers "mix" organic creams with harsh, unlisted chemicals to give faster results.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Naijazone Fix: We prioritize vendors with NAFDAC registrations or those who pass our "Source Ingredient" veficiation, ensuring what you put on your skin is save.</span>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Escrow Payment:</span> Your money stays with us. The seller only gets paid after you confirm delivery.
                </p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/FZnac8toveXcbgqs6JS2qOmUWig.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/G3FP7GJOj3pJaMgg3TGUoEllKuA.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/Qw9gkEdCULCKqLu2R44GPUd1gw.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/kXD519BTojLQywx2fbqYuio4Wg.jpeg?width=736&height=1308'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/sHnsYHk8X0EbAe0Tywa9w07dBi8.jpeg?width=736&height=919'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl col-span-2' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">Why Sell Beauty, health & Wellness Products on Naja</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Beauty is a high-rotation category; our platform helps you manage frequent re-orders with ease.</span>
                <p className="text-darkgray md:pe-30">We prioritize local brands that use indigenous ingredients like Shea Butter and Black Soap, alongside verified international beauty standards. This category is for the Nigerian who values health and aesthetic excellence without compromising on safety.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <div className="flex items-start gap-2">
                <FolderOpen size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">DISCOVER MORE</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">What to check more? <br /> Discover our other projects.</span>
                <p className="text-darkgray md:pe-30">This is where craftsmanship meets utility. Our furniture is sourced from verified Nigerian artisans who use preimum hardwoods and high-graded textiles. From the sleek lines of a N470,000 High Executive Chair to the grandueor of a N2.2m Royal Chair Set, and every piece is a statement.</p>
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero