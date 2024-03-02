'use client'
import { createTheme } from '@mui/material/styles'
import { Prompt } from 'next/font/google'

const prompt = Prompt({ subsets: ['thai'], weight: ['200', '400', '700'], display: 'swap' })

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
    fontSize: 16,
    fontFamily: prompt.style.fontFamily
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
