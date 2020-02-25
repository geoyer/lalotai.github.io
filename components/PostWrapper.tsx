import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import EditSuggestion from './EditSuggestion'

const StyledPostWrapper = styled.div`
  font-family: 'Merriweather';

  & > a {
    font-size: 15px;
    margin: 40px 0;
  }

  h2 {
    text-align: center;
    margin: 40px 0;
    font-size: 20px;
  }

  .post {
    text-align: left;
    margin: 40px 0;
    color: #333;
    font-size: 15px;
    font-weight: 300;

    p, li {
      line-height: 1.6;
    }

    pre, code {
      background: #f8f8f8 !important;
    }

    hr {
      box-shadow: 0 1px #eee;
      border: 0;
      color: #333;
      height: 1px;
    }
  }
`

const PostWrapper = (props: any): any => {
  return (
    <StyledPostWrapper>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Link href="/">
        <a>← Lalotai</a>
      </Link>
      <h2>{props.title}</h2>
      <div className="post">
        <main {...props} />
      </div>
      <EditSuggestion
        href={`https://github.com/lalotai/lalotai.github.io/blob/dev/pages/${props.metadata.slug}.mdx`}
      />
    </StyledPostWrapper>
  )
}

export default PostWrapper
