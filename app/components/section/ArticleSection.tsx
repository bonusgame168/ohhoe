import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ArticleCard from '../ArticleCard'
import Image from 'next/image'

const articleList = [
  {
    image: 'article-1',
    title: 'm dolor sit amet',
    description: 'assumes odio, fvtium unde fugiat',
    timestamp: '1 Mach 2024'
  },
  {
    image: 'article-2',
    title: 'Le dolor sit amet',
    description: 'assutum ad, accusantium unde fugiat',
    timestamp: '1 Mach 2024'
  },
  {
    image: 'article-3',
    title: 'ipsum doamet',
    description: 'assuodio, facilis repuupunde fugiat',
    timestamp: '1 Mach 2024'
  }
]

const ArticleSection = () => {
  return (
    <section id='article'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-3xl md:text-5xl font-bold text-amber-900'>บทความ</Typography>
        </Box>

        <Box>
          <Box className='flex justify-center md:justify-start my-5 gap-4'>
            {articleList.map((item, index) => (
              <ArticleCard {...item} key={index} />
            ))}
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
