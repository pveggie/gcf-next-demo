'use client'
import { Roboto } from '@next/font/google'

import { Box, Container } from '@mui/system'

import Header from '@/components/templates/Header'

import '@/styles/main.scss'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <Box
          sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <Header />
          <Box
            as="main"
            sx={{
              height: '100%',
              flexGrow: 1,
            }}
          >
            <Container sx={{ height: '100%' }}>{children}</Container>
          </Box>
        </Box>
      </body>
    </html>
  )
}
