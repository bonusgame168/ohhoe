import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PromotionSection = () => {
  return (
    <section id='promotion' className='bg-[#e5ac73]'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-3xl md:text-5xl'>โปรโมชั่น</Typography>
          <Typography className='text-lg md:text-2xl'>เดิมพันออนไลน์ ลงทุนน้อย กำไรเยอะ</Typography>
        </Box>

        <Box className='grid grid-cols-2 md:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index: number) => (
            <Image
              key={index}
              src={`/assets/images/promotions/promotion-${index}.webp`}
              alt={`promotion number ${index + 1}`}
              width={609}
              height={684}
              className='object-contain max-w-full md:px-5'
            />
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default PromotionSection
