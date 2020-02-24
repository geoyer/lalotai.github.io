import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

const Wrapper = styled.div`

`;

const md = {
  wrapper: props => (
    <Wrapper>
      <Head>
        <title>{props.title}</title>
      </Head>
      <h1>{props.title}</h1>
      <main {...props} />
    </Wrapper>
  ),
  // h1: props => <h1 style={{color: 'black'}} {...props} />
};

export default ({Component, pageProps}) => {
  return (
    <MDXProvider components={md}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

