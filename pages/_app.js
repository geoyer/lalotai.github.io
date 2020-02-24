import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const mdComponents = {
  wrapper: props => (
    <div style={{padding: '20px', backgroundColor: '#eee'}}>
      <main {...props} />
    </div>
  ),
  h1: props => <h1 style={{color: 'black'}} {...props} />
}

export default ({Component, pageProps}) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
)

