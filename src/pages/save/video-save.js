import React from 'react'
import styled from 'styled-components'
import media from 'theme/media'
import videos from 'data/videos'
import categories from 'data/videoCategories'
import PageWrapper from 'components/PageWrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import LoadingSpinner from 'components/LoadingSpinner'
import handleNavigate from 'utils/navigation'
import Categories from 'containers/Video/components/Categories'
// import CategoryVideos from 'containers/Video/components/CategoryVideosSave'
// import VideoSpotlight from 'containers/Video/components/VideoSpotlight'
import timeout from 'utils/timeout'

const OuterWrapper = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.primary};
  overflow-y: scroll;
`
const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1400px;
  ${media.smDown`
    padding: 0 0 2rem 0;
  `}
`
const Fade = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s;
`

// const videoDelays = videos.personalProfiles.map((p, index) => ({ enter: (index + 1) * 75 + 200, exit: 0 }))

class Video extends React.PureComponent {
  state = {
    pageLoaded: false,
    assetsLoaded: false,
    videosLoaded: false,
    category: null,
    video: null,
    screen: 'categories'
  }
  handleNavigate = handleNavigate.bind(this)
  page = 'Video'

  componentDidMount () {
    this.handlePageLoad()
    // setTimeout(() => {
    //   Promise.resolve(this.setPageLoaded()).then(() => {
    //     setTimeout(() => {
    //       Promise.resolve(this.preloadImages(categories)).then(() => {
    //         setTimeout(() => {
    //           this.preloadVideos(videos)
    //         }, 3000)
    //       })
    //     }, 0)
    //   })
    // }, 1000)
  }

  handlePageLoad = async () => {
    // await timeout(1000)
    await this.setPageLoaded()
    await this.preloadImages(categories)
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

  preloadImages = (imageArray, index) => {
    index = index || 0
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = imageArray[index].src
      img.onload = () => this.preloadImages(imageArray, index + 1)
    } else {
      this.setState({ assetsLoaded: true })
    }
  }

  setCategory = category => this.setState({ category })

  setVideo = video => this.setState({ video })

  setScreen = screen => this.setState({ screen })

  backTo = screen => {
    Promise.resolve(this.setState({ screen })).then(() => {
      if (screen === 'categories') {
        setTimeout(() => this.setCategory(''), 800)
      }
    })
  }

  // clickCategory = category => {
  //   Promise.resolve(this.setCategory(category)).then(() => {
  //     this.setScreen('categoryVideos')
  //   })
  // }

  clickVideo = video => {
    Promise.resolve(this.setVideo(video)).then(() => {
      this.setScreen('video')
    })
  }

  render() {
    const { pageLoaded, assetsLoaded, videosLoaded, video, category, screen } = this.state

    const showCategories = pageLoaded && assetsLoaded && screen === 'categories'
    const showCategoryVideos = screen === 'categoryVideos'
    const showVideo = videosLoaded && screen === 'video'

    return (
      <PageWrapper loaded={pageLoaded} title="Video">
        <OuterWrapper>
          <Nav
            active={this.page}
            handleNavigate={this.handleNavigate}
            loaded={pageLoaded}
            videoCategory={category}
            showBack={showCategoryVideos || showVideo}
            showCategory={showCategoryVideos}
            videoScreen={screen}
            backTo={this.backTo}
            // showBreadcrumb
          />

          <Fade show={!pageLoaded || !assetsLoaded}>
            <LoadingSpinner />
          </Fade>

          <Wrapper>
            {/* <VideoSpotlight
              show={showVideo}
              category={category}
              video={video}
              backTo={this.backTo}
              setCategory={this.setCategory}
              setVideo={this.setVideo}
            />
            <CategoryVideos
              show={showCategoryVideos}
              clickVideo={this.clickVideo}
              videoDelays={videoDelays}
              category={category}
            /> */}
            <Categories
              show={showCategories}
              handleNavigate={this.handleNavigate}
            />
          </Wrapper>

          <Footer page={this.page} show={pageLoaded} />
        </OuterWrapper>
      </PageWrapper>
    )
  }
}

export default Video
