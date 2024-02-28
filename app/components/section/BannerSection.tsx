import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerSection = () => {
  return (
    <section id='banner'>
      {/* Mobile */}
      <div className='md:hidden relative aspect-[648/672]'>
        <Image src='/assets/images/banner-header-mobile.webp' alt='banner' fill className='object-fill' priority sizes='100%' />
        <Link href='/signup'>
          <Button
            aria-label='go to signup'
            variant='contained'
            className='bg-primary_main absolute translate-x-[50%] bottom-[3%] w-[45vw] text-[3.5vw] !rounded-[40px] border border-solid border-white hover:shadow-[0_0_0.25rem_rgba(0,0,0,0.5),-0.125rem_-0.125rem_1rem_rgba(239,71,101,0.5),0.125rem_0.125rem_1rem_rgba(255,154,90,0.5)]'
          >
            สมัครสมาชิก
          </Button>
        </Link>
      </div>
      {/* Desktop */}
      <div className='hidden md:block relative aspect-[1920/902]'>
        <Image src='/assets/images/banner-header.webp' alt='banner' fill className='object-fill' priority sizes='100%' />
        {/* <Image src='/assets/images/main-bg.jpeg' alt='banner' fill className='object-fill' priority sizes='100%' /> */}
        <Link href='/signup'>
          <Button
            aria-label='go to signup'
            variant='contained'
            className='register-btn absolute translate-x-[50%] bottom-[12%] w-[20vw] text-[2.4vw] rounded-[180px] border border-solid border-white hover:shadow-[0_0_0.25rem_rgba(0,0,0,0.5),-0.125rem_-0.125rem_1rem_rgba(239,71,101,0.5),0.125rem_0.125rem_1rem_rgba(255,154,90,0.5)]'
          >
            สมัครสมาชิก
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default BannerSection
