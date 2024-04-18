import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/Quicksand.tff" as="font" crossOrigin="anonymous" />
          {/* Google Analytics */}
          <script
            async
            src="https://hm.baidu.com/hm.js?68b9a44d9afb05aacddb2d8d289f3119"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7361597277581518"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="font-bold">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
