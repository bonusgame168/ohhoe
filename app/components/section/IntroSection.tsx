import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const IntroSection = () => {
  return (
    <section id='intro'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-3xl md:text-5xl font-bold text-amber-900'>OHHOE</Typography>
          <Typography className='text-lg md:text-xl text-white'>เดิมพันออนไลน์ ลงทุนน้อย กำไรเยอะ</Typography>
        </Box>

        <Box className='flex flex-col sm:flex-row justify-center md:gap-10 mt-10 text-white'>
          <Box className='flex items-center gap-x-5'>
            <Image src='/assets/images/ic-trust-01.webp' alt='deposit & withdraw' width={90} height={90} />
            <Box className='flex flex-col md:text-center'>
              <Typography variant='h6' className='font-bold italic'>
                ฝาก-ถอน ออโต้
              </Typography>
              <Typography variant='caption'>การันตีฝากถอนรวดเร็ว ภายใน 5 วินาที</Typography>B
            </Box>
          </Box>

          <Box className='flex items-center gap-x-5'>
            <Image src='/assets/images/ic-trust-02.webp' alt='deposit & withdraw' width={90} height={90} />
            <Box className='flex flex-col md:text-center'>
              <Typography variant='h6' className='font-bold italic'>
                ฝาก-ถอน ไม่มีขั้นต่ำ
              </Typography>
              <Typography variant='caption'>ฝากไม่มีขั้นต่ำ ถอนขั้นต่ำ 20 บาท</Typography>
            </Box>
          </Box>

          <Box className='flex items-center gap-x-5'>
            <Image src='/assets/images/ic-trust-03.webp' alt='deposit & withdraw' width={90} height={90} />
            <Box className='flex flex-col md:text-center'>
              <Typography variant='h6' className='font-bold italic'>
                บริการ 24 ชม.
              </Typography>
              <Typography variant='caption'>มีแอดมินบริการตลอด 24 ชม. มั่นคง ปลอดภัย</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default IntroSection
