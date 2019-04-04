import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import media from 'theme/media'
import videos from 'data/videos'
import Flex from 'components/Flex'
import Fade from 'components/Fade'
import Nav from 'components/Nav'
import LoadingSpinner from 'components/LoadingSpinner'
import PageWrapper from 'components/PageWrapper'
import Footer from 'components/Footer'
import timeout from 'utils/timeout'
import handleNavigate from 'utils/navigation'
import VideoThumbnail from './components/VideoThumbnail'

const Row = styled(Flex)`
  position: relative;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  padding: 20px 0 34px 0;
  ${media.smDown`
    width: 90%;
    justify-content: around;
    padding: 65px 0 55px 0;
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
  state = {
    pageLoaded: undefined,
    videosLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Category Videos'
  videoDelays = videos.personalProfiles.map((p, index) => ({ enter: (index + 1) * 75 + 200, exit: 0 }))

  componentDidMount () {
    this.handlePageLoad()
  }

  handlePageLoad = async () => {
    await timeout(100)
    await this.setPageLoaded()
    await timeout(500)
    this.preloadVideos(videos)
  }

  setPageLoaded = () => this.setState({ pageLoaded: true })

  preloadVideos = (imageArray, index) => {
    index = index || 0
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = `http://img.youtube.com/vi/${imageArray[index].videoId}/0.jpg`
      img.onload = () => this.preloadVideos(imageArray, index + 1)
    } else {
      this.setState({ videosLoaded: true })
    }
  }

  render() {
    const { category } = this.props
    const { pageLoaded, videosLoaded } = this.state
    const thumbnailWidth = category && getThumbnailWidth(category)
    const thumbnailHeight = category && getThumbnailHeight(category)
    return (
      <PageWrapper loaded={pageLoaded}>
        <Nav
          active={this.page}
          handleNavigate={this.handleNavigate}
          loaded={pageLoaded}
        />
        <Row>

          <Fade show={!videosLoaded}>
            <LoadingSpinner />
          </Fade>
          {videos[category || 'events'].map((video, index) =>
            // const dimensions = getDimensionsType(videos[category || 'personalProfiles'])
            (
              <VideoThumbnail
                key={index}
                videoId={video.videoId}
                title={video.title}
                shortTitle={video.shortTitle}
                show={pageLoaded && videosLoaded}
                handleNavigate={this.handleNavigate}
                timeout={this.videoDelays[index]}
                width={thumbnailWidth}
                height={thumbnailHeight}
                category={category}
              />
            )
          )}
        </Row>
        <Footer
          page={this.page}
          show={pageLoaded}
        />
      </PageWrapper>
    )
  }
}

export default withRouteData(CategoryVideos)
