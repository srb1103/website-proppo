'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// icons
import homestay from '../public/icons/homestay.png'
import hotel_managers from '../public/icons/hotel_managers.png'
import hotel_owners from '../public/icons/hotel_owners.png'
import vacation_rentals from '../public/icons/vacation_rentals.png'
import affordable from '../public/icons/affordable.png'
import all_in_one from '../public/icons/all_in_one.png'
import booking_engine from '../public/icons/booking_engine.png'
import channel_manager from '../public/icons/channel_manager.png'
import pms from '../public/icons/pms.png'
import profits from '../public/icons/profits.png'
import qr_menu from '../public/icons/qr_menu.png'
import sync from '../public/icons/sync.png'
import virtual_inventory from '../public/icons/virtual_inventory.png'
import web_checkin from '../public/icons/web_checkin.png'
import kitchen_management from '../public/icons/kitchen_management.png'
import payment_gateway from '../public/icons/payment_gateway.png'
import { BedDouble, Truck, Bell, Shield, Building2, CheckCircle2, ChevronRight } from 'lucide-react'

// images
import wdpd from '../public/images/wdpd.png'
import { useRouter } from "next/navigation"
import Button from "./Button"
import { useBookCallForm, useSignUpForm } from "@/hooks/useForm"
import member_image from '../public/images/member.png'
import app_store from '../public/images/app_store.png'  
import google_play_store from '../public/images/google_play_store.webp'  

// Animation variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const bounceIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, type: 'spring', stiffness: 120, damping: 10 } }
}

export default function WhoIsProppoFor() {
  const who_is_data = [
    { name: 'Hotel Owners', text: "Stop running your hotel like it’s 1998.", image: hotel_owners },
    { name: 'Hotel Managers', text: "Because you deserve fewer fires to put out.", image: hotel_managers },
    { name: 'Vacation Rental Owners', text: "Finally, an app that gets you.", image: vacation_rentals },
    { name: 'Homestay Owners', text: "More listings, less legwork.", image: homestay },
  ]

  return (
    <div className="min-h-screen py-16">
      <motion.div
        className="flex items-center flex-col text-center gap-2 mt-12 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Who is <span className="bl_un">Proppo</span> for?
        </h1>
        <p className='text-xs text-center md:text-left md:text-xl text-gray-800/80 italic mt-2 bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white'>
          If you’ve ever cursed at an Excel sheet at 2 AM 😤📊🌙, we made this for you. 🙌
        </p>
      </motion.div>
      <div className="relative w-[90%] md:w-[80%] mx-auto mt-8 md:mt-12">
        {who_is_data.map((data, index) => {
          const { name, text, image } = data
          return (
            <motion.div
              key={index}
              className="stack_div sticky rounded-[10vh] min-h-[45vh] md:min-h-[50vh] p-4 py-8 md:py-4 mb-4 md:mb-8"
            >
              <motion.div
                className="flex items-center justify-center md:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
              >
                <Image alt={name} src={image} height={200} width={200} className="h-[12vh] md:h-[20vh] w-auto object-contain" />
              </motion.div>
              <div className="p-0 md:p-4 flex items-center md:items-start flex-col justify-center text-center md:text-left">
                <h2 className="font-semibold text-3xl lg:text-5xl mb-2">{name}</h2>
                <p className="lg:text-2xl italic max-w-[70%]">{text}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export function HowDoesProppoWork() {

  return (
    <div className="py-16 md:mt-0 pb-0">
      <motion.div
        className="flex items-center flex-col text-center gap-2 mt-12 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          How does <span className="bl_un">Proppo</span> work?
        </h1>
        {/* <p className='text-xs text-center md:text-left md:text-xl text-gray-800/80 italic mt-2 bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white'>
          If you’ve ever cursed at an Excel sheet at 2 AM 😤📊🌙, we made this for you. 🙌
        </p> */}
      </motion.div>
      <div className="relative w-[90%] md:w-[70%] mx-auto mt-8 md:mt-12 overflow-hidden rounded-2xl h-[30vh] md:h-[36vh] lg:h-[68vh] border border-[#6840ff]">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dqbUpg-Qhqs?si=fuMLWt3RQ_VFZXW1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}


export function WhatDoesProppoDo() {
  const wdpd_data = [
    {
      name: "PMS Dashboard",
      text: "Live overview of bookings, revenue, occupancy, and staff — all in one place.",
      image: pms,
      sub_text: "Your entire property at a glance, any time of day."
    },
    {
      name: "Channel Manager",
      text: "Keeps all your OTAs synced in real-time — rates, availability, and bookings.",
      sub_text: "(No more copy-paste marathons.)",
      image: channel_manager
    },
    {
      name: 'Booking Engine',
      text: "Let guests book directly on your site — no commission, no hassle.",
      image: booking_engine,
      sub_text: "More bookings, more control, more profits."
    },
    {
      name: 'QR Menu & Kitchen Orders',
      text: "Guests scan and order from their phone. Orders route instantly to the kitchen with KOT printing.",
      image: qr_menu,
      sub_text: "(No more 'two chai to 204' calls at midnight.)"
    },
    {
      name: 'Kitchen Management',
      text: "Live order queue, KOT printing, and a dedicated kitchen dashboard for your F&B team.",
      image: kitchen_management,
      sub_text: "Every order tracked from tap to table."
    },
    {
      name: 'Web Check-in',
      text: "Guests check in before arrival — no front-desk waiting.",
      image: web_checkin,
      sub_text: "(Goodbye queues, hello smooth arrivals.)"
    },
    {
      name: 'Housekeeping',
      icon: BedDouble,
      text: "Room status board, cleaning task assignments, and real-time status updates for your team.",
      sub_text: "No more walkie-talkie chaos between floors."
    },
    {
      name: 'Vendor Management',
      icon: Truck,
      text: "Track suppliers, log purchases by category, and keep your inventory costs in check.",
      sub_text: "Every vendor, every bill — in one place."
    },
    {
      name: 'Finance & Reports',
      image: payment_gateway,
      text: "Revenue reports, payment tracking, and accounting records built for ADMIN and Finance roles.",
      sub_text: "Month-end without the migraine."
    },
    {
      name: 'Virtual Inventory',
      text: "Sell full villas or single rooms — manage everything from one place.",
      image: virtual_inventory,
      sub_text: "More flexibility, fewer restrictions."
    }
  ]

  return (
    <div className="py-8 md:py-16 wdpd" id="features">
      <motion.div
        className="flex items-center flex-col text-center gap-2 mt-8 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          What does <span className="bl_un">Proppo</span> do?
        </h1>
      </motion.div>
      <div className="relative w-[90%] md:w-[80%] mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {wdpd_data.map((item, index) => {
          const { name, text, sub_text, image, icon: Icon } = item
          return (
            <motion.div
              key={index}
              className="transition duration-300 p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-black/90 shadow-lg shadow-[#6840ff]/5 border border-gray-200/50 dark:border-gray-800/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="flex items-center justify-between bg-blue-900/5 rounded-2xl p-4 w-fit mb-4">
                {image
                  ? <Image src={image} alt={name} height={500} width={500} className="h-8 md:h-10 w-auto" />
                  : <Icon className="h-8 md:h-10 w-8 md:w-10 text-[#6840ff]" />
                }
              </div>
              <div className="mt-2">
                <h2 className="font-medium text-xl md:text-2xl">{name}</h2>
                <p className="opacity-80 my-1 text-sm">{text}</p>
                <p className="italic opacity-60 text-xs md:text-sm">{sub_text}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export function WhyChooseProppo() {
  const why_choose_proppo = [
    { name: 'All-in-one', text: "Stop juggling 6 logins and 9 spreadsheets.", image: all_in_one },
    { name: 'OTA Zen', text: "Sync your rates everywhere at once. (Namaste.)", image: sync },
    { name: 'More Bookings, Less Commission', text: "Keep your profits. (No middlemen. No drama.)", image: profits },
    { name: 'Affordable', text: "₹150/room/month.", image: affordable },
    { name: 'Real-time Alerts', text: "Push notifications for new bookings, check-ins, kitchen orders — the moment they happen.", icon: Bell },
    { name: 'Role-based Access', text: "10 staff roles. Everyone sees only what they need.", icon: Shield },
    { name: 'Multi-property Ready', text: "Manage more than one property from a single account.", icon: Building2 },
  ]

  return (
    <section className="min-h-screen py-16 wcp" id="whyus">
      <motion.div
        className="flex items-center flex-col text-center gap-2 mt-8 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Why Choose <span className="bl_un">Proppo</span>?
        </h1>
        <p className='text-xs text-center md:text-left md:text-xl text-gray-800/80 italic mt-2 bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white'>
          Because smooth operations 🛠️✨ mean happier guests 😊🏨.
        </p>
      </motion.div>
      <div className="relative w-[90%] md:w-[80%] mx-auto mt-8 md:mt-12 wcp_div gap-4">
        <motion.div
          className="order-3 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          {why_choose_proppo.map((item, index) => {
            const { name, text, image, icon: Icon } = item
            return (
              <div key={index} className="flex items-center justify-start gap-2 md:gap-4 mb-4 md:mb-8">
                <div className="flex items-center justify-center">
                  {image
                    ? <Image src={image} alt={name} height={200} width={200} className="h-8 md:h-12 w-auto" />
                    : <Icon className="h-8 md:h-12 w-8 md:w-12 text-[#6840ff]" />
                  }
                </div>
                <div className="p-2">
                  <p className="text-lg md:text-2xl font-medium">{name}</p>
                  <p className="text-xs md:text-sm opacity-70 italic">{text}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
        <motion.div
          className="flex items-center justify-center order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <Image alt="" height={1000} width={1000} src={wdpd} className="h-auto w-[90%] md:w-full object-contain" />
        </motion.div>
      </div>
    </section>
  )
}

export function WhoGetsWhat() {
  const who_gets_what = [
    {
      name: 'Hotels',
      features: [
        '🛏️ Housekeeping board & room status',
        '👥 Front desk, reception & finance roles',
        '📈 Revenue reports & payment tracking',
        '🔔 Instant alerts for bookings & check-ins'
      ],
      image: hotel_owners
    },
    {
      name: 'Homestays',
      features: [
        '📲 Direct booking engine, zero commission',
        '📱 Web check-in before arrival',
        '📅 OTA calendar sync in real-time',
        '📦 Manage it all from the mobile app'
      ],
      image: homestay
    },
    {
      name: 'Resorts',
      features: [
        '🍽️ Full F&B: QR menu, KOT & kitchen dashboard',
        '🏨 Multi-department roles for every team',
        '🛒 Vendor & inventory management',
        '⚙️ One platform, total control'
      ],
      image: vacation_rentals
    }
  ]

  return (
    <section className="min-h-screen py-4 md:py-16 bg-[#6840ff]/5" id="services">
      <motion.div
        className="flex items-center flex-col text-center gap-2 mt-8 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Who <span className="bl_un">gets</span> what?
        </h1>
      </motion.div>
      <div className="relative w-[90%] md:w-[80%] mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {who_gets_what.map((item, index) => {
          const { name, features, image } = item
          return (
            <motion.div
              key={index}
              className="flex items-center flex-col bg-white rounded-4xl shadow-lg justify-start gap-2 py-8 shadow-[#6840ff]/5 border border-gray-200/50 dark:bg-black/90 dark:border-gray-800/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="flex items-center justify-center mx-auto">
                <Image src={image} alt={name} height={200} width={200} className="h-16 w-auto" />
              </div>
              <div className="p-2 text-center">
                <p className="text-3xl font-medium mb-2">{name}</p>
                {features.map((ft, ind) => (
                  <p key={ind} className={`block w-full ${ind !== 0 ? 'border-t border-gray-300/50' : ''} opacity-80`} style={{ lineHeight: '350%' }}>
                    {ft}
                  </p>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export function PricingSection() {
  const router = useRouter()
  const {renderSUForm,formComponent} = useSignUpForm()

  return (
    <section className="py-16 flex justify-center pricing" id="pricing">
    {formComponent}
      <motion.div
        className="relative w-[90%] md:w-[80%] mx-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="flex items-center flex-col text-center gap-2"
          variants={fadeInUp}
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            💰 <span className="bl_un">Pricing</span>
          </h1>
          <p className="text-xs md:text-xl text-gray-800/80 italic my-2 bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white">
            We almost charged more… but we like you too much. 😜
          </p>
          <motion.div variants={bounceIn}>
            <Button
              styles="btn_pri text-sm md:text-lg px-5"
              onClick={renderSUForm}
            >
              Contact Us for Custom Plans
            </Button>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="grid grid-cols-1 gap-4 md:gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <div className="p-6 md:p-8 rounded-3xl bg-white/70 shadow-lg shadow-[#6840ff]/5 border border-gray-200/50 dark:bg-black/90 dark:border-gray-800/50">
            <h2 className="font-medium text-xl md:text-3xl mb-4">Pricing Plans</h2>
            <p className="text-2xl md:text-4xl font-bold text-[#6840ff] mb-2">₹50<span className="text-base font-normal">/room/month</span></p>
            <p className="text-sm md:text-lg opacity-80 mb-2">Minimum ₹2000/month</p>
            <p className="text-sm md:text-lg italic opacity-70 mb-4">
              Quarterly, Half-Yearly (<span className="font-medium">5% off</span>), or Yearly (<span className="font-medium">10% off</span>)
            </p>
            <motion.div variants={bounceIn}>
              <Button
                styles="btn_pri text-sm md:text-lg px-5"
                onClick={() => router.push('/pricing')}
              >
                👉 See Full Pricing
              </Button>
            </motion.div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-blue-900/5 flex flex-col items-center justify-center text-center">
            <p className="text-lg md:text-2xl font-medium mb-2">No hidden fees.</p>
            <p className="text-sm md:text-lg opacity-80 italic max-w-[80%]">
              Nope, no sneaky charges or surprise invoices. Just straightforward pricing for your peace of mind. 🙌
            </p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}

export function FinalCTASection() {
  const router = useRouter()
  const {renderSUForm,formComponent} = useSignUpForm()
  const {renderCBForm,CBFComp} = useBookCallForm()
  return (
    <>
    {formComponent}
    {CBFComp}
    <section className="py-12 md:py-20 flex items-center justify-center cta">
      <motion.div
        className="relative w-[90%] md:w-[80%] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="flex items-center flex-col text-center gap-4 mb-8 md:mb-12"
          variants={fadeInUp}
        >
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            🚀 Ready to <span className="bl_un">Simplify?</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-800/80 max-w-[80%] mx-auto mt-2 dark:text-white">
            "Your guests are ready. Your rooms are ready. Your sanity? Still pending. Fix that with <span className="font-medium">Proppo</span>."
          </p>
          <p className="text-xs md:text-sm opacity-70 italic bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white">
            No hidden fees. No nonsense. 🙌
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mt-4 w-full max-w-xl mx-auto">
            {[
              { step: '1', label: 'Sign in with Google' },
              { step: '2', label: 'Onboard your property' },
              { step: '3', label: 'Go live in minutes' },
            ].map(({ step, label }, i, arr) => (
              <div key={step} className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#6840ff] text-white text-xs font-bold flex items-center justify-center shrink-0">{step}</span>
                  <span className="text-sm md:text-base font-medium">{label}</span>
                </div>
                {i < arr.length - 1 && <ChevronRight className="w-4 h-4 opacity-30 hidden sm:block shrink-0" />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div variants={bounceIn}>
            <Button
              styles="btn_pri text-sm md:text-lg px-5"
              onClick={renderSUForm}
            >
              👉 Signup Now
            </Button>
          </motion.div>
          <motion.div variants={bounceIn} transition={{ delay: 0.2 }}>
            <Button
              styles="btn_sec text-sm md:text-lg px-5"
              onClick={renderCBForm}
            >
              👉 Book a Call
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      quote: 'The only thing Proppo can’t do is make coffee… but it freed up time for me to. ☕',
      author: 'Ajay Sharma',
      company: 'Shimla Inn'
    },
    {
      quote: 'Proppo handles my bookings so well, I almost forgot how to answer the phone! 📞',
      author: 'Priya Patel',
      company: 'Cozy Cottage Co.'
    },
    {
      quote: 'Thanks to Proppo, my guests are happier than my dog when I say "walkies"! 🐶',
      author: 'Vikram Singh',
      company: 'Hilltop Haven'
    },
    {
      quote: 'Proppo’s dashboard is so easy, even my grandma could manage my rentals… and she still uses a flip phone! 😅',
      author: 'Neha Gupta',
      company: 'Mountain Retreats'
    }
  ]
  return (
    <section className="py-12 md:py-16 flex justify-center bg-[#6840ff]/5">
      <motion.div
        className="relative w-[90%] md:w-[80%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="flex items-center flex-col text-center gap-2 mb-4 md:mb-12"
          variants={fadeInUp}
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800">
            <span className="bl_un">Testimonials</span>
          </h1>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-black shadow-lg shadow-[#6840ff]/5 border border-gray-200/50 dark:border-gray-100/5 flex flex-col justify-between min-h-[150px] md:min-h-[200px] mx-2 my-4"
                variants={fadeInUp}
              >
                <p className="text-xs md:text-sm text-gray-800 mb-4 italic dark:text-white">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-sm md:text-base font-medium text-[#6840ff]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs opacity-60">{testimonial.company}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export function BuiltForYourTeam() {
  const roles = [
    {
      title: 'Owner / Admin',
      color: 'bg-[#6840ff]',
      lightColor: 'bg-[#6840ff]/10',
      textColor: 'text-[#6840ff]',
      emoji: '👑',
      tagline: 'Full visibility, full control.',
      features: [
        'Live dashboard — revenue, occupancy, bookings',
        'Access to every module and report',
        'Manage staff accounts and permissions',
        'Multi-property switching',
      ]
    },
    {
      title: 'Front Desk & Reception',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
      emoji: '🛎️',
      tagline: 'Run the floor, not spreadsheets.',
      features: [
        'Create, edit, and manage bookings',
        'Guest check-in and check-out',
        'Room assignment and availability view',
        'Accept and record payments',
      ]
    },
    {
      title: 'Housekeeping',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-500',
      emoji: '🧹',
      tagline: 'Know every room\'s status — always.',
      features: [
        'Room status board (clean / dirty / in-progress)',
        'Task assignments per staff member',
        'Real-time status updates',
        'No front-desk calls needed',
      ]
    },
    {
      title: 'Kitchen Staff',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-500/10',
      textColor: 'text-orange-500',
      emoji: '👨‍🍳',
      tagline: 'Orders in. Chaos out.',
      features: [
        'Live incoming order queue',
        'KOT (kitchen order ticket) printing',
        'Order status management',
        'Dedicated kitchen-only dashboard',
      ]
    },
    {
      title: 'Finance & Accounting',
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-500/10',
      textColor: 'text-yellow-500',
      emoji: '📊',
      tagline: 'Month-end without the migraine.',
      features: [
        'Revenue and payment reports',
        'Invoice and billing records',
        'Vendor purchase history',
        'Read-only financial access',
      ]
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#6840ff]/5" id="roles">
      <motion.div
        className="w-[90%] md:w-[80%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16" variants={fadeInUp}>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Built for your <span className="bl_un">whole team</span>
          </h1>
          <p className="text-xs md:text-xl text-gray-800/80 italic mt-1 bg-blue-800/5 p-1 px-3 border-r-[#6840ff] border-r-2 max-w-[90vw] md:max-w-[60%] dark:bg-white/5 dark:border-r-white dark:text-white">
            Everyone gets their own view — no shared logins, no clutter, no confusion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-black/90 rounded-3xl p-6 md:p-8 shadow-lg shadow-[#6840ff]/5 border border-gray-200/50 dark:border-gray-800/50 flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
            >
              <div className="flex items-center gap-3">
                <span className={`text-3xl p-3 rounded-2xl ${role.lightColor}`}>{role.emoji}</span>
                <div>
                  <p className={`font-semibold text-base md:text-lg ${role.textColor}`}>{role.title}</p>
                  <p className="text-xs opacity-60 italic">{role.tagline}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2 mt-1">
                {role.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${role.textColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            className="bg-[#6840ff] rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center text-white gap-3 shadow-lg shadow-[#6840ff]/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <p className="text-4xl">🔐</p>
            <p className="font-bold text-xl md:text-2xl">10 staff roles</p>
            <p className="text-sm opacity-80">
              Every team member gets exactly the access they need — nothing more, nothing less.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {['Super Admin', 'Admin', 'Booking Manager', 'Front Desk', 'Reception', 'Housekeeping', 'Accounting', 'Finance', 'Service Staff', 'Kitchen Admin'].map(r => (
                <span key={r} className="text-xs bg-white/20 px-2 py-1 rounded-full">{r}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export function DownloadAppSection() {
  const stores = [
    {
      label: 'Get it on Google Play',
      image: google_play_store,
      href: 'https://play.google.com/store/apps/details?id=in.proppo.app',
      alt: 'Get it on Google Play'
    },
    {
      label: 'Download on the App Store',
      image: app_store,
      href: 'https://apps.apple.com/us/app/proppo/id6754452967',
      alt: 'Download on the App Store'
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6840ff]/10 via-transparent to-[#6840ff]/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#6840ff]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#6840ff]/10 blur-3xl pointer-events-none" />

      <motion.div
        className="relative w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div className="flex flex-col items-center gap-3 mb-10" variants={fadeInUp}>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#6840ff] bg-[#6840ff]/10 px-4 py-1.5 rounded-full">
            Now on Mobile
          </span>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Manage your property from{' '}
            <span className="bl_un">anywhere</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-800/80 italic mt-1 bg-blue-800/5 p-1 px-3 border-r-[#6840ff] border-r-2 max-w-[90vw] md:max-w-[60%] dark:bg-white/5 dark:border-r-white dark:text-white">
            Your hotel in your pocket. Bookings, check-ins, revenue — all at your fingertips. 📱
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {stores.map(({ label, image, href, alt }) => (
            <motion.a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded-2xl overflow-hidden  transition-all duration-300 shadow-lg hover:shadow-xl bg-white dark:bg-black/80 p-1 hover:brightness-110"
              variants={bounceIn}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.97 }}
            >
              <Image
                src={image}
                alt={alt}
                height={200}
                width={600}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-xs md:text-sm opacity-50 italic"
          variants={fadeInUp}
        >
          Free to download · Available on iOS &amp; Android
        </motion.p>
      </motion.div>
    </section>
  )
}

export function TeamSection() {
  const team_data = [
    {
      name: 'Aniket Chauhan',
      role: 'Co-Founder',
      description: 'Aniket is a dynamic entrepreneur with expertise spanning music distribution and hospitality. As the founder of Tunest, he pioneered the distribution of Himachali regional music on digital streaming platforms, managing a catalog of over 10,000 tracks and opening up new income streams for local artists. His strengths lie in business strategy, growth, and marketing, with a proven ability to scale ventures from the ground up.',

      d1: 'Alongside this, Aniket has deep roots in hospitality. Having worked closely with hotels and travel agencies, and as the owner of a boutique property himself, he knows the operational challenges hoteliers face on a day-to-day basis, from reservations and inventory to guest management. It was these firsthand experiences that led him to create Proppo, a next-generation PMS designed with the hotelier’s perspective at its core, solving the very problems he encountered while running his own property.',
      // image: team_member1
    },
    {
      name: 'Saurabh Chauhan',
      role: 'Co-Founder',
      description: 'Saurabh is a full-stack developer with strong technical foundations in web development. At Tunest, he engineered the platform that enabled large-scale content distribution. He brings a product-first mindset, ensuring that every digital solution is scalable, reliable, and user-friendly, bridging technology with real-world business needs.',
      // image: team_member2
    },
    {
      name: 'Ojas Nirala',
      role: 'UI/UX Designer',
      description: 'Ojas is a creative problem-solver who specializes in crafting intuitive and impactful user experiences. His design philosophy focuses on blending functionality with aesthetics, ensuring that every product interaction feels seamless and engaging. With an eye for detail and passion for user-centric design, Ojas elevates our products to global standards of usability and appeal.',
      // image: team_member3
    },
    {
      name: 'Sharan Chauhan',
      role: 'Hospitality Specialist',
      description: 'Sharan brings invaluable hospitality domain expertise, having worked extensively with multiple hotels. His hands-on industry experience allows him to identify the pain points of hoteliers and guests alike, ensuring our solutions are built with real-world challenges in mind. Sharan’s perspective anchors the team in practicality, helping us design technology that truly serves the hospitality sector.',
      // image: team_member4
    }
  ]

  return (
    <section className="min-h-screen py-16 flex justify-center bg-[#6840ff]/5" id="team">
      <motion.div
        className="relative w-[90%] md:w-[80%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="flex items-center flex-col text-center gap-2 mb-8 md:mb-12"
          variants={fadeInUp}
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Meet the <span className="bl_un">Team</span>
          </h1>
          <p className="text-xs md:text-xl text-gray-800/80 italic mt-2 bg-blue-800/5 p-1 px-2 border-r-[#6840ff] border-r-2 max-w-[90vw] dark:bg-white/5 dark:border-r-white dark:text-white">
            ⚡ Combining entrepreneurial vision, technical innovation, design excellence, and hospitality expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {team_data.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-3xl bg-white/70 dark:bg-black/90 shadow-lg shadow-[#6840ff]/5 border border-gray-200/50 dark:border-gray-800/50 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <Image
                src={member_image}
                alt={member.name}
                height={200}
                width={200}
                className="h-24 w-24 rounded-full object-cover mb-4"
              />
              <h2 className="font-medium text-xl md:text-2xl">{member.name}</h2>
              <p className="text-sm md:text-base text-[#6840ff] mb-2">{member.role}</p>
              <p className="text-xs md:text-sm opacity-70">{member.description}</p>
              {member.d1 ? <p className="text-xs md:text-sm opacity-70 mt-3">{member.d1}</p> : null}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
