'use client'
import { Container, Box, TextField, Button, Typography, MenuItem, FormControlLabel, Checkbox } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      phone: '',
      password: '',
      bank_transfer: 'scb',
      bank_number: '',
      name: '',
      lastname: '',
      line_account: '',
      auto_bonus: true
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
                  name='phone'
                  control={control}
                  rules={{ required: 'โปรดระบุ เบอร์โทรศัพท์' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      className='AuthTextField'
                      label='เบอร์โทรศัพท์'
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
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      className='AuthTextField'
                      label='รหัสผ่าน'
                      variant='filled'
                      type='password'
                      InputProps={{ disableUnderline: true }}
                      autoComplete='current-password'
                    />
                  )}
                />
                <Controller
                  name='bank_transfer'
                  control={control}
                  rules={{ required: 'โปรดระบุ ธนาคาร' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.bank_transfer}
                      helperText={errors.bank_transfer?.message}
                      className='AuthTextField'
                      label='ธนาคาร'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                      select
                    >
                      <MenuItem value='scb'>ธนาคารไทยพาณิชย์</MenuItem>
                      <MenuItem value='ktb'>ธนาคารกรุงไทย</MenuItem>
                      <MenuItem value='bbl'>ธนาคารกรุงเทพ</MenuItem>
                      <MenuItem value='kbank'>ธนาคารกสิกรไทย</MenuItem>
                      <MenuItem value='tmb'>ธนาคารทหารไทย</MenuItem>
                      <MenuItem value='ttb'>ทีเอ็มบีธนชาต (ttb)</MenuItem>
                      <MenuItem value='bay'>ธนาคารกรุงศรีอยุธยา</MenuItem>
                      <MenuItem value='baac'>ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</MenuItem>
                      <MenuItem value='cimbt'>ธนาคาร ซีไอเอ็มบี</MenuItem>
                      <MenuItem value='uobt'>ธนาคารยูโอบี</MenuItem>
                      <MenuItem value='gsb'>ธนาคารออมสิน</MenuItem>
                      <MenuItem value='tbank'>ธนาคารธนชาต</MenuItem>
                      <MenuItem value='ghb'>ธนาคารอาคารสงเคราะห์</MenuItem>
                      <MenuItem value='isbt'>ธนาคารอิสลามแห่งประเทศไทย</MenuItem>
                      <MenuItem value='kkp'>ธนาคารเกียรตินาคิน</MenuItem>
                      <MenuItem value='lhbank'>ธนาคารแลนด์ แอนด์ เฮ้าส์</MenuItem>
                      <MenuItem value='icbc'>ธนาคารไอซีบีซี (ไทย)</MenuItem>
                      <MenuItem value='tisco'>ธนาคารทิสโก้</MenuItem>
                      <MenuItem value='truew'>บัญชี ทรูมันนี่ วอลเล็ท</MenuItem>
                    </TextField>
                  )}
                />
                <Controller
                  name='bank_number'
                  control={control}
                  rules={{ required: 'โปรดระบุ เลขที่บัญชี' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type='number'
                      error={!!errors.bank_number}
                      helperText={errors.bank_number?.message}
                      className='AuthTextField'
                      label='เลขที่บัญชี'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: 'โปรดระบุ ชื่อ' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      className='AuthTextField'
                      label='ชื่อ (ใช้ชื่อที่ตรงกับชื่อบัญชีเท่านั้น)'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
                <Controller
                  name='lastname'
                  control={control}
                  rules={{ required: 'โปรดระบุ นามสกุล' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.lastname}
                      helperText={errors.lastname?.message}
                      className='AuthTextField'
                      label='นามสกุล'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
                <Controller
                  name='line_account'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className='AuthTextField'
                      label='ไลน์ไอดี'
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
                <Controller
                  name='auto_bonus'
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      className='AuthTextCheckBox'
                      control={<Checkbox {...field} checked={field.value} />}
                      label='คลิกเลือกหากต้องการรับโบนัส'
                    />
                  )}
                />

                <Button
                  aria-label='signin'
                  type='submit'
                  variant='contained'
                  className='transition duration-100 hover:scale-105 hover:shadow-[#FEB139_0px_0px_15px_4px] bg-[#FEB139] hover:bg-[#ff9d00] rounded-xl border border-solid border-white text-lg shadow-none'
                >
                  สมัครสมาชิก
                </Button>
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
              <Link href='/signin' className='ml-2 yellow-text-gradient pr-2'>
                เข้าสู่ระบบ
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default SignUp
