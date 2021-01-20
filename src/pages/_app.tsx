import React from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { Context } from '../context/storeon'
import { HeadTitle } from '../core/components/headTitle'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Context>
      <HeadTitle />
      <Component {...pageProps} />
    </Context>
  )
}

export default NextApp
