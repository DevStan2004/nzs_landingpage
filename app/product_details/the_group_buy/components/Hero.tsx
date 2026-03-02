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
                <Image src={'https://framerusercontent.com/images/h3Xt4O2y9wcSYR6AbMQB6K2DDoY.jpeg?scale-down-to=1024&width=736&height=1177'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Gertrude Olufuminlayo</p>
                    <p>Brand Strategist at Naijazone</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 23, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">The "Group Buy" Strategy: How Smart Families are Beating Inflation in 2026</h1>
                <p className="text-darkgray md:pe-120">Cost-saving, community shopping, and bulk grocery logistics.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/dVJeeu3FnoOaGCJO4fhW4rCnmT4.jpeg?width=736&height=1105'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-xl md:pe-30 text-darkgray">In 2026, "economies of scale" isn't just a term for CEOs⎯it's the survival strategy for the Nigerian household. With the cost of food staples fluctuating, the smartest way to shop on Naijazone isn't alone; it's together.</span>
                <div className="flex flex-col gap-5">
                    <p className="text-semimajorgreen md:text-4xl text-3xl font-semibold">What is a "Group Buy"?</p>
                    <p className="text-darkgray">Instead of buying one 5kg bag of rice at a retail price, the Group Buy strategy involves pooling funds with neighbors, colleagues, or family members to purchase <span className="font-bold">Wholesale Cluster.</span> By buying directly from the millers in Kebbi or the farmers in benue through Naijazone, you bypass three layers of middlemen.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-semimajorgreen md:text-4xl text-3xl font-semibold">The Math of Saving</p>
                    <div className="flex flex-col">
                        <p className="text-darkgray">Let's look at a typical monthly pantry haul for three families:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-left text-darkgray">Item</th>
                                    <th className="text-left text-darkgray">Individual Retail Price</th>
                                    <th className="text-left text-darkgray">Naijazone Bulk Price (Group of 3)</th>
                                    <th className="text-left text-darkgray">Total Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-left text-darkgray">Rice (50kg Bag)</th>
                                    <td className="text-left text-darkgray">₦85,000</td>
                                    <td className="text-left text-darkgray">₦72,000</td>
                                    <td className="text-left text-darkgray">₦13,000</td>
                                </tr>
                                <tr>
                                    <th className="text-left text-darkgray">Palm Oil (25L)</th>
                                    <td className="text-left text-darkgray">₦35,000</td>
                                    <td className="text-left text-darkgray">₦28,500</td>
                                    <td className="text-left text-darkgray">₦6,500</td>
                                </tr>
                                <tr>
                                    <th className="text-left text-darkgray">Large Yam Tubers (Pack of 10)</th>
                                    <td className="text-left text-darkgray">₦25,000</td>
                                    <td className="text-left text-darkgray">₦19,000</td>
                                    <td className="text-left text-darkgray">₦6,000</td>
                                </tr>
                                <tr>
                                    <th className="text-left text-darkgray">Total</th>
                                    <th className="text-left text-darkgray">₦145,000</th>
                                    <th className="text-left text-darkgray">₦119,500</th>
                                    <th className="text-left text-darkgray">₦25,500</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-semimajorgreen md:text-4xl text-3xl font-semibold">How Naijazone Makes it Easy</p>
                    <p className="text-darkgray md:text-xl">1. <span className="font-bold">Direct-to-Source:</span> We connect you to the actual producers, not "resellers."</p>
                    <p className="text-darkgray md:text-xl">2. <span className="font-bold">Split Delivery</span> Our logistics partners can handle "multi-drop" deliveries, making it easier to share the load without moving heavy bags across town yourself.</p>
                    <p className="text-darkgray md:text-xl">3. <span className="font-bold">Verified Weights:</span> No more "half-bags" disguised as full ones. Our agents ensure every wholesale order meets the exact weight listed.</p>
                </div>
                <p className="text-darkgray md:text-xl"><span className="font-bold">The takeaway:</span> Don't shop hard; shop smart. Start a "Buying Club" today and let Naijazone handle the heavy lifting.</p>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero