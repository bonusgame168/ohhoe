import type { Metadata } from 'next'

import './globals.css'
import Apptheme from './AppTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import { CssBaseline, ThemeProvider } from '@mui/material'
import NavFooter from './components/NavFooter'

export const metadata: Metadata = {
  title: 'Oh-Hoe',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={Apptheme}>
          <CssBaseline />
          <Header />
          <main>{children}</main>
          <footer>
            <Footer />
            <NavFooter />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
