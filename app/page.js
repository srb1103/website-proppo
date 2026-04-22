'use client'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import WhoIsProppoFor, { BuiltForYourTeam, DownloadAppSection, FinalCTASection, HowDoesProppoWork, PricingSection, TeamSection, Testimonials, WhatDoesProppoDo, WhoGetsWhat, WhyChooseProppo } from '@/components/Sections'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

export default function page() {
  let {setTheme} = useTheme()
  useEffect(()=>{
    setTheme('light')
  },[])
  return (
    <>
      <NavBar/>
      <Hero/>
      {/* <HowDoesProppoWork/> */}
      <WhoIsProppoFor/>
      <WhyChooseProppo/>
      <WhatDoesProppoDo/>
      <WhoGetsWhat/>
      <BuiltForYourTeam/>
      <PricingSection/>
      <Testimonials/>
      {/* <TeamSection/> */}
      <DownloadAppSection/>
      <FinalCTASection/>
      <Footer/>
      <span id='alert_wrap'></span>
    </>
  )
}
