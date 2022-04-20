import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/globals'
import '../styles/globals.ts'
import { NavigationLayout } from '../components/NavigationLayout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NavigationLayout>
            <Head>
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <GlobalStyles />
            <Component {...pageProps} />
        </NavigationLayout>
    )
}

export default MyApp
