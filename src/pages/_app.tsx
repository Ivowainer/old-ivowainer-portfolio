import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { NextProgressbarSpinner } from 'nextjs-progressbar-spinner'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider enableSystem={true} attribute="class">
      <NextProgressbarSpinner
        NextNProgressProps={{
          color: 'rgb(16, 185, 129)',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
