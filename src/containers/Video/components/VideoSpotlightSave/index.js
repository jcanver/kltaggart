import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import Fade from 'components/Fade'
import Spotlight from './components/Spotlight'
import Carousel from './components/Carousel'

const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 2rem auto;
  background: radial-gradient(rgba(255,255,255,0.4) 25%, transparent 75%);
  ${media.smDown`
    display: none;
  `}
`
const Margin = styled.div`
  ${media.smDown`
    margin-top: 0;
  `}
`
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 104px);
  top: 68px;
  top: 0;
  left: 0;
  ${'' /* overflow-y: scroll; */}
`

function VideoSpotlight({ show, video, category, setCategory, setVideo }) {
  return (
    <Wrapper>
      <Fade show={show} bottom timeout={{ enter: 800, exit: 0 }}>
        <Margin>
          <Spotlight
            videoId={video}
            category={category}
          />
          <Divider />
          <Carousel
            active={video}
            category={category}
            setVideo={setVideo}
            setCategory={setCategory}
          />
        </Margin>
      </Fade>
    </Wrapper>
  )
}

export default VideoSpotlight
