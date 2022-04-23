import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Fragment } from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [
                    <Fragment key="1">
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Fragment>
                ]
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
