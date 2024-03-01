'use client'
import { Container, Box, TextField, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleSubmitForm = (values: any) => {
    console.log(values)
  }

  return (
    <section id='authen'>
      <Container className='py-[10vh]'>
        <Box className='flex flex-col sm:flex-row items-center sm:gap-10'>
          <Box
            sx={{ px: 2, pb: 4, pt: 8 }}
            className='relative flex flex-col justify-center flex-1 rounded-2xl text-white shadow-[0 0 15px 0 #210231] bg-[rgba(0,0,0,0.3)]'
          >
            <Image
              className='absolute -top-20 right-0 left-0 mx-auto'
              src='/assets/images/ic-rabbit-money.webp'
              alt='small rabbit mascot'
              width={100}
              height={100}
            />

            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <Box className='flex flex-col' sx={{ gap: 2, p: 2 }}>
                <Controller
                  name='username'
                  control={control}
                  rules={{ required: 'โปรดระบุ ยูส/เบอร์โทรศัพท์' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      label='ยูส/เบอร์โทรศัพท์'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: 'โปรดระบุ รหัสผ่าน' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type='password'
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      label='รหัสผ่าน'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                      autoComplete='current-password'
                    />
                  )}
                />
                <Button
                  aria-label='signin'
                  type='submit'
                  variant='contained'
                  className='transition duration-100 hover:scale-105 hover:shadow-[#FEB139_0px_0px_15px_4px] bg-[#FEB139] hover:bg-[#ff9d00] rounded-xl border border-solid border-white text-lg shadow-none'
                >
                  เข้าสู่ระบบ
                </Button>

                <Typography variant='h6' className='text-center xl:text-right text-xl md:text-xl mt-5 xl:mt-2'>
                  <a href='#' rel='noreferrer' className='ml-2 yellow-text-gradient pr-2'>
                    ลืมรหัสผ่าน ?
                  </a>
                </Typography>
              </Box>
            </form>
          </Box>
          <Box className='flex flex-col items-center justify-center flex-1'>
            <Typography variant='h4' className='italic text-white text-center xl:text-right break-words text-xl md:text-4xl'>
              ยินดีต้อนรับสู่
              <span className='ml-2 yellow-text-gradient pr-2'>OHHOE</span>
            </Typography>
            <Typography variant='h6' className='text-white text-center xl:text-right text-xl md:text-2xl'>
              หากคุณยังไม่มีบัญชี
              <Link href='/signup' className='ml-2 yellow-text-gradient pr-2'>
                สมัครสมาชิก
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default SignIn
