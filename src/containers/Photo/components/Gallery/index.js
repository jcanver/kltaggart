import React from 'react'
import media from 'theme/media'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Thumbnail from './components/Thumbnail'

const Wrapper = styled.div`
  position: relative;
  padding: 0 1rem 1.5rem 1rem;
  ${media.mdDown`
    padding: 60px 1rem 0 1rem;
  `}
  ${media.smDown`
    padding: 60px 1rem;
  `}
`
const Carousel = styled(Flex)`
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1000px;
  padding: 0.5%;
`

function Gallery({ items, remaining, handleClick, show, photoDelays }) {
  return (
    <Wrapper>
      <Carousel>
        {items.map((image, index) => (
          <Thumbnail
            key={index}
            index={index}
            image={image}
            handleClick={handleClick}
            show={show}
            timeout={photoDelays[index]}
          />
        ))}

        {remaining.map((r, i) =>
          (<Thumbnail
            hide
            key={i + 4000}
            index={i}
          />)
        )}
      </Carousel>
    </Wrapper>
  )
}

Gallery.propTypes = {
  items: PropTypes.array,
  remaining: PropTypes.array,
  handleClick: PropTypes.func
}

export default Gallery
