import { Box } from '@mui/material'
import React from 'react'

const SectionDivider = () => {
  return (
    <>
      <Box
        sx={{
          height: '7px',
          background: 'linear-gradient(338deg, #ffc288, #fea82f, #ff6701)',
          backgroundSize: '240% 240%',
          animation: `gradient 8s ease infinite`
        }}
      />

      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          `}
      </style>
    </>
  )
}

export default SectionDivider
