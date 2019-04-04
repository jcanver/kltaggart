import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Fade from 'components/Fade'
import media from 'theme/media'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: relative;
  transition: opacity 0.3s;
  overflow: hidden;
  cursor: ${props => !props.hide && 'pointer'};
  opacity: ${props => props.hide && '0 !important'};
  &:hover {
    opacity: 1;
  }
  ${media.mdDown`
    opacity: 1;
  `}
  @media(max-width: 400px) {
    display: ${props => props.hide ? 'none' : 'block'};
  }
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  transition: top 0.3s, left 0.3s, width 0.3s, height 0.3s;
  &:hover {
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
  }
`
const AppearWrapper = styled(Flex)`
  width: 19%;
  flex-grow: 1;
  height: 120px;
  margin: 0.5%;
  ${media.mdDown`
    width: 24%;
    display: ${props => (props.hide && props.index === 1) ? 'none' : 'block'};
  `}
  ${media.smDown`
    width: 49%;
    display: ${props => (props.hide && props.index === 0) ? 'none' : 'block'};
  `}
`
const fadeStyles = {
  width: '100%',
  height: '100%'
}

function Thumbnail({ hide, image, index, handleClick, show, timeout, ...rest }) {
  return (
    <AppearWrapper hide={hide} index={index}>
      <Fade show={show} bottom timeout={timeout} styles={fadeStyles} className="gallery-item">
        <Wrapper hide={hide} index={index} {...rest}>
          {!hide &&
            <div>
              <Img
                src={image}
                onClick={() => handleClick(index)}
              />
            </div>
          }
        </Wrapper>
      </Fade>
    </AppearWrapper>
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
  hide: PropTypes.bool
}

export default Thumbnail
