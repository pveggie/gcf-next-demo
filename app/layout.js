import { Roboto } from '@next/font/google'

import { SiteWrapper } from '@/components/wrappers/Site'

import '@/styles/main.scss'

const roboto = Roboto({
  weight: ['400', '700'],
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
        <SiteWrapper>{children}</SiteWrapper>
      </body>
    </html>
  )
}
