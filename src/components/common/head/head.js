import React from 'react';
import Head from 'next/head';

function IndexHead() {
  return (
    <>
      <Head>
        <link rel="icon" sizes="32x32" href="/images/logo_main.svg" type="image/svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;400;600;700&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
}

export default IndexHead;
