import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter';

const StyledCode = styled.div`

`

const Code = (props: any): any => {
  const { lang, code } = props
  return (
    <StyledCode>
      <SyntaxHighlighter language={lang}>
        {code}
      </SyntaxHighlighter>
    </StyledCode>
  )
}

export default Code
