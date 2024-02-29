import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PromotionSection = () => {
  return (
    <section id='promotion'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-3xl md:text-5xl font-bold text-amber-900'>โปรโมชั่น</Typography>
          <Typography className='text-lg md:text-xl text-white'>ยินดีต้อนรับสู่ OHHOE สุดยอดเว็บสล็อตอันดับ 1 ในไทย</Typography>
        </Box>

        <Box className='grid grid-cols-2 md:grid-cols-3'>
          {Array.from({ length: 9 }).map((_, index: number) => (
            <Image
              key={index}
              src={`/assets/images/promotions/pro-${index + 1}.webp`}
              alt={`promotion number ${index + 1}`}
              width={609}
              height={684}
              className='object-contain max-w-full md:px-5 transition duration-700 hover:scale-105'
            />
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default PromotionSection
