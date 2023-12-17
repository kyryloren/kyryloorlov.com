import { StyledComponentsRegistry } from 'lib'
// import Script from 'next/script'

const title = 'Kyrylo Orlov | Creative designer and developer'
const description = `Kyrylo Orlov is an NYC-based designer and developer working on building highly-creative and functional websites, brands, and experiences. Current director at Outer Labs Studio.`

export const metadata = {
  title: {
    template: '%s | Kyrylo Orlov',
    default: title,
  },
  description: description,
  keywords: [
    'kyrylo orlov',
    'outer labs',
    'outerlabs',
    'creative',
    'designer',
    'developer',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.kyryloorlov.com',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.kyryloorlov.com'
      }/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@kyryloren',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.kyryloorlov.com'
      }/og-image.jpg`,
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lrk0fqe.css" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned.tab.svg"
          color="#121212"
        />
        <meta name="msapplication-TileColor" content="#121212" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* END FAVICON */}
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      {/* {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          />
          <Script
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />
        </>
      )} */}
    </html>
  )
}
