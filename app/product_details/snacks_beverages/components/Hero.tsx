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
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Snacks & Beverages</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">1301</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Nov 22, 2024</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <div className="flex items-center gap-3">
                    <p className="text-semimajorgreen/20 font-semibold">#hin-Chin & Peanuts</p>
                </div>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Fueling the hustle with authentic Nigerian flavors and refreshing local blends.</h1>
                <p className="text-darkgray">From crunchy Chin-Chin to premium Zobo concentrates, get export-quality snacks for home, office, or "Owanbe."</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/T7ADBWoaOswwQFwu8RiIflrFdY.jpeg?width=720&height=1080'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Nigeria-made Snacks & Beverages</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">This category elevates the "street snack" to a premium experience. We partner with hygienic, verified local producers who package Nigeria's favorite treats. Whether you need small packs for school lunchboxes or bulk jars for your office pantry, our snacks are made with fresh ingredients and zero harmful preservatives</span>
                <p className="text-darkgray md:pe-30">You get snacks that are fresher than what you find on supermarket shelves, sourced directly from the kitchens and factories that make them.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/YuV6qp7gYFaQKLb2rLa5AYkjKI.jpeg?width=736&height=736'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Snacks & Beverages</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Fresh-Batch Policy: Our snack vendors list their production dates. We prioritize "Made-to-Order" for bulk snack requests.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">"In the physical market, you have to be 'eye-service' smart to get the best deal. On Naijazone, we've hired the smartest market women and agriculture experts as our <span className='font-bold'>Verification Agents</span> to do that 'eye-service' for you. If it isn't good enough for our table, it isn't good enough for yours."</span>
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/Kyftzy9NoKoH9Z8UpgJrHi8FNQ.jpeg?width=736&height=736'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/1G6EtgLEah5aHjJeA9Qq6QvEo.jpeg?width=736&height=1308'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/MZNASX8f4NcpJ2sM08d2XIz0gU.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/atwyMnF5vXnJUZrE5iKVzImyN4.jpeg?width=720&height=1117'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/HSEPrMqh2WhMlZD2aeQbApmZxmw.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl col-span-2' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">Why Sell Snacks & Beverages on Naijazone</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Scale your catering or snack business from a neighborhood favorite to a national brand with our delivery infrastructure.</span>
                <p className="text-darkgray md:pe-30">Most snacks are produced in small batches to ensure freshness. Make sure the "Best Before" dates clearly listed are every product page in your inventory.</p>
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