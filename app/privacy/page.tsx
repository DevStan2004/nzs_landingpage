"use client"
import AnimatedText from '@/app/components/AnimatedText'
import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { Note, UsersThreeIcon } from '@phosphor-icons/react'
type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <GlobalContainer  className='pb-20 pt-80 bg-linkBg'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                <Note size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Privacy</p>
            </div>
            <FlexCol className='items-start md:gap-20'>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    Our mission is simple but powerful: <br />
                    To give every Nigerian business — from local manufacturers to emerging retailers — the
                    digital visibility, order management, and delivery network needed to grow sustainably
                    and confidently.
                </span>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-60 text-xl font-bold">Naijazone is Nigeria’s first digital business ecosystem, built to connect verified local producers
                        and sellers with bulk buyers, distributors, service seekers, and logistics providers across the
                        country.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="md:text-4xl text-3xl font-semibold text-semimajorgreen">
                            Categories of Vendors on Naijazone
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Naijazone accommodates a wide range of Nigerian producers, wholesalers, and service-based
                            vendors. Below is a detailed breakdown of supported vendor categories:
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧺 Food & Beverage Producers  
                            <span className="font-normal">
                                Packaged foods, snacks, drinks, spices, condiments, frozen foods, bottled water, and related consumables.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            👗 Fashion & Textile Producers  
                            <span className="font-normal">
                                Clothing brands, fabric makers, tailors, leather goods manufacturers, footwear, and fashion accessories.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            💄 Cosmetics & Beauty Brands  
                            <span className="font-normal">
                                Skincare products, hair care lines, makeup brands, and organic or natural beauty item producers.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🏡 Furniture & Home Goods Makers  
                            <span className="font-normal">
                                Furniture manufacturers, interior décor brands, home accessories, and design material suppliers.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🌾 Agricultural Producers  
                            <span className="font-normal">
                                Farmers, agro-processors, raw material suppliers, and exporters of agricultural commodities.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧼 Cleaning & Industrial Chemical Producers  
                            <span className="font-normal">
                                Manufacturers of soaps, detergents, sanitizers, disinfectants, and industrial cleaning solutions.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🏗️ Construction & Material Suppliers  
                            <span className="font-normal">
                                Vendors of building materials, paints, tools, fittings, and industrial equipment.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧴 Health & Wellness Producers  
                            <span className="font-normal">
                                Herbal medicine brands, supplements, hygiene product manufacturers, and wellness-focused businesses.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            📦 Wholesale Distributors  
                            <span className="font-normal">
                                Businesses selling bulk quantities of locally made goods to retailers, resellers, or institutions.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🚚 Logistics & Delivery Partners  
                            <span className="font-normal">
                                Delivery companies, dispatch riders, haulage providers, and logistics partners supporting sellers.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🏪 Retail Vendors / Resellers  
                            <span className="font-normal">
                                Businesses that purchase Nigerian-made products for resale, both online and offline.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧰 Craft & Artisan Vendors  
                            <span className="font-normal">
                                Handmade product creators including pottery, jewelry, artwork, sculpture, décor, and traditional crafts.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧾 Service Providers  
                            <span className="font-normal">
                                Repair services, packaging suppliers, print shops, branding agencies, event vendors, and support services.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="md:text-4xl text-3xl font-semibold text-semimajorgreen">
                            Vendor Types & Key Advantages
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Naijazone supports a diverse range of vendors across Nigeria. Below are the key advantages
                            available to each vendor type on the platform:
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Food & Beverage Producers  
                            <span className="font-normal">
                                Access nationwide restaurant, event, and retail buyers. Verified logistics ensure safe,
                                cold-chain delivery and reliable fulfillment.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Fashion & Textile Producers  
                            <span className="font-normal">
                                Showcase collections to bulk buyers and boutiques while managing wholesale orders
                                efficiently through a centralized dashboard.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Cosmetics & Beauty Brands  
                            <span className="font-normal">
                                Gain visibility among beauty retailers and spas with secure, structured payments
                                handled via the Naijazone wallet.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Furniture & Home Goods Makers  
                            <span className="font-normal">
                                Receive direct requests from hotels, developers, and interior designers while tracking
                                nationwide deliveries in real time.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Agricultural Producers  
                            <span className="font-normal">
                                Connect directly with exporters and large-scale distributors using streamlined
                                logistics and transparent transaction tracking.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Cleaning & Industrial Chemical Producers  
                            <span className="font-normal">
                                Supply bulk orders to hospitals, hotels, and institutions with consistent demand
                                driven by verified buyers.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Construction & Material Suppliers  
                            <span className="font-normal">
                                Increase visibility among contractors and estate developers while managing invoicing,
                                dispatch, and order history digitally.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Health & Wellness Producers  
                            <span className="font-normal">
                                Build trust with health-conscious buyers and retail outlets through compliance checks,
                                verification, and platform credibility.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Wholesale Distributors  
                            <span className="font-normal">
                                Digitally manage inventory, automate transactions, and expand distribution reach
                                across Nigeria.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Retail Vendors / Resellers  
                            <span className="font-normal">
                                Restock easily from verified Nigerian producers while enjoying competitive pricing,
                                bulk discounts, and delivery integration.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Logistics & Delivery Partners  
                            <span className="font-normal">
                                Secure steady delivery contracts from platform vendors and integrate delivery systems
                                for real-time tracking.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Craft & Artisan Vendors  
                            <span className="font-normal">
                                Get discovered by collectors, lifestyle stores, and decorators seeking authentic
                                Nigerian handmade products.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Service Providers  
                            <span className="font-normal">
                                List services such as branding, packaging, repair, and logistics support for instant
                                visibility among thousands of active businesses.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="md:text-4xl text-3xl font-semibold text-semimajorgreen">
                            Step-by-Step Vendor Onboarding Guide
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Follow these simple steps to get started on Naijazone:
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🧭 Step 1: Visit the Platform  
                            <span className="font-normal">
                                Go to NaijazoneOnline.com on your mobile or computer browser.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            📝 Step 2: Click “Sign Up”  
                            <span className="font-normal">
                                Provide your personal information and confirm the verification code sent to you.
                                Select “Sell / Provide Services” to begin vendor registration.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🏷️ Step 3: Create Your Account  
                            <span className="font-normal">
                                Fill in your business name, contact details, CAC registration (if available),
                                and a short description of your business.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🛍️ Step 4: Set Up Your Product Listings  
                            <span className="font-normal">
                                Upload clear product or service images, detailed descriptions, and price ranges
                                to attract buyers.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            💳 Step 5: Add Your Business Bank Details  
                            <span className="font-normal">
                                This enables seamless payments directly to your account after successful sales.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            ✅ Step 6: Pay Verification Token (₦5,000)  
                            <span className="font-normal">
                                This one-time fee verifies your business, grants a Trusted Vendor badge,
                                and boosts your listing visibility.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            📦 Step 7: Go Live  
                            <span className="font-normal">
                                After verification, your products or services become visible to thousands of buyers
                                and institutions browsing daily.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🕓 Step 8: Start Receiving Orders  
                            <span className="font-normal">
                                Buyers can message you directly, negotiate pricing, and place secure orders
                                through the platform.
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="md:text-3xl text-2xl font-semibold text-semimajorgreen">
                            Commission per Sale
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl">
                            Naijazone operates a transparent <span className="font-bold">7% commission</span> per successful sale.
                            This covers payment processing, buyer protection, platform visibility, marketing,
                            and delivery coordination support.
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            Vendors earn 93% of their total sales value, automatically credited to the Naijazone
                            wallet after each transaction.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="md:text-3xl text-2xl font-semibold text-semimajorgreen">
                            Verification Token — ₦5,000
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl">
                            Every vendor pays a one-time ₦5,000 verification token during onboarding.
                            This grants access to the following benefits:
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            ● Verified Vendor Badge ✅  
                            ● Priority listing in your category  
                            ● Access to exclusive vendor training webinars  
                            ● Free promotion during featured vendor campaigns
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl">
                            This verification ensures only genuine and reliable businesses operate on Naijazone,
                            building trust for buyers nationwide.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="md:text-3xl text-2xl font-semibold text-semimajorgreen">
                            Sales Guarantee
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl">
                            Naijazone provides a minimum exposure guarantee for every verified vendor:
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            ● Weekly exposure to hundreds of verified buyers  
                            ● Visibility across search results, category pages, and campaigns  
                            ● Secure escrow-based payments with fraud protection
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl">
                            With consistent activity and responsiveness, vendors typically see measurable engagement
                            within 2–4 weeks of onboarding.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="md:text-3xl text-2xl font-semibold text-semimajorgreen">
                            Strategic Partnerships
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🏦 Banking Partners  
                            <span className="font-normal">
                                Secure payouts, digital wallet management, and access to vendor-friendly funding programs.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            🚚 Logistics Partners  
                            <span className="font-normal">
                                National and regional delivery services with integrated real-time tracking APIs.
                            </span>
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            📦 Packaging & Supply Partners  
                            <span className="font-normal">
                                Discounts on quality packaging materials, branding supplies, and optional
                                “Made in Nigeria” co-branding.
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="md:text-3xl text-2xl font-semibold text-semimajorgreen">
                            🌍 Summary: Why Join Naijazone Today
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-bold">
                            ✅ Reach verified Nigerian and institutional buyers nationwide  
                            ✅ Secure transactions and reliable delivery  
                            ✅ Only 7% commission per sale  
                            ✅ One-time ₦5,000 Verified Vendor Badge  
                            ✅ Growth visibility within 3 months  
                            ✅ Trusted banking, logistics, and packaging partners  
                            ✅ Safe escrow-based payment with instant wallet credit
                        </p>

                        <p className="text-darkgray md:pe-60 text-xl font-semibold">
                            Naijazone — Made in Nigeria, Made for You.
                        </p>
                    </div>
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default WhoWeAre