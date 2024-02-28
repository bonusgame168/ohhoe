import { Paper, BottomNavigation, BottomNavigationAction, Typography, AppBar } from '@mui/material'
import RedeemIcon from '@mui/icons-material/Redeem'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NavFooter = () => {
  return (
    <AppBar
      position='fixed'
      color='primary'
      sx={{ top: 'auto', bottom: 0 }}
      className='sm:hidden border-0 border-t border-solid border-[#FFC288]'
    >
      <BottomNavigation showLabels className='bg-[#e48334] h-[60px]'>
        <BottomNavigationAction
          showLabel
          className='text-white'
          label={
            <Link className='no-underline' href='https://member.bonusgames168.com/register'>
              <Typography className='text-white text-[0.65rem]'>สมัครสมาชิก</Typography>
            </Link>
          }
          icon={<PersonAddIcon />}
        />
        <BottomNavigationAction
          showLabel
          className='text-[#ffb402]'
          label={
            <Link className='no-underline' href='https://member.bonusgames168.com/'>
              <Typography className='text-[#ffb402] text-[0.65rem]'>เข้าสู่ระบบ</Typography>
            </Link>
          }
          icon={<ExitToAppIcon />}
        />
        <BottomNavigationAction
          disableRipple
          className='min-w-0'
          icon={<Image src='/assets/images/logo-bottom-navigation.webp' width={45} height={45} alt='logo' />}
        />
        <BottomNavigationAction
          showLabel
          className='text-white'
          label={
            <Link className='no-underline' href='/#home-promotion'>
              <Typography className='text-white text-[0.65rem]'>โปรโมชั่น</Typography>
            </Link>
          }
          icon={<RedeemIcon />}
        />
        <BottomNavigationAction
          className='text-white'
          label={
            <a href='https://line.me/R/ti/p/@147hdwat' target='_blank' rel='noreferrer'>
              <Typography className='text-white text-[0.65rem]'>ติดต่อ</Typography>
            </a>
          }
          icon={<PermContactCalendarIcon />}
        />
      </BottomNavigation>
    </AppBar>
  )
}

export default NavFooter
