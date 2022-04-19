import '../styles/globals.ts'
import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyles />
        </>
    )
}

export default MyApp
