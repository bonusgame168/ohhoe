import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import AccessTime from '@mui/icons-material/AccessTime'
import ButtonBase from '@mui/material/ButtonBase'
import Link from 'next/link'

const ArticleCard = () => {
  return (
    <ButtonBase className=''>
      <Card className='cursor-pointer text-left h-full transition duration-300 hover:scale-105 rounded-2xl shadow-xl'>
        <Box className='flex justify-center'>
          <Image
            src='/assets/images/sample-article.webp'
            alt={'sample-artice'}
            height={300}
            width={300}
            className='max-w-full h-auto'
            priority
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant='h5' className='line-clamp-2'>
            โบนัสจุใจ
          </Typography>
          <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
            OHHOE ฝาก 300 รับ 100 ฝาก 500 รับ 200
          </Typography>
          <Box sx={{ gap: 1, mt: 1, display: 'inline-flex', alignItems: 'center' }}>
            <Typography variant='caption' color='text.secondary' sx={{ lineHeight: 1 }}>
              <AccessTime fontSize='small' />
            </Typography>
            <Typography fontSize='small' variant='caption' color='text.secondary'>
              1 Mach 2024
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  )
}

export default ArticleCard
