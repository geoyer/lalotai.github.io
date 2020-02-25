import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledEditSuggestion = styled.div`
  margin: 40px auto;
  background: #f8f8f8;
  border-radius: 15px;
  color: #999;
  font-size: 12px;
  padding: 15px;
  width: 300px;
  line-height: 1.6;
`

const EditSuggestion = (props: any): any => {
  return (
    <StyledEditSuggestion>
      this website is open-source. something to improve?{' '}
      <Link href={props.href}>
        <a>make a pull request</a>
      </Link>
    </StyledEditSuggestion>
  )
}

export default EditSuggestion
