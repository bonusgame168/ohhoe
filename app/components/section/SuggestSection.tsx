import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const SuggestSection = () => {
  return (
    <section id='suggestion'>
      <Container className='py-5'>
        <Box className='text-center my-5'>
          <Typography className='text-lg md:text-xl text-white font-extrabold'>
            ฝาก - ถอน ระบบออโต้รวดเร็ว โปรแรงสุดในไทย อัพเกรดใหม่ OHHOE
          </Typography>
        </Box>
        <Box className='flex flex-col sm:flex-row my-20 sm:mt-28 lg:gap-10'>
          <Box className='flex-1 relative'>
            <Image src='/assets/images/dragon-green.webp' alt='dragon mascot' fill className='object-contain' />
          </Box>

          <Box className='flex-1 bg-[#FF4646] relative purple-shadow silver-gradient-border border-solid border-[4px] px-[20px] pb-[20px]'>
            <Image
              className='absolute right-[-8%] top-[-10%] z-50 hidden lg:block'
              src='/assets/images/ic-rabbit-mascot-small.webp'
              alt='small rabbit mascot'
              width={125}
              height={175}
            />
            <Box
              className='cut-corner-tr absolute text-center top-[-8%] sm:top-[-18%] md:top-[-25%] lg:top-[-10%] left-1/2 origin-[1/2] purple-shadow silver-gradient-border border-solid border-[4px] max-w-full'
              sx={{
                // clipPath: 'polygon(0 0, 0 0, 80% 0, 100% 40%, 100% 90%, 100% 100%, 0 100%, 0 100%, 0 0)',
                transform: 'translateX(-50%)',
                p: 2,
                background:
                  'linear-gradient(180deg, rgba(255, 70, 70, 1) 0%, rgba(255, 0, 0, 1) 100%) padding-box, linear-gradient(90deg, rgba(139,139,139,1) 0%, rgba(103,103,103,1) 45%, rgba(255,255,255,1) 100%) border-box'
              }}
            >
              <Typography
                variant='h4'
                className='italic font-bold silver-text-gradient px-[24px] text-lg sm:text-[2.7rem] sm:leading-[2.8rem]'
              >
                OHHOE
              </Typography>
              <Typography className='text-sm sm:text-[1.2rem] sm:leading-[1.5rem] whitespace-nowrap text-white'>
                <span className='text-primary_light font-bold'>เว็บพนันออนไลน์</span>ที่ยิ่งใหญ่ที่สุดในยุคนี้
              </Typography>
            </Box>
            <Typography className='text-white text-center lg:text-left mt-[64px] text-[1rem] lg:text-[1.2rem] lg:leading-[1.8rem] lg:pr-[56px]'>
              เมื่อยุคสมัยเปลี่ยนไป โลกของการสร้างรายได้ บนโลกออนไลน์ ที่ เป็นแค่โลกเสมือนจริง ได้เปลี่ยนความไม่แน่นอน ให้เกิดความแน่นอน
              ทั้งยังสร้างรายได้ที่มั่นคงและง่ายดาย ได้มากกว่า ไม่ว่าคุณจะเป็นใคร ก็หา เงินได้ง่ายยิ่งกว่าปลอกกล้วยเข้าปาก ได้จริง ๆ
              ด้วยสิ่งสำคัญเพียงข้อเดียว คือ การเลือก คาสิโนออนไลน์ ที่เชื่อถือได้ และให้บริการแก่สมาชิกทุก ๆ ท่าน ได้ อย่างไม่มีแบ่งแยก
              ไม่เลือกปฎิบัติ ไม่สร้างความเครียด เหมือนดั่งการ ทำเงิน ในรูปแบบอื่น ๆ บนโลกของความเป็นจริง
            </Typography>
            <Box className='flex items-center' sx={{ gap: 2, mt: 3 }}>
              <Image
                className='hidden lg:block'
                src='/assets/images/ic-rabbit-money.webp'
                alt='small rabbit mascot'
                width={183}
                height={162}
              />
              <Typography className='text-white text-center lg:text-left text-[1rem] lg:text-[1.2rem] lg:leading-[1.8rem]'>
                และถ้าหากคุณเป็นหนึ่งคน ที่กำลังมองหาการสร้าง รายได้ ในรูปแบบนี้ การเข้ามาที่ คาสิโนออนไลน์ OHHOE แห่งนี้ แปลว่าคุณมาถูกที่
                ถูกทางแล้ว เพราะใน ปี 2023 นี้ ไม่มีแหล่งรายได้ใด ที่จะมอบ ประสบการณ์ทางเลือกใหม่ ได้เต็มรูปแบบ ครบ วงจร
                และสร้างความหลากหลาย ได้เงินจริง!! ได้เท่ากับ ที่ คาสิโนออนไลน์ OHHOE อีก แล้ว อย่างแน่นอน
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default SuggestSection
