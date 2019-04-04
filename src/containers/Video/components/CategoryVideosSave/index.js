import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import videos from 'data/videos'
import Flex from 'components/Flex'
import VideoThumbnail from './components/VideoThumbnail'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: calc(100% - 15px);
  height: calc(100vh - 104px);
  min-height: 500px;
  top: 68px;
  left: 0;
  background: ${props => props.show ? props.theme.primary : 'transparent'};
  transition: background 0.8s;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  ${media.smDown`
    top: 61px;
    overflow-y: scroll;
  `}
`
const Row = styled(Flex)`
  position: relative;
  top: 15px;
  width: 80%;
  left: 10%;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  ${media.smDown`
    justify-content: around;
    left: 1.5rem;
    width: calc(100% - 3rem);
    margin-bottom: 3rem;
  `}
`

function getThumbnailWidth(category) {
  if (videos[category].length === 1) {
    return '60%'
  }
  if (videos[category].length === 2) {
    return '48%'
  }
  if (videos[category].length === 3) {
    return '34%'
  }
}

function getThumbnailHeight(category) {
  if (videos[category].length === 1) {
    return '420px'
  }
  if (videos[category].length === 2) {
    return '340px'
  }
  if (videos[category].length === 3) {
    return '210px'
  }
}

// function getDimensionsType(videos) {
//   switch (videos.length) {
//     case 1:
//       return 'single'
//   }
//   if (videos.length === 1) {
//     return '420px'
//   }
//   if (videos.length === 2) {
//     return '340px'
//   }
//   if (videos.length === 3) {
//     return '210px'
//   }
// }

class CategoryVideos extends React.PureComponent {
  render() {
    const { show, clickVideo, category, videoDelays } = this.props
    const thumbnailWidth = category && getThumbnailWidth(category)
    const thumbnailHeight = category && getThumbnailHeight(category)

    return (
      <Wrapper show={show}>
        <Row>
          {videos[category || 'events'].map((video, index) =>
            // const dimensions = getDimensionsType(videos[category || 'personalProfiles'])
            (
              <VideoThumbnail
                key={index}
                videoId={video.videoId}
                title={video.title}
                shortTitle={video.shortTitle}
                show={show}
                clickVideo={clickVideo}
                timeout={videoDelays[index]}
                width={thumbnailWidth}
                height={thumbnailHeight}
              />
            )
          )}
        </Row>
      </Wrapper>
    )
  }
}

export default CategoryVideos
