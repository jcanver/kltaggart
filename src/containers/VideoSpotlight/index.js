import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import media from 'theme/media'
import timeout from 'utils/timeout'
import handleNavigate from 'utils/navigation'
import Fade from 'components/Fade'
import Nav from 'components/Nav'
import LoadingSpinner from 'components/LoadingSpinner'
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
  position: relative;
  ${media.mdDown`
    padding: 40px 0 0 0;
  `}
  ${media.smDown`
    padding: 50px 0 0 0;
  `}
`
const FadeTransition = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.8s;
`

class VideoSpotlight extends React.PureComponent {
  state = {
    pageLoaded: undefined,
    category: this.props.category,
    assetsLoaded: false
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Video Spotlight'

  componentDidMount () {
    this.handlePageLoad()
  }

  handlePageLoad = async () => {
    await timeout(50)
    await this.setPageLoaded()
    this.preloadVideo(this.props.video.videoId)
  }

  preloadVideo = async (videoId) => {
    const img = new Image()
    img.src = `http://img.youtube.com/vi/${videoId}/0.jpg`
    img.onload = () => this.setState({ assetsLoaded: true })
  }
  // preloadVideos = (imageArray, index) => {
  //   index = index || 0
  //   if (imageArray && imageArray.length > index) {
  //     const img = new Image()
  //     img.src = `http://img.youtube.com/vi/${imageArray[index].videoId}/0.jpg`
  //     img.onload = () => this.preloadVideos(imageArray, index + 1)
  //   } else {
  //     this.setState({ assetsLoaded: true })
  //   }
  // }

  setPageLoaded = () => this.setState({ pageLoaded: true })

  setCategory = category => this.setState({ category })


  render() {
    const { video, category } = this.props
    const { pageLoaded, assetsLoaded } = this.state
    return (
      <Wrapper>
        <Nav
          active={this.page}
          handleNavigate={this.handleNavigate}
          loaded={pageLoaded}
        />

        <FadeTransition show={!assetsLoaded}>
          <LoadingSpinner />
        </FadeTransition>

        <Fade show={pageLoaded && assetsLoaded} bottom>
          <Margin>
            <Spotlight
              videoId={video.videoId}
              category={category}
            />
            <Divider />
            <Carousel
              active={video.videoId}
              category={this.state.category}
              handleNavigate={this.handleNavigate}
              setCategory={this.setCategory}
            />
          </Margin>
        </Fade>
      </Wrapper>
    )
  }
}

export default withRouteData(VideoSpotlight)
