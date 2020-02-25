import React from 'react'
import styled from 'styled-components'

const StyledAppWrapper = styled.div`
  width: 640px;
  text-align: center;
  margin: 40px auto;

  &, * {
    box-sizing: border-box;
  }

  a {
    color: #666;
    border-bottom: 1px dashed #999;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #333;
      border-bottom: 1px dashed #333;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 0 15px;
  }
`

const AppWrapper = (props: any): any => {
  return (
    <StyledAppWrapper>
      {props.children}
    </StyledAppWrapper>
  )
}

export default AppWrapper
