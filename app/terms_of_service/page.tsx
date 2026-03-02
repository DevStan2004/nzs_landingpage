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
                <p className="text-semimajorgreen font-semibold">Terms of Service</p>
            </div>
            <FlexCol className='items-start md:gap-20'>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    1.1 User Agreement <br />
                    Upon creating a Naijazone account, users agree to adhere to these terms, exercising responsible and lawful use of all services. This agreement binds users to interact fairly, comply with all platform regulations, and respect both the rights and experiences of other users.
                </span>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>1.2</span>Eligibility</p>
                        <p className="text-darkgray md:pe-60 text-xl">To ensure a secure platform, only individuals aged 18 and above are eligible to register on Naijazone. Sellers or service providers may need additional verification through valid ID documents like a Nigerian passport or National ID.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>1.3</span>Account Responsibility</p>
                        <p className="text-darkgray md:pe-60 text-xl">Users are responsible for keeping their account details private and updating their information regularly. Sharing accounts is discouraged; Naijazone is not liable for issues arising from shared access or negligence in securing login details.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>1.4</span>Service Availability</p>
                        <p className="text-darkgray md:pe-60 text-xl">Naijazone services are provided on an "as available" basis. Users may experience occasional service interruptions due to updates, maintenance, or unforeseen technical issues, with advance notifications given whenever possible.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>1.5</span>Prohibited Activities</p>
                        <p className="text-darkgray md:pe-60 text-xl">Users may not engage in false advertising, fraud, harassment, selling illegal goods/services, or infringing on intellectual property. Violations are subject to account suspension or termination.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>1.6</span>Termination and Suspension of Accounts</p>
                        <p className="text-darkgray md:pe-60 text-xl">Accounts may be suspended or terminated due to serious policy violations, fraudulent activities, or repeated reports of abusive behavior.</p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    2. Privacy Policy
                </span>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.1</span>Information Collection</p>
                        <p className="text-darkgray md:pe-60 text-xl">Naijazone collects personal data such as contact details, purchase history, browsing patterns, and cookies. Data helps improve services, enable targeted ads, and monitor user engagement.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.2</span>Data Usage</p>
                        <p className="text-darkgray md:pe-60 text-xl">Collected data is used to customize user experiences, enhance analytics, improve services, and comply with legal obligations. Naijazone does not misuse or sell user data without consent.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.3</span>Third-Party Sharing</p>
                        <p className="text-darkgray md:pe-60 text-xl">Data is shared with necessary partners, such as payment processors and logistics providers, under strict confidentiality agreements to maintain service standards.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.4</span>Data Security Measures</p>
                        <p className="text-darkgray md:pe-60 text-xl">Naijazone employs encryption, restricted access, and regular security checks to secure user data against breaches or unauthorized access.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.5</span>User Rights</p>
                        <p className="text-darkgray md:pe-60 text-xl">Users can request access, updates, or deletions of their data. Requests can be submitted via support channels and processed as per Nigerian data laws.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>2.6</span>Data Retention Policy</p>
                        <p className="text-darkgray md:pe-60 text-xl">User data is retained only as long as needed for operational purposes or legal compliance. Archives are securely stored, and redundant data is routinely deleted.</p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    3. Refund and Return Policy
                </span>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>3.1</span>Product Return Eligibility</p>
                        <p className="text-darkgray md:pe-60 text-xl">Products may be returned within seven days if defective, with items remaining unused and in their original packaging.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>3.2</span>Refund Eligibility</p>
                        <p className="text-darkgray md:pe-60 text-xl">Refunds are granted for canceled orders, returned items, or service cancellations based on fulfillment status.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>3.3</span>Refund Process</p>
                        <p className="text-darkgray md:pe-60 text-xl">Users can request a refund by submitting evidence (receipts, images) to customer support within a specified timeframe. Refunds are processed within 5–10 working days.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>3.4</span>Non-Refundable Items</p>
                        <p className="text-darkgray md:pe-60 text-xl">Certain products, such as digital content, perishables, or partially used services, are non-refundable.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold"><span className='font-normal'>3.5</span>Exchange Policy</p>
                        <p className="text-darkgray md:pe-60 text-xl">Exchanges are possible for eligible items if returned in original condition within the specified timeframe.</p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    4. Shipping and Delivery Policy
                </span>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">4.1</span> Shipping Options
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Naijazone offers standard and express delivery options across Nigeria, with estimated delivery timelines for each location.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">4.2</span> Shipping Fees
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Shipping fees vary by region, item weight, and delivery speed, with promotions on free shipping for specific items.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">4.3</span> Order Tracking
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users receive a tracking link after dispatch to monitor their delivery status online.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">4.4</span> Delivery Timeframes
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Delivery typically takes 3–7 days within Nigeria, depending on location, with possible delays due to weather or other unforeseen circumstances.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">4.5</span> Failed Delivery and Rescheduling
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            If delivery attempts fail, users can reschedule with additional charges where applicable.
                        </p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    5. Buyer Protection Policy
                </span>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">5.1</span> Buyer Assurance
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Naijazone implements quality control, secure payment systems, and guarantees to protect buyers from fraud and ensure satisfaction.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">5.2</span> Dispute Resolution Process
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Buyers can open a dispute by providing evidence of issues. Disputes are handled directly with sellers or through Naijazone mediation for faster resolution.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">5.3</span> Fraud and Scam Protection
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Security measures such as account verification and fraud detection tools safeguard users from scams and suspicious transactions.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">5.4</span> Compensation and Refunds
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Buyers may receive refunds for confirmed fraud or unresolved disputes due to seller non-compliance.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">5.5</span> Support Channels
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Buyers can contact Naijazone’s support team via phone, chat, or email for assistance with claims.
                        </p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    7. Service Provider Policy
                </span>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">7.1</span> Service Listing Guidelines
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Service listings must be accurate, clearly described, fairly priced, and comply with approved service category guidelines.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">7.2</span> Booking and Scheduling Standards
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Providers must clearly state policies for cancellations, rescheduling, service duration, and availability.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">7.3</span> Service Quality and Customer Satisfaction
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            High-quality service delivery and professional customer interaction are required. Repeated complaints may trigger review or suspension.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">7.4</span> Provider Fees and Commission Structure
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Service providers are subject to platform fees and commissions, which are clearly outlined in the provider dashboard.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">7.5</span> Insurance and Liability
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Providers must meet applicable legal liability requirements, with optional insurance recommended for high-risk services.
                        </p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    8. Community and Content Guidelines
                </span>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">8.1</span> Review and Feedback Rules
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Reviews and feedback must be honest, constructive, factual, and free from offensive or misleading language.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">8.2</span> Prohibited Content
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Content involving hate speech, explicit material, harassment, or false claims is strictly prohibited.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">8.3</span> Communication Etiquette
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users must communicate respectfully. Violations may result in warnings, content removal, or account suspension.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">8.4</span> Reporting Inappropriate Content
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users can report harmful or inappropriate content directly through the platform for review.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">8.5</span> Content Removal and Appeals
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users may appeal content removal decisions if they believe actions were taken in error.
                        </p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    9. Intellectual Property Policy
                </span>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">9.1</span> Copyright and Trademark Respect
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users must respect copyright, trademark, and intellectual property laws and avoid infringing on others’ rights.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">9.2</span> Reporting Infringements
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Intellectual property owners can report infringements using Naijazone’s reporting tools for prompt review.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">9.3</span> Content Ownership
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Naijazone reserves the right to modify or remove user-generated content to ensure policy compliance.
                        </p>
                    </div>
                </div>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    10. Security and Fraud Prevention Policy
                </span>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">10.1</span> Account Security Measures
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Users are encouraged to protect their accounts using strong passwords and two-factor authentication.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">10.2</span> Fraud Detection Tools
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Real-time monitoring, risk assessment, and automated detection systems are used to prevent fraud.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">10.3</span> Reporting Suspicious Activity
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Suspicious behavior can be reported through customer support, with prompt investigation and follow-up.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-darkgray md:pe-80 text-xl font-bold">
                            <span className="font-normal">10.4</span> Consequences for Fraudulent Activity
                        </p>
                        <p className="text-darkgray md:pe-60 text-xl">
                            Fraudulent users may face account suspension, restitution requirements, and potential legal action.
                        </p>
                    </div>
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default WhoWeAre