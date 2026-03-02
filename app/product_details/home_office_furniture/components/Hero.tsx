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
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">Home & Office Furniture</p>
                <p className="text-darkgray">Duration</p>
                <p className="pb-3 border-b border-lightgray text-semimajorgreen">1850</p>
                <p className="text-darkgray">Date</p>
                <p className="pb-3 text-semimajorgreen">Aug 14, 2025</p>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Handcrafted furniture that blends local artistry with modern ergonomic standards</h1>
                <p className="text-darkgray">Luxury sofas, marble-top tables, and executive chairs built for comfort and status</p>
                <AnimatedButton text='Scroll to Explore' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <Image src={'https://framerusercontent.com/images/fPaJwt1QddTe1oMk68Dx3SN7B0.jpeg?width=690&height=964'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover' />
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">Naija-made Home and Office Furnitue</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Living Room Sets (2-seaters to Royal Sets), dining Tables, Office Desks, High Executire Chairs, Modern Sofa Designs and more...</span>
                <p className="text-darkgray md:pe-30">this is where craftsmanship meets utility. Our furniture is sourced from verified Nigerian artisans who use premium local hardwoods and high-grade textiles. From the sleek lines of a N470,000 High Executive chair to the grandeur of a N2.2m Royal Chair Set, every piece is a statement.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/KiRD9dwlH95XfCSAfnthdVITvho.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <p className="text-semimajorgreen font-semibold">How we fix issues with Home & Office Fuctniture</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">On other sites, a sofa might look like a royal throne but feel like a cardboard box.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">The Fail: Many sellers use cheap softwoods that wrp within months.</span>
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Naijazone Fix: We verify the materials. If a vendor says "Solid Teak" or "High-Density Foam," our local agents check the workshop to ensure they aren't using "garri" wood.</span>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Agent Verification:</span> Our agents physically inspect the vendor's actual workshop/stock before they are allowed to list.
                </p>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Escrow Payment:</span> Your money stays with us. The seller only gets paid after you confirm delivery.
                </p>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Real-Time GPS Tracking:</span> Our logistics dashboard shows you exactly where your item is on the map in 2026.
                </p>
                <p className="text-darkgray md:pe-30">
                    <span className="font-semibold">Testing Protocols:</span> High-value items are checked by our logistics hubs for basic functionality before the final leg of delivery.
                </p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
        <GlobalContainer className='grid grid-cols-2 gap-2 pb-20'>
            <Image src={'https://framerusercontent.com/images/8CIMoSXpfqXD4hAfb5tuc7Fk0.jpeg?width=736&height=1349'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/NtaZkQ5JaNk5Q3iDHitnCk3Z2S4.jpeg?width=736&height=929'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/AECzIgVrma597K2CbHuxUaxmdo.jpeg?width=736&height=981'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
            <Image src={'https://framerusercontent.com/images/e4GVnajk3u1njlugso0TZjRzy0c.jpeg?width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full h-full md:h-[35rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <p className="text-semimajorgreen font-semibold">why Sell Home & Office Furniture on Naijazone</p>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <span className="md:text-4xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px]">Scale your furniture workshop from a local street to a national brand with our logistics backing.</span>
                <p className="text-darkgray md:pe-30">This is where craftsmanship meets utility. Our furniture is sourced from verified Nigerian artisans who use preimum hardwoods and high-graded textiles. From the sleek lines of a N470,000 High Executive Chair to the grandueor of a N2.2m Royal Chair Set, and every piece is a statement.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20 border-b border-lightgray'>
            <div className="flex items-center gap-2">
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