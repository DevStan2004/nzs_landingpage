"use client"
import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import Link from 'next/link'
import { CornerDownLeft } from 'lucide-react'
import FlexCol from './FlexCol'
import AnimatedButton from './AnimatedButton'
import { usePathname } from 'next/navigation'

type Props = {}

const Footer = (props: Props) => {
    const pathname = usePathname()
    const is404 = pathname === "/404"

    return (
        <FlexCol gap="gap-0">
            <GlobalContainer className="grid md:grid-cols-[4fr_8fr] grid-cols-1 bg-white py-20">
                {/* LEFT */}
                <div className="flex flex-col justify-between h-full pe-5">
                    <div className="flex flex-col">
                        <p className={`${is404 ? "text-black/50" : "text-semimajorgreen/50"} font-semibold`}>
                            Shop Nigeria-made Goods
                        </p>

                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="https://framerusercontent.com/images/dWPSauj1MLFIbPU6zB4xsi5FISo.png?scale-down-to=512&width=1387&height=1387"
                                width={1000}
                                height={1000}
                                alt="logo"
                                className={`${is404 ? "saturate-0" : "saturate-1"} w-15`}
                            />
                            <span
                                className={`md:text-6xl text-3xl font-bold flex relative ${
                                    is404 ? "text-black" : "text-semimajorgreen"
                                }`}
                            >
                                naijazone
                                <sup className="text-5xl absolute -right-8 -top-1">®</sup>
                            </span>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-10">
                        <p className="text-darkgray pe-10 md:text-md text-sm md:mt-0 mt-10">
                            Naijazone focuses on authentic Nigerian-made products and direct-from-source bulk pricing —
                            No Middlemen, No Stress.
                        </p>

                        <div className="w-full h-[1px] bg-lightgray" />

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <p className="text-majorgray">[ Email ]</p>
                                <p className="text-majorgray font-semibold">support@naijazone.com</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-majorgray">[ Phone ]</p>
                                <p className="text-majorgray font-semibold">+234 703 489 7950</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col md:gap-60 md:w-[90%] md:px-20 px-2 md:mt-0 mt-10 border-s border-lightgray">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <p className={`${is404 ? "text-black" : "text-semimajorgreen"} font-semibold text-lg`}>
                                Are you a vendor?
                            </p>
                            <p className="text-darkgray">
                                Join 5,000+ local manufacturers, artisans, and wholesalers who are scaling their business
                                with Naijazone.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10 md:mb-0 mb-10">
                            <div className="flex flex-col gap-5">
                                <input
                                    type="text"
                                    placeholder="your name..."
                                    className="py-3 border-b border-darkgray focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="your e-mail address..."
                                    className="py-3 border-b border-darkgray focus:outline-none"
                                />
                                <div className="flex items-center gap-3">
                                    <p className={`font-semibold ${is404 ? "text-black" : "text-majororange"}`}>
                                        Sign Up
                                    </p>
                                    <CornerDownLeft
                                        className={is404 ? "text-black" : "text-semimajorgreen"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="flex md:flex-row flex-col gap-5 justify-between">
                        {/* NAV */}
                        <div className="flex flex-col gap-2">
                            <p className="text-darkgray">Navigation</p>

                            {[
                                { href: "/", label: "Home" },
                                { href: "/our_story", label: "Our Story" },
                                { href: "/top_buys", label: "Top Buys", extra: "[6]" },
                                { href: "/spotlight", label: "SpotLight", extra: "[8]" },
                                { href: "/contact", label: "Contact" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`${is404 ? "text-black" : "text-semimajorgreen"} md:font-semibold flex items-center gap-2`}
                                >
                                    <AnimatedButton
                                        padding="p-0"
                                        textClassname="md:font-bold font-normal"
                                        text={item.label}
                                        border
                                        hover="bg-transparent"
                                    />
                                    {item.extra && <span className="text-majorgray">{item.extra}</span>}
                                </Link>
                            ))}
                        </div>

                        {/* SOCIAL */}
                        <div className="flex flex-col gap-2">
                            <p className="text-darkgray">Social</p>

                            {[
                                { href: "https://x.com/naijazone_", label: "Twitter" },
                                { href: "https://www.instagram.com/naijazone_", label: "Instagram" },
                                { href: "https://www.facebook.com/Naijazone1", label: "Facebook" },
                                { href: "https://www.linkedin.com/company/naijazone-online-shopping-mall/", label: "LinkedIn" },
                                { href: "https://www.youtube.com/@NaijaZoneOnline", label: "Youtube" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`${is404 ? "text-black" : "text-semimajorgreen"} md:font-semibold flex items-center gap-2`}
                                >
                                    <AnimatedButton
                                        padding="p-0"
                                        textClassname="md:font-bold font-normal"
                                        text={item.label}
                                        border
                                        hover="bg-transparent"
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* LEGAL */}
                        <div className="flex flex-col gap-2">
                            <p className="text-darkgray">Navigation</p>

                            {[
                                { href: "/terms_of_service", label: "Terms of Services" },
                                { href: "/policy", label: "Vendor Policy" },
                                { href: "", label: "Become an Agent" },
                                { href: "/404", label: "404" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`${is404 ? "text-black" : "text-semimajorgreen"} md:font-semibold flex items-center gap-2`}
                                >
                                    <AnimatedButton
                                        padding="p-0"
                                        textClassname="md:font-bold font-normal"
                                        text={item.label}
                                        border
                                        hover="bg-transparent"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </GlobalContainer>

            {/* BOTTOM BAR */}
            <div
                className={`flex md:flex-row flex-col md:items-center md:gap-30 gap-3 md:p-10 p-5 ${
                    is404 ? "bg-black" : "bg-semimajorgreen"
                } text-white`}
            >
                <p className="text-lg">© 2025 Naijazone. All rights reserved.</p>

                <div className="flex items-center gap-5">
                    <Image
                        src="https://framerusercontent.com/images/1qu1wFVmwrxTy0mB3jul4UHog8.png?width=889&height=890"
                        width={1000}
                        height={1000}
                        alt="vine"
                        className="w-10"
                    />
                    <p className="font-semibold">Created by Vintercorp.</p>
                </div>
            </div>
        </FlexCol>
    )
}

export default Footer