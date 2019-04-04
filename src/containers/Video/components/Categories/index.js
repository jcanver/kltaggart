import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import categories from 'data/videoCategories'
import Flex from 'components/Flex'
import Category from './components/Category'

export default function Categories({ show, handleNavigate }) {
  return (
    <Wrapper>
      {categories.map((category, index) =>
        (<Category
          key={index}
          categoryKey={category.key}
          src={category.src}
          copy={category.name}
          top={category.top}
          bottom={category.bottom}
          left={category.left}
          right={category.right}
          show={show}
          handleNavigate={handleNavigate}
        />)
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  width: 100%;
  padding: 0 0 32px 0;
  ${media.mdDown`
    padding: 63px 0 35px 0;
  `}
  ${media.smDown`
    align-content: flex-start;
    padding: 63px 0;
  `}
`
