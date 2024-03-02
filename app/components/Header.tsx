import { AppBar, Toolbar, Button, Container, Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar disableGutters>
        <Container>
          <Box className='flex items-center justify-between'>
            <Image width={100} height={100} src={'/assets/images/logo-ohhoe.webp'} alt='logo' />
            <Box className='flex items-center gap-x-5'>
              <Link href='/'>
                <Button className='hidden sm:block text-white'>หน้าหลัก</Button>
              </Link>
              <Link href='/#promotion'>
                <Button className='hidden sm:block text-white'>โปรโมชั่น</Button>
              </Link>
              {/* <Link href='/#article'>
                <Button className='hidden sm:block text-white'>บทความ</Button>
              </Link> */}
              <Box className='flex gap-x-4'>
                <Link href='/signin'>
                  <Button
                    variant='contained'
                    className='transition duration-100 hover:scale-105 hover:shadow-[#FEB139_0px_0px_15px_4px] hover:bg-[#FEB139] bg-[#ff9d00] rounded-lg border border-solid border-white text-lg shadow-none'
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Link>
                <Link href='/signup'>
                  <Button
                    variant='contained'
                    className='hidden sm:block transition duration-100 hover:scale-105 hover:shadow-[#FF4646_0px_0px_15px_4px] hover:bg-[#FF4646] bg-[#ff0000] rounded-lg border border-solid border-white text-lg shadow-none'
                  >
                    สมัครสมาชิก
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
