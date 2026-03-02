"use client"
import AnimatedText from '@/app/components/AnimatedText'
import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { Note, UsersThreeIcon, X } from '@phosphor-icons/react'
import Link from 'next/link'
import AnimatedButton from '../components/AnimatedButton'
type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <GlobalContainer  className='pb-20 pt-80 bg-linkBg'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                <X size={25} className='text-black font-bold' />
                <p className="text-black font-bold">404</p>
            </div>
            <FlexCol className='items-start md:gap-20'>
                <h1 className="md:text-5xl text-4xl text-black font-bold pe-50">Well, this isn't where <span className='text-black/20'>you meant to go</span></h1>
                <Link href="/">
                    <AnimatedButton hover='bg-black rounded-full' text='Back to Home' className='text-white' />
                </Link>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default WhoWeAre