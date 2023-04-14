import React from 'react'
import App from 'next/app'
import SageGlobalStyle from '../components/GlobalStyle'
import { Normalize } from 'styled-normalize'
import Favicon from '../components/Favicon'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Favicon />
        <Normalize />
        <SageGlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
