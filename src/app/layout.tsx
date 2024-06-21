import React, { Suspense } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import * as gtag from '../lib/google-analytics/ga';
import ReactQueryProvider from '@/lib/reactQuery/providers';
import './globals.css';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevFest BoilerPlate',
  description: 'Generated by create next app',
  metadataBase: new URL('https://devfest-boilerplate.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // effect for google analytics to track page change
  // React.useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     gtag.pageview(url);
  //   };
  //   handleRouteChange(pathname);
  // }, [pathname, searchParams]);

  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='alternate icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body>
        <ReactQueryProvider>
          {/* Your layout content, including header, main content, footer, etc. */}
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
