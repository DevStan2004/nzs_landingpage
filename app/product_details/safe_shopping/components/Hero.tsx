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
                <Image src={'https://framerusercontent.com/images/nxd9IOIf6OZ14Q8w0iKsykrm4.jpeg?scale-down-to=512&width=736&height=736'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Ajayi Abel</p>
                    <p>Brand Strategist at Naijazone</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 28, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">Safe Shopping 101: How to Avoid Scams and Buy with Confidence</h1>
                <p className="text-darkgray md:pe-120">Trust, security, and the Naijazone payment system.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/ncpYWqnXEKWohLVaxHsXden78Xc.jpeg?width=736&height=736'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-xl md:pe-30 text-darkgray">Online shopping in Nigeria has grown exponentially, but so has the sophistication of "What I ordered vs. What I got." At Naijazone, your peace of mind is our priority. Here is how we keep you safe in 2026.</span>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Look for the "Verified" Badge</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Every vendor on Naijazone undergoes a physical verification process. Our agents visit their workshops and offices to ensure they are real people with real products. If you don’t see the badge, ask why!
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Use Secure Payment Systems</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Never pay a vendor directly into a personal bank account outside the platform. Naijazone’s secure payment gateway holds your funds in escrow. This means the vendor only gets paid when the logistics system confirms you’ve received your order. 
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Real-Time Delivery Updates</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        One of the biggest anxieties of online shopping is the "black hole" between payment and delivery.
                    </p>
                    <div className="flex gap-3">
                        <p>•</p>
                        <p className="md:text-xl md:pe-30 text-darkgray">
                            <span className='font-bold'>Live Tracking:</span>
                            Our integrated logistics dashboard allows you to see your package move from the vendor to your doorstep.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <p>•</p>
                        <p className="md:text-xl md:pe-30 text-darkgray">
                            <span className='font-bold'>Direct Chat:</span>
                            Have a question about a product? Use our in-app chat to talk directly to the seller before you hit "buy."
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Design as Proof of Professionalism</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Trust isn’t only emotional — it’s logical too. A well-structured website that loads quickly, uses clear navigation, and feels seamless across devices tells people you care about their experience. It shows that your brand is serious, detail-oriented, and reliable.
                    </p>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        The opposite is also true: a broken link, slow site, or clunky checkout can break trust instantly. Good design reduces those risks and signals that you take your audience seriously.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Humanizing Your Brand</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Design also plays a role in making your brand feel approachable. Photography, illustrations, and tone of voice help humanize what might otherwise feel like a faceless company. Trust grows when people feel a connection — when your brand feels like it has personality and values, not just a sales pitch.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Trust Is Earned Every Time</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Building trust through design is never one-and-done. It’s reinforced with every ad, every site visit, every customer interaction. The more consistent and intentional you are, the stronger that trust becomes.
                    </p>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        The takeaway? Trust isn’t something you demand; it’s something you earn. And thoughtful design — clean, consistent, user-centered — is one of the most powerful ways to earn it.
                    </p>
                </div>
                <AnimatedButton text='Shop Now' justifyBetween='justify-center' border hover='bg-majorgreen hover:bg-semimajorgreen text-white rounded-full' />
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero