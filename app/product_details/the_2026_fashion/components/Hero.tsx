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
                <Image src={'https://framerusercontent.com/images/LIelpPWOXWU1j092falrVTAyK6A.jpeg?width=736&height=920'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Sophie Odunsi</p>
                    <p>Content Editor at Naijazone</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 25, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">The 2026 Fashion Trend: Tradition Meets Tech</h1>
                <p className="text-darkgray md:pe-120">Fashion, footwear, and accessories.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/lQEsZAIXxnaPIorwSdA1BuMhnY.jpeg?scale-down-to=1024&width=736&height=1111'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-xl md:pe-30 text-darkgray">Nigerian fashion is currently the "it" thing globally, and Naijazone is the bridge. This year, we are seeing a blend of traditional fabrics with modern, tech-forward silhouettes.</span>
                <div className="flex gap-3">
                    <p className='text-darkgray'>•</p>
                    <p className="text-darkgray"><span className='font-bold text-xl'>The Rise of the Flare Gown:</span> A staple for the modern Nigerian woman, available in vibrant prints that transition from office to "Owanbe."</p>
                </div>
                <p className="text-darkgray"></p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero