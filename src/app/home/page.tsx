"use client"
import { ComingSoon } from '@/components/coming-soon/ComingSoon'
import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Services } from '@/components/section/Services'
import React from 'react'

export const HomePage = () => {
  return (
    <>
    <Header/>
    {/* <Hero/> */}
    <Services/>
    <ComingSoon/>

    </>
  )
}
export default HomePage;