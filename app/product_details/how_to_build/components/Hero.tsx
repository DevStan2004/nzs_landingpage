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
                <Image src={'https://framerusercontent.com/images/x0NhF9tjpEwWXreON9PED5zudE.jpeg?scale-down-to=1024&width=736&height=1104'} width={1000} height={1000} alt='image' className='w-15 h-15 object-cover rounded-lg' />
                <div className="flex flex-col text-semimajorgreen">
                    <p className="text-lg font-semibold">Eseohe Gabriel</p>
                    <p>Brand Designer at Noora</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-5 items-start">
                <p className="text-lg text-semimajorgreen">Jul 26, 2025</p>
                <h1 className="md:text-7xl text-3xl font-semibold md:pe-30 text-semimajorgreen -tracking-[2px] md:-tracking-[5px]">How to Build Trust Through Digital Design</h1>
                <p className="text-darkgray md:pe-120">A brand can look stylish, but without trust, it won'd win customers. Here's how design builds credibility and makes people feel confident choosing you.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <Image src={'https://framerusercontent.com/images/j84N1kQy1cp0dunCW8Hfo9qwFEQ.png?width=1015&height=1148'} width={1000} height={1000} alt='image' className='w-full md:h-[50rem] object-cover rounded-3xl' />
        </GlobalContainer>
        <GlobalContainer className=' grid md:grid-cols-[4fr_8fr] py-20'>
            <div className="flex flex-col md:col-start-2 md:gap-10 gap-5 items-start">
                <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Trust is the Foundation of Every Brand</span>
                <span className="md:text-xl md:pe-30 text-darkgray">People don't buy from brands they don't trust. you can have the best product, the smartest strategy, or the most beautiful website ⎯ but if your audience doesn't feel safe putting their money, time, or attention in your hands, you won'd win them. That's why design is more than aesthetics. It's the silent tool that shapes perception, builds trust, and turns curiosity into commitment.</span>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">1. The High Executive Chair</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        With more Nigerians embracing hybrid work, a chair that supports your back is no longer a luxury⎯it's a necessity. Look for our verified vendors offering ergonomic designs made with premium local textiles.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">First Impressions Happen in Seconds</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Studies show it takes less than a second for people to form an opinion about your website. In that moment they decide dwhether you look professional, credible, and worth engaging with. Outdated visuals, cluttered layouts, or inconsistent branding all create doubt. A clean, well-designed interface, on the other hand, instantly communicates reliability and care. 
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-4xl font-semibold text-semimajorgreen text-3xl">Consistency Builds Confidence</span>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        One of the easiest ways to lose trust is inconsistency. If your social media looks modern but your website feels outdated, or if your product packaging doesn't align with your advertising, customers notice. These gaps make your brand feel unorganized, even if your product is great.
                    </p>
                    <p className="md:text-xl md:pe-30 text-darkgray">
                        Consistency across all touchpoints creates familiarity. And familiarity creates confidence. When people know what to expect from you, they're more likely to believe in your brand and return for more.
                    </p>
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