import React from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Context } from '../context/storeon'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Context>
      <Head>
        <title>リッフィー.みんな</title>
        <meta name="title" content="リッフィー.みんな" />
        <meta name="description" content="「こんにちは、リッフィーです。」" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="リッフィー.みんな" />
        <meta
          property="og:description"
          content="「こんにちは、リッフィーです。」"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/" />
        <meta property="twitter:title" content="リッフィー.みんな" />
        <meta
          property="twitter:description"
          content="「こんにちは、リッフィーです。」"
        />
      </Head>
      <Component {...pageProps} />
    </Context>
  )
}

export default NextApp
