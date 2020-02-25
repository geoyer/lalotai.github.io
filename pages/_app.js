import React from 'react'
import Normalize from 'react-normalize'
import Head from 'next/head'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import AppWrapper from '../components/AppWrapper'
import PostWrapper from '../components/PostWrapper'

export default ({Component, pageProps}) => {
  return (
    <MDXProvider components={{
      wrapper: PostWrapper
    }}>
      <Head>
        <title>Lalotai</title>
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700,900&display=swap" rel="stylesheet" />
      </Head>
      <Normalize />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </MDXProvider>
  )
}
