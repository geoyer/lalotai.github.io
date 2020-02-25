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
    line-height: 1.6;
    color: #333;
    font-size: 15px;
    font-weight: 300;

    code {
      background: #eee;
      font-size: 15px;
      padding: 2px 5px;
      letter-spacing: -0.02em;
      border-radius: 1px;
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
