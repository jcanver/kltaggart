import React from 'react'
import styled from 'styled-components'
import videos from 'data/videos'
import Flex from 'components/Flex'
import Thumbnail from './components/Thumbnail'

const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
`
const enterDelays = videos.personalProfiles.map((p, index) => (index + 1) * 100)

function Track({ videos, active, activeCategory, setVideo, absolute }) {
  return (
    <Wrapper absolute={absolute} active={activeCategory}>
      {videos.map((v, index) => (
        <Thumbnail
          key={v.videoId}
          videoId={v.videoId}
          show={activeCategory}
          active={active === v.videoId}
          onClick={() => setVideo(v.videoId)}
          title={v.title}
          shortTitle={v.shortTitle}
          enterDelay={enterDelays[index]}
        />
      ))}
    </Wrapper>
  )
}

export default Track
