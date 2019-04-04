import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import categories from 'data/videoCategories'
import media from 'theme/media'

const Wrapper = styled.div`
  margin: 0 0.25rem;
  padding: 0 0 1rem 0;
`
const Row = styled(Flex)`
  justify-content: center;
`
const Category = styled.div`
  color: ${props => props.active ? props.theme.secondary : props.theme.white};
  cursor: ${props => props.active ? 'auto' : 'pointer'};
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 1px;
  font-weight: 100;
  margin: 0 1rem;
  transition: color 0.3s;
  text-align: center;
  &:hover {
    color: ${props => props.theme.secondary};
  }
  ${media.mdDown`
    font-size: 1rem;
  `}
`

function CategoryNav({ category, select }) {
  return (
    <Wrapper>
      <Row>
        {categories.map((c, index) => (
          <Category
            key={index}
            active={category === c.key}
            onClick={() => select(c.key)}
          >
            {c.name}
          </Category>
        ))}
      </Row>
    </Wrapper>
  )
}

export default CategoryNav
