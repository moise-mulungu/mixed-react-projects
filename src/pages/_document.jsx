import { Html, Head, Main, NextScript } from 'next/document'

// why? https://nextjs.org/docs/messages/no-stylesheets-in-head-component

export default function Document() {
  return (
    <Html>
      <Head>
        {/* todoDM: why did I need to use this and not import a package */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
