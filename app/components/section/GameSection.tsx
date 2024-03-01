import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const GameSection = () => {
  return (
    <section id='game'>
      <Container>
        <Box className='text-center pt-14'>
          <Typography className='text-3xl md:text-5xl font-bold text-amber-900'>เกมส์มันส์มันส์</Typography>
          <Typography className='text-lg md:text-xl text-white'>เกมเยอะ ภาพสวยทั้งใหม่ และ เป็นที่นิยม</Typography>
        </Box>
        <Box className='flex items-center flex-col sm:flex-row justify-center flex-wrap'>
          {Array.from({ length: 4 }).map((_, index: number) => (
            <Image
              className='transition duration-700 hover:scale-105'
              key={index}
              src={`/assets/images/games/game-${index + 1}.webp`}
              alt={`game image ${index + 1}`}
              width={250}
              height={250}
            />
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default GameSection
