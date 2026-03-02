'use client'

import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const images = [
  'https://framerusercontent.com/images/0MXQHz9pmxd1yPpeA8rBBSL4Fi4.jpeg?width=736&height=920',
  'https://framerusercontent.com/images/ZHomvc9cni1AWNl6aJTIpsKJeIU.png?scale-down-to=2048&width=4608&height=2592',
  'https://framerusercontent.com/images/9ufvVHCrybhH6rpMLs50MKSg44.jpg?scale-down-to=2048&width=4022&height=3218',
  'https://framerusercontent.com/images/0MXQHz9pmxd1yPpeA8rBBSL4Fi4.jpeg?width=736&height=920',
  'https://framerusercontent.com/images/ZHomvc9cni1AWNl6aJTIpsKJeIU.png?scale-down-to=2048&width=4608&height=2592',
  'https://framerusercontent.com/images/9ufvVHCrybhH6rpMLs50MKSg44.jpg?scale-down-to=2048&width=4022&height=3218',
]

const GAP_PX = 4 // gap-1 = 4px

const TheFuture = () => {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(0)

  const trackRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const maxIndex = images.length - 1

  // Measure ONE image width + gap
  useEffect(() => {
    const measure = () => {
      if (itemRef.current) {
        const width = itemRef.current.offsetWidth
        setStep(width + GAP_PX)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const next = () => {
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1))
  }

  const prev = () => {
    setIndex((prev) => (prev === 0 ? prev : prev - 1))
  }

  return (
    <>
      {/* TEXT SECTION */}
      <GlobalContainer className="py-20">
        <JustifyBetween className="items-start relative z-2 md:flex-row flex-col gap-5">
          <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
            <MessageCircle size={25} className="text-semimajorgreen" />
            <p className="text-semimajorgreen font-bold">The Future</p>
          </div>

          <FlexCol className="items-start gap-10">
            <span className="text-2xl md:text-5xl md:pe-28 font-semibold text-semimajorgreen italic tracking-[-2px]">
              We envision a future where Nigerian-made products aren't just the
              "patriotic choice," but the logical choice for quality, durability,
              and value.
            </span>

            <div className="flex md:flex-row flex-col items-end justify-between">
              <p className="text-darkgray md:pe-28 md:text-lg font-semibold">
                What makes us truly different? We don't just take a vendor's
                word for it. We pioneered the Decentralized Agent Engagement &
                Verification Network.
              </p>

              {/* CONTROLS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl text-white bg-majorgray flex justify-center items-center"
                >
                  <ChevronLeft strokeWidth={1} size={25} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl text-white bg-majorgray flex justify-center items-center"
                >
                  <ChevronRight strokeWidth={1} size={25} />
                </button>
              </div>
            </div>
          </FlexCol>
        </JustifyBetween>
      </GlobalContainer>

      {/* CAROUSEL */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-1 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * step}px)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={i === 0 ? itemRef : null}
              className="flex-shrink-0"
            >
              <Image
                src={src}
                width={1000}
                height={1000}
                alt="image"
                className="w-full h-70 md:h-140 rounded-4xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TheFuture