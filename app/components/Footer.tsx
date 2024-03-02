import { Box, Typography, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// const Slider = dynamic(() => import('@/components/Slider'), { ssr: false })

const Footer = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 10,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 8
  //       }
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 6
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     }
  //   ]
  // }
  return (
    <div id='footer'>
      {/* <Box className='pt-2'>
        <Slider {...settings}>
          {Array.from({ length: 13 }).map((_, index: number) => (
            <div key={index} className='!inline-flex justify-center'>
              <Image
                src={`/assets/images/bands/ic-bet-band-${index}.webp`}
                alt='game image'
                width={79}
                height={40}
                className='object-contain'
              />
            </div>
          ))}
        </Slider>
      </Box> */}
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
        <Typography fontSize='small' className='text-center text-white' sx={{ mt: 4 }}>
          2022-{new Date().getFullYear()} © Copyright OHHOE All rights Reserved.
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
