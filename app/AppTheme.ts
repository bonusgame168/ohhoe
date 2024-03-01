'use client'
import { Noto_Sans_Thai } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const noto_sans_thai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600'],
  subsets: ['thai', 'latin']
})

const theme = createTheme({
  palette: {
    primary: {
      light: '#FFC288',
      main: '#FEA82F',
      dark: '#e48334',
      contrastText: '#fff'
    }
    // secondary: {
    //   light: '#DCDCDC',
    //   main: '#103763',
    //   dark: '#18508E',
    //   contrastText: '#fff'
    // }
    // mode: 'light',
    // text: {
    //   primary: '#1e293b', //slate 800
    //   secondary: '#94a3b8' //slate 400
    // }
  },
  typography: {
    fontFamily: noto_sans_thai.style.fontFamily
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'rgb(216, 76, 4)'
          // backdropFilter: 'blur(6px) !important'
        }
      }
    }
  }
})

export default theme
