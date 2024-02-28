import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArticleCard from '../ArticleCard'

const ArticleSection = () => {
  return (
    <section id='article' className='bg-primary_light'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-3xl md:text-5xl font-bold text-amber-900'>บทความ</Typography>
        </Box>

        <Box className=''>
          <Box className='flex justify-center md:justify-start my-5'>
            <ArticleCard />
          </Box>
          <Box className='text-center'>
            <Button
              variant='contained'
              className='transition duration-100 hover:scale-105 hover:shadow-[#FF4646_0px_0px_15px_4px] bg-[#FF4646] hover:bg-[#ff0000] rounded-xl border border-solid border-white text-lg shadow-none'
            >
              บทความทั้งหมด
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default ArticleSection
