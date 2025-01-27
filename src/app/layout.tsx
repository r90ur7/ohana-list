"use client";
import { Inter } from 'next/font/google'
import {Box,ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import  { theme }  from './styles/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import Header from './components/Header/Header'
import { CrudProvider } from './components/Contexts/CrudContex';

const inter = Inter({ subsets: ['latin'] }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
        <head>
          <title>ohana - list</title>
        </head>
        <body className={inter.className}>
          <CacheProvider>
            <ChakraProvider resetCSS  theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <CrudProvider>
                      <Header />
                      {children}
                </CrudProvider>
            </ChakraProvider>
          </CacheProvider>
        </body>
      </html>
  )
}