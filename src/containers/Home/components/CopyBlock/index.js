import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import media from 'theme/media'

const Wrapper = styled(Flex)`
  color: white;
  padding: 0 3rem;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
const Copy = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 1px;
  @media(max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media(max-width: 560px) {
    font-size: 1rem;
  }
`
const Landing = styled.div`
  position: relative;
  bottom: 50px;
  h1 {
    font-family: 'Permanent Marker';
    font-size: 7rem;
    letter-spacing: 1rem;
    margin: 0 auto;
    text-align: center;
    @media(max-width: 1450px) {
      font-size: 4rem;
    }
    @media(max-width: 1000px) {
      font-size: 2rem;
    }
  }
`
const CopyWrapper = styled(Flex)`
  justify-content: center;
`
const Circle = styled.div`
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 50%;
  background: white;
  margin: 0 2rem;
  @media(max-width: 1000px) {
    margin: 0 1rem;
  }
`
const MobileBreak = styled.br`
  ${media.smUp`
    display: none;
  `}
`
const Space = styled.span`
  ${media.smDown`
    display: none;
  `}
`

function CopyBlock() {
  return (
    <Wrapper>
      <Landing>
        <h1>
          Kirsten
          <Space>&nbsp;</Space>
          <MobileBreak />
          Taggart
        </h1>
        <CopyWrapper>
          <Copy>PRODUCER</Copy>
          <Circle />
          <Copy>EDITOR</Copy>
          <Circle />
          <Copy>VIDEOGRAPHER</Copy>
        </CopyWrapper>
      </Landing>
    </Wrapper>
  )
}

export default CopyBlock
