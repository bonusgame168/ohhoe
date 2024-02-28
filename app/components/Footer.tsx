import { Box, Typography, Container, useMediaQuery, Theme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary_light'>
      <Container className='py-5'>
        <Box className='flex justify-center' sx={{ mt: 4 }}>
          <Image
            className='shadow-[0_0_8px_0_#fff] bg-white rounded-[50px]'
            src='/assets/images/banks/truemoneywallet-logo.webp'
            alt='icon kbank'
            width={200}
            height={58}
          />
        </Box>
        <Box className='flex justify-center flex-wrap' sx={{ mt: 4, gap: 1.5 }}>
          {new Array(8).fill('').map((_, index: number) => (
            <Box key={index} className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
              <Image
                className='shadow-[0_0_8px_0_#fff] rounded-full '
                src={`/assets/images/banks/bank-${index}.webp`}
                alt='bank icon'
                fill
              />
            </Box>
          ))}
        </Box>
        <Typography fontSize='small' className='text-center' sx={{ mt: 4 }}>
          2022-{new Date().getFullYear()} © Copyright OHHOE All rights Reserved.
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
