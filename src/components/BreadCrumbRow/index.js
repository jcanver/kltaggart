import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import categories from 'data/videoCategories'
import Fade from 'components/Fade'
import Flex from 'components/Flex'

const Wrapper = styled.div`
  margin: 1rem 0 0 0;
  ${media.smDown`
    margin: 0.5rem 0 1rem 0;
  `}
`
const BackRow = styled(Flex)`
  padding: 0 3rem 0 1.5rem;
  ${media.smDown`
    padding: 0 1.5rem;
  `}
`
const Back = styled.div`
  display: inline-block;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`
const Category = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 2.25rem;
  letter-spacing: 1px;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
  ${media.smDown`
    font-size: 1.25rem;
  `}
`
const Col1 = styled.div`
  width: 30%;
`
const Col2 = styled.div`
  width: 30%;
  ${media.smDown`
    display: none;
  `}
`
const timeout = {
  enter: 200,
  exit: 0
}

function BreadCrumbRow({ showBack, showCategory, category, back }) {
  const categoryTitle = category ? categories.filter(cat => cat.key === category)[0].name : 'Personal Profiles'

  return (
    <Wrapper>
      <BackRow>
        <Col1>
          <Fade show={showBack} left timeout={timeout}>
            <Back onClick={back}>BACK</Back>
          </Fade>
        </Col1>

        <Fade show={showCategory} top timeout={timeout}>
          <Category>{categoryTitle}</Category>
        </Fade>

        <Col2 />
      </BackRow>
    </Wrapper>
  )
}

export default BreadCrumbRow
