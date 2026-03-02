"use client"
import React, { ReactNode } from 'react'
import GlobalContainer from '../components/GlobalContainer'
import ThreeColGrid from '../components/ThreeColGrid'
import ProductCard from '../components/ProductCard'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {children: ReactNode}

const layout = ({children}: Props) => {
    const pathname = usePathname()
  return (
    <div className='bg-linkBg'>
        {children}
        <GlobalContainer className={`pb-20 ${pathname === "home_office_essentials" || pathname === "why_made_in_nigeria" ? "hidden" : "block"}`}>
            <ThreeColGrid>
                <Link href={"/product_details/beauty_health_wellness"}>
                    <ProductCard className='first product-animate' src='https://framerusercontent.com/images/5z5VskxwWl7lOtDfo8krwoi0FyU.jpeg?scale-down-to=512&width=736&height=736' buttons button1Text='Treatment & Glow' button2Text='Organic & Natural' title='Beauty, Health & Wellness' description='Skincare and beauty products formulated specifically for our climate adn skin types.' height={3} buttonAmount={2} />
                </Link>
                <Link href={"/product_details/fashion_ready_to_wear"}>
                    <ProductCard className='second product-animate' src={'https://framerusercontent.com/images/wx9cIiFvA3R2uziMHdpMnBs3Y8.jpeg?width=736&height=879'} buttons button1Text='Smart TVs' button2Text='Corporate & Office' title='Fashion & Ready-to-Wear' description='Top Notch Nigerian-made fashion items.' height={3} buttonAmount={2} />
                </Link>
                <Link href={pathname.includes("/electronics_power_solutions") ? "/product_details/electronics_power_solutions" : "/product_details/footwear_premium_leather_goods"}>
                    <ProductCard className='third product-animate'
                        src={pathname.includes("/electronics_power_solutions") ? "https://framerusercontent.com/images/fPaJwt1QddTe1oMk68Dx3SN7B0.jpeg?width=690&height=964" :'https://framerusercontent.com/images/vrIMXQp9uN9rWzCcEOit3VRjJ0.jpeg?width=498&height=595'} 
                        title="Footwear & Premium Leather Goods"
                        description="Durable, stylish footwear crafted by Nigeria's finest leatherworkers."
                        height={3}
                    />
                </Link>
            </ThreeColGrid>
        </GlobalContainer>
    </div>
  )
}

export default layout
